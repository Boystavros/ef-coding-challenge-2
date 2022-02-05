import { useState, useEffect } from 'react';
import './App.css';
import WordTable from './Components/WordTable';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  
  const [reviews, setReviews] = useState([]);
  const [splitReviews, setSplitReviews] = useState([]);
  const [wordFrequencies, setWordFrequencies] = useState([]);
  
  const getReviews = () => {
    fetch(`reviews.json`)
    .then(res => res.json())
    .then(res => setReviews(res.reviews))
  }

  useEffect(() => {
    getReviews()
  }, [])

  useEffect(() => {
    const reviewWords = reviews.map((review) => {
      return review.toLowerCase().match(/\b[\w']+\b/g)})
    setSplitReviews(reviewWords)
  }, [reviews])

  useEffect(() => {
    const tempWords = {}
    splitReviews.map((reviewArr) => {
       return reviewArr.map((word) => {
         return tempWords[word]? tempWords[word] += 1 : tempWords[word] = 1; 
      })
    })

    const wordItemsArr = Object.keys(tempWords).map((word) => {
      return {word: word, occurences: tempWords[word]}
    })
    console.log(wordItemsArr)
    setWordFrequencies(wordItemsArr);
  }, [splitReviews])

  
  return (
    <>
      <h1>Word occurences table</h1>
      <WordTable wordFrequencies={wordFrequencies}/>
      <h1>Word Cloud</h1>
      
    </>
  );
}

export default App;

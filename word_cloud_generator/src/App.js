import { useState, useEffect } from 'react';
import './App.css';
import WordTable from './Components/WordItem';

function App() {
  
  const [reviews, setReviews] = useState([]);
  const [splitReviews, setSplitReviews] = useState([]);
  const [wordFrequency, setWordFrequency] = useState({});
  
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
      return review.match(/\b[\w']+\b/g)})
    setSplitReviews(reviewWords)
  }, [reviews])

  useEffect(() => {
    const tempWords = {}
    splitReviews.map((reviewArr) => {
       return reviewArr.map((word) => {
         return tempWords[word]? tempWords[word] += 1 : tempWords[word] = 1; 
      })
    })
    setWordFrequency(tempWords);
  }, [splitReviews])

  
  return (
    <>
      <h1>This is the main container</h1>
      <WordTable />
    </>
  );
}

export default App;

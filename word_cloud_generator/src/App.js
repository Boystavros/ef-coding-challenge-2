import { useState, useEffect } from 'react';
import './App.css';
import WordTable from './Components/WordItem';

function App() {
  
  const [reviews, setReviews] = useState([]);
  const [words, setWords] = useState({});
  
  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    const review = reviews[9];
    console.log(review)
    getReviewWords(review)
  }, [reviews])

  const getData = () => {
    fetch(`reviews.json`)
    .then(res => res.json())
    .then(res => setReviews(res.reviews))
  }

  const getReviewWords = (review) => { 
    console.log(review.match(/\b[\w']+\b/g))
  }
  
  return (
    <>
      <h1>This is the main container</h1>
      <WordTable />
    </>
  );
}

export default App;

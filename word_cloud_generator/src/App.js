import { useState, useEffect } from 'react';
import './App.css';
import WordTable from './Components/WordItem';
import ReviewData from './ReviewData';

function App() {
  
  const [reviews, setReviews] = useState([]);
  const [words, setWords] = useState([]);

  // const url = ReviewData[reviews];
  
  useEffect(() => {
    setReviews(ReviewData[reviews]);
  }, [])

  // const getReviews = () => {
  //   fetch('../../reviews.json')
  //   .then(res => res.json())
  //   .then(reviews => setReviews(reviews))
  // }

  // const getWords = () => {
  //   const reviewWords = reviews.map((review) => {
      
  //   })
  // }
  
  return (
    <>
      <h1>This is the main container</h1>
      <WordTable />
    </>
  );
}

export default App;

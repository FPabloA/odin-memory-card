import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [cards, setCards] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  const [score, changeScore] = useState(0);
  const [bestScore, changeBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  //uses fisher-yates shuffle
  function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];

    setCards(array);
  }
}

  const cardClick = (cardText) => {

    if (clickedCards.includes(cardText)) {
      if(score > bestScore) {
        const newBest = score;
        changeBestScore(newBest);
      }
      const newScore = 0;
      changeScore(newScore);
      setClickedCards([]);
    }
    else {
      const newScore = score + 1;
      changeScore(newScore);
      setClickedCards([...clickedCards, cardText]);
    }

    shuffle([...cards]);
    console.log(score);
  }

  return (
    <>
      <div className='score-tracker'>
        <div>Score: {score}</div>
        <div>Best Score: {bestScore}</div>
        </div>
      {
        cards.map((item) => {
          return <Card text={item} handleClick={() => cardClick(item)}></Card>;
        })
      }
    </>
  )
}

export default App

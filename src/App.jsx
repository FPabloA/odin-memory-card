import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [cards, setCards] = useState([]);
  const [score, changeScore] = useState(0);
  const [bestScore, changeBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  // const genRandom = (min=1, max=139) => {
  //   return Math.floor(Math.random() * (max - min + 1) + min)
  // }

  useEffect(() => {
    getCards();
  }, []);

  async function getCards() {
    const startID = Math.floor(Math.random() * (139 - 1 + 1) + 1);
    const arr = [];
    for (let i = startID; i < startID+12; i++){
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const data = await response.json();
      arr.push(data);
    }
    setCards(arr);
    console.log(arr[0]);
  }

  //uses fisher-yates shuffle
  const shuffle = (array) => {
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
  }

  
  
  return (
    <>
      <div className='score-tracker'>
        <div>Score: {score}</div>
        <div>Best Score: {bestScore}</div>
        </div>
      {
        cards.map((item) => {
          return <Card text={item.name} imgURL={item.sprites.front_default} handleClick={() => cardClick(item.name)}></Card>;
        })
      }
    </>
  )
  

  
}

export default App

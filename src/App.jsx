import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  return (
    <>
      {
        cards.map((item) => {
          return <Card text={item}></Card>;
        })
      }
    </>
  )
}

export default App

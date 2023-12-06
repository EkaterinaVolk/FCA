import './Main.scss';
import Card from '../Card/Card.jsx'
import Table from '../Table/Table.jsx'
import Inputs from '../Inputs/Inputs.jsx'
import { useState } from 'react';


function Main({wordlist, setWordlist, index=0}) {

  const [cardIndex, setCardIndex] = useState(index);

  function previousCard(){
    if(cardIndex === 0){setCardIndex((wordlist.length -1))}
    else {
    setCardIndex(cardIndex -1) 
    }
  }

  function nextCard() {
    if(cardIndex === (wordlist.length -1)){setCardIndex(0)}
    else {
    setCardIndex(cardIndex +1)    
  }
}


  return (
    <div className='container__main'>
    <div className="container__main-cards">
    <button onClick={previousCard}>туда</button>
    <Card tags={wordlist[cardIndex].tags} english={wordlist[cardIndex].english} translation={wordlist[cardIndex].translation} transcription={wordlist[cardIndex].transcription}/>
    <button onClick={nextCard}>сюда</button>
    </div>
    <Inputs wordlist={wordlist} setWordlist={setWordlist}/>
    {wordlist.map((word, index) =>  <Table key={index} {...word}/>)}

    </div>
  )
}

export default Main;
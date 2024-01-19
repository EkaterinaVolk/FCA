import { useState, useContext } from 'react';
import './Inputs.scss';
import Heading from '../Heading/Heading';
import Post from '../../services/post.js';
import {WordlistContext} from '../App/WordlistContext.jsx'

export default function Inputs() {
  const {context, setContext} = useContext(WordlistContext)

  const [inputOne, setInputOne] = useState('');
  const [inputTwo, setInputTwo] = useState('');
  const [inputThree, setInputThree] = useState('');
  const [inputFour, setInputFour] = useState('');

  function addNewWord(english, russian, transcription, tags) {
    const lastId = context[context.length - 1].id
    const newWord = {        
      id: Number(lastId) + 1,
      english: english,
      transcription: transcription,
      russian: russian,
      tags: tags
    }
    
    setContext(prevState => [...prevState, newWord])
    Post.addNewWordServer(newWord)
  }

  function addNewWordAndShowResult() {
    if(inputOne && inputTwo && inputThree && inputFour) {
    addNewWord(inputOne, inputTwo, inputThree, inputFour)
    }
    console.log(context)
    setInputOne('')
    setInputTwo('')
    setInputThree('')
    setInputFour('')
  }
  
  return (
    <div className='container__inputs'>
       <Heading text="Add a new word"/>
<div className="inputs-container__inputs">
    <input className='input' type="text" placeholder='word' value={inputOne} onChange={(event) => setInputOne(event.target.value)}/>
    <input className='input' type="text" placeholder='russian' value={inputTwo} onChange={(event) => setInputTwo(event.target.value)}/>
    <input className='input' type="text" placeholder='transcription' value={inputThree} onChange={(event) => setInputThree(event.target.value)}/>
    <input className='input' type="text" placeholder='tag' value={inputFour} onChange={(event) => setInputFour(event.target.value)}/>
    <button type="submit" className='button__inputs' onClick={addNewWordAndShowResult}>Add</button>
</div>
    </div>
  )
}

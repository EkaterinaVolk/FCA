import { useState, useContext } from 'react';
import './Inputs.scss';
import Heading from '../Heading/Heading';
import {WordlistContext} from '../App/WordlistContext.jsx'

export default function Inputs() {
  const {context, setContext} = useContext(WordlistContext)

  const [inputOne, setInputOne] = useState('');
  const [inputTwo, setInputTwo] = useState('');
  const [inputThree, setInputThree] = useState('');
  const [inputFour, setInputFour] = useState('');

  function addNewWord() {
    let newWord = {
        english: inputOne,
        translation: inputTwo,
        transcription: inputThree,
        tags: inputFour
    };

    setContext(context.push(newWord));
      console.log(context);
  }
  
  return (
    <div className='container__inputs'>
       <Heading text="Add a new word"/>
<div className="inputs-container__inputs">
    <input className='input' type="text" placeholder='word' value={inputOne} onChange={(event) => setInputOne(event.target.value)}/>
    <input className='input' type="text" placeholder='translation' value={inputTwo} onChange={(event) => setInputTwo(event.target.value)}/>
    <input className='input' type="text" placeholder='transcription' value={inputThree} onChange={(event) => setInputThree(event.target.value)}/>
    <input className='input' type="text" placeholder='tag' value={inputFour} onChange={(event) => setInputFour(event.target.value)}/>
    <button type="submit" className='button__inputs' onClick={addNewWord}>Add</button>
</div>
    </div>
  )
}

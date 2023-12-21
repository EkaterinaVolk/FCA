import { useState } from 'react';
import './Inputs.scss';
import Heading from '../Heading/Heading';


export default function Inputs({wordlist, setWordlist}) {

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

      setWordlist(wordlist.push(newWord));
      console.log(wordlist);
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

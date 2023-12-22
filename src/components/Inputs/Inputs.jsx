import { useState } from 'react';
import './Inputs.scss';
import Heading from '../Heading/Heading';


export default function Inputs({wordlist, setWordlist, addNewWord}) {

  const [inputOne, setInputOne] = useState('');
  const [inputTwo, setInputTwo] = useState('');
  const [inputThree, setInputThree] = useState('');
  const [inputFour, setInputFour] = useState('');
  const [validateInputOne, setValidateInputOne] = useState('false')
  const [validateInputTwo, setValidateInputTwo] = useState('false')
  const [validateInputThree, setValidateInputThree] = useState('false')
  const [validateInputFour, setValidateInputFour] = useState('false')

  function handleValidate() {
    if(!inputOne && !inputTwo && !inputThree && !inputFour) {
      setValidateInputOne(true)
      setValidateInputTwo(true)
      setValidateInputThree(true)
      setValidateInputFour(true)
    }
  }

  function addNewWordAndShowResult() {
    handleValidate();
    if(inputOne && inputTwo && inputThree && inputFour) {
    addNewWord(inputOne, inputTwo, inputThree, inputFour)
    }
    console.log(wordlist)
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
    <input className='input' type="text" placeholder='translation' value={inputTwo} onChange={(event) => setInputTwo(event.target.value)}/>
    <input className='input' type="text" placeholder='transcription' value={inputThree} onChange={(event) => setInputThree(event.target.value)}/>
    <input className='input' type="text" placeholder='tag' value={inputFour} onChange={(event) => setInputFour(event.target.value)}/>
    <button type="submit" className='button__inputs' onClick={addNewWordAndShowResult}>Add</button>
</div>
<div className="new-word">{}</div>
    </div>
  )
}

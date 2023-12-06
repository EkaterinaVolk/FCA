import { useState } from 'react';
import './Inputs.scss';

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

    // Вот здесь я пытаюсь записать новое слово в массив, оно записывается, но не появляется в App, откуда массив передаётся пропсами :( и страница просто пустой становится 

      setWordlist(wordlist.push(newWord));
      console.log(wordlist);
  }
  
  return (
    <div className='container__inputs'>
        <h3 className='header__inputs'>Add a new word</h3>
<div className="inputs-container__inputs">
    <input className='input' type="text" placeholder='word' value={inputOne} onChange={(event) => setInputOne(event.target.value)}/>
    <input className='input' type="text" placeholder='translation' value={inputTwo} onChange={(event) => setInputTwo(event.target.value)}/>
    <input className='input' type="text" placeholder='transcription' value={inputThree} onChange={(event) => setInputThree(event.target.value)}/>
    <input className='input' type="text" placeholder='tag' value={inputFour} onChange={(event) => setInputFour(event.target.value)}/>
    <button type="submit" className='button__inputs' onClick={addNewWord}>Add</button>
</div>
<h3 className='header__inputs'>Wordlist</h3>
    </div>
  )
}

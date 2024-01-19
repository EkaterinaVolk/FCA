import './Table.scss';
import { useState, useEffect, useContext } from 'react';
import {WordlistContext} from '../App/WordlistContext.jsx'

export default function Table(props) {
  const {context, setContext} = useContext(WordlistContext)
  
 
  const [changeState, setChangeState] = useState(false);
  const handleChangeState = () => {setChangeState(!changeState)} 
  
  const [english, setEnglish] = useState('')
  const [russian, setRussian] = useState('')
  const [transcription, setTranscription] = useState('')
  const [tags, setTags] = useState('')
  const [validateEnglish, setValidateEnglish] = useState(false)
  const [validateRussian, setValidateRussian] = useState(false)
  const [validateTranscription, setValidateTranscription] = useState(false)
  const [validateTags, setValidateTags] = useState(false)

  function handleValidate() {
    if(!english && !russian && !transcription && !tags) {
      setValidateEnglish(true)
      setValidateRussian(true)
      setValidateTranscription(true)
      setValidateTags(true)
    }
  }

   function consoleLogAndClose(){
    handleValidate();
    saveEditedWord(english, russian, transcription, tags);
    console.log(english, russian, transcription, tags);
    handleChangeState();
  }

  useEffect(() => {
    setEnglish(props.english)
    setRussian(props.russian)
    setTranscription(props.transcription)
    setTags(props.tags)
  }, [changeState])


  async function postNewWordlist(newWordList) {
    try {
      fetch('http://itgirlschool.justmakeit.ru/api/words{id}/delete', {
        method: 'POST',
        body: JSON.stringify(newWordList)
      });
    } catch (e) {
      return <NoMatch/>;
    }
  }

  function deleteWord(id) {
    const newWordList = context.filter(word => word.id != id)
    setContext(newWordList)
  }


    function saveEditedWord(english, russian, trasctiption, tags, id) {
    const editedWordList = context.map(word => {
      if (word.id === id) {
        word.english = english;
        word.transcription = trasctiption;
        word.russian = russian;
        word.tags = tags
        return word
      }
      return word
    })
    setContext(editedWordList)
  }

  return (
    <div className='container__table'>
        <div className="words-container__table">
        {changeState 
        ? 
        <div className="words-container__change">
        <form className="words-container__inputs">
        <input type='text' required value={english} onChange={(e) => setEnglish(e.target.value)} className='cell__table-input' placeholder={props.english} name="english"></input>
        <input type='text' required value={russian} onChange={(e) => setRussian(e.target.value)} className='cell__table-input' placeholder={props.russian} name="russian"></input>
        <input type='text' required value={transcription} onChange={(e) => setTranscription(e.target.value)} className='cell__table-input' placeholder={props.transcription} name="transcription"></input>
        <input type='text' required value={tags} onChange={(e) => setTags(e.target.value)} className='cell__table-input' placeholder={props.tags} name="tags"></input>

        </form>
        <div className="words-container__table">
        <div className='cell__table-validation'>{!english && <span>*fill out</span>}</div>
        <div className='cell__table-validation'>{!russian && <span>*fill out</span>}</div>
        <div className='cell__table-validation'>{!transcription && <span>*fill out</span>}</div>
        <div className='cell__table-validation'>{!tags && <span>*fill out</span>}</div>
        </div>
       </div>
        : <div className="words-container__table">
        <div className='cell__table'>{props.english}</div>
        <div className='cell__table'>{props.russian}</div>
        <div className='cell__table'>{props.transcription}</div>
        <div className='cell__table'>{props.tags}</div>

        </div>}
        {changeState 
        ? <div className="container__table-buttons">
          {(!english || !russian || !transcription || !tags)

          ? <button className='save-button__table' type='button' onClick={consoleLogAndClose} disabled="disable">save</button>
          : <button className='save-button__table' type='button' onClick={consoleLogAndClose}>save</button>}

        <button className='cancel-button__table' onClick={handleChangeState}>cancel</button> </div>
        :        <button className='change-button__table' onClick={handleChangeState}>change</button>}
                            <button className='delete-button__table' onClick={() =>deleteWord(props.id)}>del</button>
        </div>
    </div>
  )
}


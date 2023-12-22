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
  const [validateEnglish, setValidateEnglish] = useState('false')
  const [validateRussian, setValidateRussian] = useState('false')
  const [validateTranscription, setValidateTranscription] = useState('false')
  const [validateTags, setValidateTags] = useState('false')

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
    console.log(english, russian, transcription, tags);
    props.saveEditedWord(english, russian, transcription, tags);
    handleChangeState();
  }

  useEffect(() => {
    setEnglish(props.english)
    setRussian(props.russian)
    setTranscription(props.transcription)
    setTags(props.tags)
  }, [changeState])

  function deleteWord(id) {
    const newWordList = context.filter(word => word.id != id)
    setContext(newWordList)
  }

  return (
    <div className='container__table'>
        <div className="words-container__table">
        {changeState 
        ? 
        <form className="words-container__table">
        <input type='text' required value={english} onChange={(e) => setEnglish(e.target.value)} className='cell__table-input' placeholder={props.english} name="english"></input>
        <input type='text' required value={russian} onChange={(e) => setRussian(e.target.value)} className='cell__table-input' placeholder={props.russian} name="russian"></input>
        <input type='text' required value={transcription} onChange={(e) => setTranscription(e.target.value)} className='cell__table-input' placeholder={props.transcription} name="transcription"></input>
        <input type='text' required value={tags} onChange={(e) => setTags(e.target.value)} className='cell__table-input' placeholder={props.tags} name="tags"></input>
        {validateEnglish && <h5>нужно заполнить все поля</h5>}
                {/* не понимаю, почему ошибку выводит сразу при нажатии кнопки Change, когда открываются инпуты */}
        </form>
                
        : <div className="words-container__table">
        <div className='cell__table'>{props.english}</div>
        <div className='cell__table'>{props.russian}</div>
        <div className='cell__table'>{props.transcription}</div>
        <div className='cell__table'>{props.tags}</div>

        </div>}
        {changeState 
        ? <div className="container__table-buttons"><button className='save-button__table' type='button' onClick={consoleLogAndClose  }>save</button>
        <button className='cancel-button__table' onClick={handleChangeState}>cancel</button> </div>
        :        <button className='change-button__table' onClick={handleChangeState}>change</button>}
                            <button className='delete-button__table' onClick={() =>deleteWord(props.id)}>del</button>
        </div>
    </div>
  )
}


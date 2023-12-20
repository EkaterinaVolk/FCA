import './Table.scss';
import { useState } from 'react';


export default function Table(props) {
 
  const [change, setChange] = useState(false);
  const handleChangeState = () => {setChange(!change)} 
  
  const [english, setEnglish] = useState('')
  const [translation, setTranslation] = useState('')
  const [transcription, setTranscription] = useState('')
  const [tags, setTags] = useState('')
  const [validateEnglish, setValidateEnglish] = useState('false')
  const [validateTranslation, setValidateTranslation] = useState('false')
  const [validateTranscription, setValidateTranscription] = useState('false')
  const [validateTags, setValidateTags] = useState('false')

  function handleValidate() {
    if(!english && !translation && !transcription && !tags) {
      setValidateEnglish(true)
      setValidateTranslation(true)
      setValidateTranscription(true)
      setValidateTags(true)
    }
  }

  function consoleLogAndClose(){
    handleValidate();
    console.log(english, translation, transcription, tags);
    handleChangeState();
  }

  return (
    <div className='container__table'>
        <div className="words-container__table">
        {change 
        ? 
        <form className="words-container__table">
        {validateEnglish && <h5>нужно заполнить все поля</h5>}
        {/* не понимаю, почему ошибку выводит сразу при нажатии кнопки Change, когда открываются инпуты */}

        
        <input type='text' required value={english} onChange={(e) => setEnglish(e.target.value)} className='cell__table-input' placeholder={props.english} name="english"></input>
        <input type='text' required value={translation} onChange={(e) => setTranslation(e.target.value)} className='cell__table-input' placeholder={props.translation} name="translation"></input>
        <input type='text' required value={transcription} onChange={(e) => setTranscription(e.target.value)} className='cell__table-input' placeholder={props.transcription} name="transcription"></input>
        <input type='text' required value={tags} onChange={(e) => setTags(e.target.value)} className='cell__table-input' placeholder={props.tags} name="tags"></input>
        <button className='save-button__table' type='button' onClick={consoleLogAndClose  }>save</button>
        <button className='cancel-button__table' onClick={handleChangeState}>cancel</button>
        </form>
        : <div className="words-container__table">
        <div className='cell__table'>{props.english}</div>
        <div className='cell__table'>{props.translation}</div>
        <div className='cell__table'>{props.transcription}</div>
        <div className='cell__table'>{props.tags}</div>
        <button className='change-button__table' onClick={handleChangeState}>change</button>
        </div>}
                    <button className='delete-button__table'>del</button>
        </div>
    </div>
  )
}

{/* <div className="words-container__table">
<input className='cell__table' placeholder={props.english}></input>
<input className='cell__table' placeholder={props.translation}></input>
<input className='cell__table' placeholder={props.transcription}></input>
<input className='cell__table' placeholder={props.tags}></input>
<button className='save-button__table'>save</button>
</div> */}
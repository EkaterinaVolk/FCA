import './Table.scss';
import { useState } from 'react';


export default function Table(props) {
 
  const [change, setChange] = useState(false);

  const handleChangeState = () => {setChange(!change)} 

  return (
    <div className='container__table'>
        <div className="words-container__table">
        {change 
        ? <div className="words-container__table">
        <input className='cell__table-input' placeholder={props.english}></input>
        <input className='cell__table-input' placeholder={props.translation}></input>
        <input className='cell__table-input' placeholder={props.transcription}></input>
        <input className='cell__table-input' placeholder={props.tags}></input>
        <button className='save-button__table' onClick={handleChangeState}>save</button>
        <button className='cancel-button__table' onClick={handleChangeState}>cancel</button>
        </div>
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
import './EditedTable.scss';

export default function EditedTable(props) {
  return (
    <div className='container__table'>
        <div className="words-container__table">
            <input className='cell__table' placeholder={props.english}></input>
            <input className='cell__table' placeholder={props.translation}></input>
            <input className='cell__table' placeholder={props.transcription}></input>
            <input className='cell__table' placeholder={props.tags}></input>
            <button className='save-button__table'>save</button>
            <button className='delete-button__table'>del</button>
        </div>
    </div>
  )
}


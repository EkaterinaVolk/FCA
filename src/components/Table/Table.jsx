import './Table.scss';



export default function Table(props) {
  return (
    <div className='container__table'>
        <div className="words-container__table">
            <div className='cell__table'>{props.english}</div>
            <div className='cell__table'>{props.translation}</div>
            <div className='cell__table'>{props.transcription}</div>
            <div className='cell__table'>{props.tags}</div>
            <button className='save-button__table'>save</button>
            <button className='change-button__table'>change</button>
            <button className='delete-button__table'>del</button>
        </div>
    </div>
  )
}


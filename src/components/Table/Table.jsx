import './Table.scss';



export default function Table(props) {
  return (
    <div className='container__table'>
        <div className="words-container__table">
            <p className='cell__table'>{props.english}</p>
            <p className='cell__table'>{props.translation}</p>
            <p className='cell__table'>{props.transcription}</p>
            <p className='cell__table'>{props.tags}</p>
        </div>
    </div>
  )
}


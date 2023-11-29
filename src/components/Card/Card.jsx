import './Card.scss';

function Card(props) {
    return (
        <div className="card">
            <img className="img" src={props.url} alt="cardImg"/>
            <p className="paragraph">{props.theme}</p>
            <h4 className="wordMain">{props.word}</h4>
            <h4 className="wordMain">{props.wordTranslation}</h4>
            <p className="paragraph">{props.transcription}</p>
            <button className="button">{props.flipButton}</button>
            <button className="button">{props.changeButton}</button>
            <button className="button">{props.deleteButton}</button>
        </div>
    );
  }


export default Card;

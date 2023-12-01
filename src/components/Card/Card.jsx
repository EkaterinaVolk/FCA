import './Card.scss';

function Card(props) {
    return (
            <div className="container__card">
            <p className="tags__card">#{props.tags}</p>
            <h4 className="word__card">{props.english}</h4>
            <h4 className="translation__card">{props.translation}</h4>
            <p className="transcription__card">{props.transcription}</p>
            <div className="container__buttons">
            <button className="button__card">One more time</button>
            <button className="button__card">Know</button>
            </div>
            <button className="button-flip">flip</button>
            </div>
    );
  }


export default Card;

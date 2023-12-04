import './Card.scss';
import { useState } from 'react';

function Card(props) {

  const [flip, setFlip] = useState(true);

  const handleFlipState = () => {setFlip(!flip)} 

    return (
            <div className="container__card">
            <p className="tags__card">#{props.tags}</p>
            {flip 
            ? <div>
            <h4 className="word__card">{props.english}</h4>
            <p className="transcription__card">{props.transcription}</p>


            <div className="container__buttons">
            <button className="button__card">One more time</button>
            <button className="button__card">Know</button>
            </div>
              </div>
            : <h4 className="translation__card">{props.translation}</h4>}         

            <button className="button-flip" onClick={handleFlipState}>flip</button>
            </div>
    );
  }


export default Card;

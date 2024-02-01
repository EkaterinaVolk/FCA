import './Card.scss';
import { useEffect, useRef } from 'react';

export default function Card(props) {

  const btnElem = useRef();

  useEffect(() => {
    btnElem.current.focus()
  }, [])

  function knowAndNextCard() {
    props.nextCard();
    props.handleScoreState();
  }

    return (
            <div className="container__card">
            <p className="tags__card">#{props.tags}</p>
            {props.flip 
            ? <div>
            <h4 className="word__card">{props.english}</h4>
            <p className="transcription__card">{props.transcription}</p>

            <div className="container__buttons">
            <button className="button__card" ref={btnElem} onClick={props.handleFlipState}>Translation</button>
            <button className="button__card" onClick={knowAndNextCard}>Know</button>
            </div>
              </div>
            : <h4 className="translation__card">{props.russian}</h4>}         

            <button className="button-flip" onClick={props.handleFlipState}><svg xmlns="http://www.w3.org/2000/svg" width="49" height="28" viewBox="0 0 49 28" fill="none">
  <path d="M40.4467 8.85943C23.8773 -6.76317 7.89961 5.11158 1.98196 13.0018C20.919 7.32143 28.8089 14.5801 30.3867 18.9194L22.102 27.2041L48.1389 26.0199L48.1396 1.16648L40.4467 8.85943Z" fill="white" stroke="black" strokewidth="0.848578"/>
</svg></button>
            </div>
    );
  }

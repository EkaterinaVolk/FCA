import './Main.scss';
import Card from '../Card/Card.jsx'
import { useState } from 'react';


function Main({wordlist, setWordlist, index=0}) {

  const [cardIndex, setCardIndex] = useState(index);

  function previousCard(){
    if(cardIndex === 0){setCardIndex((wordlist.length -1))}
    else {
    setCardIndex(cardIndex -1) 
    }
    if(!flip) {
      handleFlipState();
    }
  }

  function nextCard() {
    if(cardIndex === (wordlist.length -1)){setCardIndex(0)}
    else {
    setCardIndex(cardIndex +1)    
  }
  if(!flip) {
    handleFlipState();
  }
}

const [flip, setFlip] = useState(true);

const handleFlipState = () => {setFlip(!flip)} 

  return (
    <div className='container__main'>
    <div className="container__main-cards">
    <button  className="button__main" onClick={previousCard}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 11 14" fill="none">
  <path d="M9.01223 13.2654C6.26518 11.5486 3.67094 9.61903 1.22952 7.47668C0.665609 6.99988 1.00678 5.97618 1.62861 5.71391C4.59154 4.38673 7.21321 2.49221 9.76505 0.475452C10.516 -0.131161 11.4132 0.869112 10.7242 1.55411C8.69545 3.55589 6.41103 5.2003 4.01859 6.77566C6.03443 8.4132 8.17279 9.93502 10.3797 11.3066C11.6682 12.0913 10.3008 14.0501 9.01223 13.2654Z" fill="#1F1F1F"/>
</svg></button>
    <Card setFlip={setFlip} flip={flip} handleFlipState={handleFlipState} tags={wordlist[cardIndex].tags} english={wordlist[cardIndex].english} translation={wordlist[cardIndex].translation} transcription={wordlist[cardIndex].transcription}/>
    <button className="button__main" onClick={nextCard}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 14 12" fill="none">
  <g clipPath="url(#clip0_47_7082)">
    <path d="M5.01188 -0.273212C7.7523 1.45415 10.3391 3.39371 12.7722 5.54544C13.3343 6.02441 12.9892 7.04679 12.3664 7.30666C9.39835 8.62243 6.76941 10.5068 4.20983 12.5138C3.45657 13.1175 2.56316 12.1138 3.25479 11.4314C5.29128 9.43745 7.58201 7.80185 9.9805 6.23571C7.97098 4.59042 5.83849 3.06039 3.63693 1.68033C2.35141 0.890682 3.72636 -1.06286 5.01188 -0.273212Z" fill="#1F1F1F"/>
  </g>
  <defs>
    <clipPath id="clip0_47_7082">
      <rect width="14" height="12" fill="white" transform="matrix(1 0 0 -1 0 12)"/>
    </clipPath>
  </defs>
</svg></button>
    </div>
    </div>
  )
}

export default Main;
import './Main.scss';
import Card from '../Card/Card.jsx'
import wordlist from '../Card/wordlist.json';


function Main() {
  return (
    <div className='container__main'>
            {wordlist.map((word) =>
        <Card english={word.english} tags={word.tags} translation={word.translation} transcription={word.transcription}/>)}
    </div>
  )
}

export default Main;
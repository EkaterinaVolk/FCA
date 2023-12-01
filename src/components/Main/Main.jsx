import './Main.scss';
import Card from '../Card/Card.jsx'
import Table from '../Table/Table.jsx'
import Inputs from '../Inputs/Inputs.jsx'
import wordlist from '../Card/wordlist.json';


function Main() {
  return (
    <div className='container__main'>
            {wordlist.map((word) =>
        <Card english={word.english} tags={word.tags} translation={word.translation} transcription={word.transcription}/>)}
    <Inputs/>
    {wordlist.map((word) =>
    <Table english={word.english} tags={word.tags} translation={word.translation} transcription={word.transcription}/>)}
    </div>
  )
}

export default Main;
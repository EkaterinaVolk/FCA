import './Main.scss';
import Card from '../Card/Card.jsx'
import Table from '../Table/Table.jsx'
import Inputs from '../Inputs/Inputs.jsx'
import wordlist from '../Card/wordlist.json';

function Main() {

  return (
    <div className='container__main'>
    {wordlist.map((word, index) =>
    <Card key={index} {...word}/>)}
    <Inputs/>
    {wordlist.map((word, index) =>  <Table key={index} {...word}/>)}

    </div>
  )
}

export default Main;
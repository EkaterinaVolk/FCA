import './Main.scss';
import Card from '../Card/Card.jsx'
import Table from '../Table/Table.jsx'
import Inputs from '../Inputs/Inputs.jsx'


function Main({wordlist, setWordlist}) {

  return (
    <div className='container__main'>
    {wordlist.map((word, index) =>
    <Card key={index} {...word}/>)}
    <Inputs wordlist={wordlist} setWordlist={setWordlist}/>
    {wordlist.map((word, index) =>  <Table key={index} {...word}/>)}

    </div>
  )
}

export default Main;
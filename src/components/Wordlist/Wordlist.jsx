import './Wordlist.scss';
import Heading from '../Heading/Heading';
import Table from '../Table/Table';


export default function Wordlist({wordlist, setWordlist}) {
  return (
    <div className='container__wordlist'>
        <Heading text="Wordlist"/>
        {wordlist.map((word, index) =>  <Table key={index} {...word}/>)}
    </div>
  )
}

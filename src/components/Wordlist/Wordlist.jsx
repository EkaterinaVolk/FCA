import './Wordlist.scss';
import Heading from '../Heading/Heading';
import Table from '../Table/Table';


export default function Wordlist({wordlist, deleteWord, saveEditedWord}) {
  return (
    <div className='container__wordlist'>
        <Heading className='container__wordlist-heading' text="Wordlist"/>
        {wordlist.map((word, index) =>  <Table  saveEditedWord={saveEditedWord} deleteWord={deleteWord} wordlist={wordlist} key={index} {...word}/>)}
    </div>
  )
}

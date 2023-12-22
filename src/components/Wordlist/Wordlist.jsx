import './Wordlist.scss';
import Heading from '../Heading/Heading';
import Table from '../Table/Table';
import { useContext } from 'react';
import {WordlistContext} from '../App/WordlistContext.jsx'

export default function Wordlist({ deleteWord, saveEditedWord}) {
  const {context, setContext} = useContext(WordlistContext)
  return (
    <div className='container__wordlist'>
        <Heading className='container__wordlist-heading' text="Wordlist"/>
        {context.map((word, index) =>  <Table key={index} {...word}/>)}
    </div>
  )
}

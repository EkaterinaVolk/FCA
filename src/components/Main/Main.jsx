import './Main.scss';
import Card from '../Card/Card.jsx'
import Table from '../Table/Table.jsx'
import EditedTable from '../EditedTable/EditedTable.jsx'
import Inputs from '../Inputs/Inputs.jsx'
import wordlist from '../Card/wordlist.json';
import { useState } from 'react';


function Main() {
  const [flag, setFlag] = useState(true);

  function editFlag() {
    setFlag(!flag)
  }

  return (
    <div className='container__main'>
    {wordlist.map((word) =>
    <Card english={word.english} tags={word.tags} translation={word.translation} transcription={word.transcription}/>)}
    <Inputs/>
        <button onClick={editFlag}>Change</button>

{/* Вот это не работает */}

      {wordlist.map((word) => {flag ?  <Table english={word.english} tags={word.tags} translation={word.translation} transcription={word.transcription}/> :  <EditedTable english={word.english} tags={word.tags} translation={word.translation} transcription={word.transcription}/>})}

{/* А вот это работает */}

   {/* { flag ? <button>click</button>  : <Inputs/>} */}

    </div>
  )
}

export default Main;
import './Main.scss';
import Card from '../Card/Card.jsx'
import Table from '../Table/Table.jsx'
import EditedTable from '../EditedTable/EditedTable.jsx'
import Inputs from '../Inputs/Inputs.jsx'
import wordlist from '../Card/wordlist.json';


function Main() {
  let changeTrueOrFalse = true;

  function changeTOF() {
    changeTrueOrFalse = false;
  }

  return (
    <div className='container__main'>
    {wordlist.map((word) =>
    <Card english={word.english} tags={word.tags} translation={word.translation} transcription={word.transcription}/>)}
    <Inputs/>
        <button onClick={changeTOF}>Change</button>
      {wordlist.map((word) => <Table english={word.english} tags={word.tags} translation={word.translation} transcription={word.transcription}/> )}
      
      { changeTrueOrFalse ? <button>click</button>  : <Inputs/>}
    </div>
  )
}

export default Main;
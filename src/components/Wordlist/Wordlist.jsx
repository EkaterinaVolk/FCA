import './Wordlist.scss';
import Heading from '../Heading/Heading';
import Table from '../Table/Table';
import Inputs from '../Inputs/Inputs.jsx';
import { useEffect } from "react";
import {observer, inject} from "mobx-react";

function Wordlist({wordlist, isLoaded}) {
//   if(isLoaded) {
//     return;
// }

  return (
    <div className='container__wordlist'>
        <Heading className='container__wordlist-heading' text="Wordlist"/>
        {wordlist.map((word, index) =>  <Table key={index} {...word}/>)}
        <Inputs/>
    </div>
  )
}

export default inject(({wordlistStore}) => {
  const {wordlist, add, isLoaded, loadData} = wordlistStore; 

useEffect(() => {
      loadData();
  
});

  return {
    wordlist, add, isLoaded
  }; 
  }) (observer(Wordlist))
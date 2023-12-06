import '../../style/normalize.css';
import './App.scss';
import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import Footer from '../Footer/Footer.jsx';
import { useState } from 'react';
import wordlistJson from '../Card/wordlist.json';

function App() {

  const [wordlist, setWordlist] = useState(wordlistJson);

  return (
    <div className="container__app">
      <Header/>
      <Main wordlist={wordlist} setWordlist={setWordlist}/>
      <Footer/>
    </div>
  )
}

export default App


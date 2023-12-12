import '../../style/normalize.css';
import './App.scss';
import Header from '../Header/Header.jsx';
import Inputs from '../Inputs/Inputs.jsx';
import Wordlist from '../Wordlist/Wordlist.jsx';
import Main from '../Main/Main.jsx';
import Footer from '../Footer/Footer.jsx';
import NoMatch from '../NoMatch/NoMatch.jsx';
import { useState } from 'react';
import wordlistJson from '../Card/wordlist.json';
import {  BrowserRouter as Router, Routes, Route, } from "react-router-dom";

function App() {

  const [wordlist, setWordlist] = useState(wordlistJson);

  return (
    <Router>
    <div className="container__app">
      <Header/>
      <Routes>
          <Route path="/" element={<Main wordlist={wordlist} setWordlist={setWordlist}/>} />
          <Route path="/add" element={<Inputs wordlist={wordlist} setWordlist={setWordlist}/>} />
          <Route path="/wordlist" element={<Wordlist wordlist={wordlist} setWordlist={setWordlist} />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      <Footer/>
    </div>
    </Router>
  )
}

export default App


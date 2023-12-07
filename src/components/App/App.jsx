import '../../style/normalize.css';
import './App.scss';
import Header from '../Header/Header.jsx';
import Inputs from '../Inputs/Inputs.jsx';
import Card from '../Card/Card.jsx';
import Table from '../Table/Table.jsx';
import Main from '../Main/Main.jsx';
import Footer from '../Footer/Footer.jsx';
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
          <Route path="/wordlist" element={<Table />} />
        </Routes>
      <Footer/>
    </div>
    </Router>
  )
}

export default App


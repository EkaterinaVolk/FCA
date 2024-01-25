import '../../style/normalize.css';
import './App.scss';
import Header from '../Header/Header.jsx';

import Wordlist from '../Wordlist/Wordlist.jsx';
import Main from '../Main/Main.jsx';
import Footer from '../Footer/Footer.jsx';
import NoMatch from '../NoMatch/NoMatch.jsx';
import {  BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import {observer, inject} from "mobx-react";


const App = inject(['wordlistStore'])(observer(({ wordlistStore }) => {
  return (
    <Router>
    <div className="container__app">
      <Header/>
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/wordlist" element={<Wordlist />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      <Footer/>
    </div>
    </Router>
  )
}));

export default App;
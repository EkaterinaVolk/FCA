import '../../style/normalize.css';
import './App.scss';
import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import Footer from '../Footer/Footer.jsx';

function App() {
  return (
    <div className="container__app">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  )
}

export default App

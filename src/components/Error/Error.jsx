import "./Error.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Error(props) {
  return (
    <>
      <Header />
      <div className="container__error">
        <div className="error__img"></div>
        <div className="error__text">{props.error}</div>
      </div>
      <Footer />
    </>
  );
}

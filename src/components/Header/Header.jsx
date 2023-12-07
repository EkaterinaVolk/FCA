import './Header.scss';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
    <div className="container__header">
            <div className="logo">
          <h1 className="logo__text">love cards</h1>
          <svg className="logo__heart" xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24" fill="none">
  <path d="M21.5 3.99982C17.5 2.39982 13.8333 6.66649 12.5 8.99982C12 7.33315 10.9 3.69986 10.5 2.50004C10 1.00026 5 -0.499958 2 1.50004C-0.999999 3.50004 1.5 7.00004 2 10.5C2.5 14 8.5 22.5 9 23C9.4 23.4 10.5 23.1667 11 23C12.6 21 21 13.8334 25 10.5C25.5 8.99997 25.5 5.59982 21.5 3.99982Z" fill="#F40000"/>
  <path d="M22.5425 14.4295C18.6622 17.6197 14.3076 19.8736 11.2464 23.6879C11.0308 23.9307 10.6859 23.9653 10.341 23.8613C10.1254 24.0347 9.7374 24.0693 9.4356 23.8266C5.90018 20.6018 3.78753 16.8568 2.27851 12.8691C1.07129 9.67893 -1.42936 4.7203 1.0713 1.70351C2.70967 -0.307677 6.0295 -0.4117 8.65951 0.732599C11.5913 2.0156 12.7123 4.37354 13.2728 6.76616C14.4369 5.03237 16.1615 3.54134 18.8777 3.22925C22.0251 2.8825 24.7845 4.5816 25.6899 6.90487C26.7678 9.74828 24.8707 12.4877 22.5425 14.4295ZM23.6635 6.69683C22.3269 4.54693 19.0502 4.09614 16.8082 5.41382C15.0405 6.41942 14.2645 8.04917 13.5746 9.60957C13.3159 10.2337 11.9794 10.0604 11.8931 9.40153C11.5051 6.62747 11.0308 2.91717 7.15049 1.66885C5.7277 1.04468 4.64983 1.35677 3.78753 2.53574C2.01982 3.05588 1.37311 3.99212 1.89049 5.41382C1.97672 6.66215 2.40787 7.91048 2.75279 9.12413C4.17558 13.9787 6.24508 18.6253 9.90985 22.7863C12.6261 19.1801 16.4202 16.9955 20.2574 14.1868C22.7581 12.3836 25.4312 9.54023 23.6635 6.69683Z" fill="#1F1F1F"/>
</svg></div>

        <div className="nav">
        <nav >
          <ul>
            <li className="nav-li">
              <Link className="nav-item" to="/">Cards</Link>
            </li>
            <li className="nav-li">
              <Link className="nav-item"to="/wordlist">Wordlist</Link>
            </li>
            <li className="nav-li">
              <Link className="nav-item"to="/add">Add</Link>
            </li>
          </ul>
        </nav>
        </div>
    </div>
    </div>
  )
}

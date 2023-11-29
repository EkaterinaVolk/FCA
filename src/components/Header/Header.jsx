import './Header.scss';


export default function Header() {
  return (
    <div className="container__header">
        <div className="logo">My cards</div>
        <div className="nav">
            <a href="#">Карточки</a>
            <a href="#">Учить</a>
            <a href="#">Список слов</a>
        </div>
    </div>
  )
}

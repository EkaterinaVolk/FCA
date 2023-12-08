import './Heading.scss';


export default function Heading(props) {
  return (
    <div className='container__heading'>
        <h3 className='header'>{props.text}</h3>
    </div>
  )
}

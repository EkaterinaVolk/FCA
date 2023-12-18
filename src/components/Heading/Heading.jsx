import './Heading.scss';


export default function Heading(props) {
  return (
    <div className='container__heading'>
        <h3 className='heading'>{props.text}</h3>
    </div>
  )
}

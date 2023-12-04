import './Inputs.scss';

export default function Inputs() {
  return (
    <div className='container__inputs'>
        <h3 className='header__inputs'>Add a new word</h3>
<div className="inputs-container__inputs">
    <input className='input' type="text" placeholder='word' />
    <input className='input' type="text" placeholder='translation' />
    <input className='input' type="text" placeholder='transcription' />
    <input className='input' type="text" placeholder='tag' />
    <button className='button__inputs'>Add</button>
</div>
<h3 className='header__inputs'>Wordlist</h3>
    </div>
  )
}

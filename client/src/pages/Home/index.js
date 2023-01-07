import React from 'react'
import BoxWithDropdown from '../../components/BoxWithDropdown'

function Home() {
  return (
    <div>
      <h1>Holopin README Badge Generator</h1>
      <div>Style your GitHub Profile README with an awesome badge</div>
      <div className='inputContainer'>
        <label className='labelContainer'>Enter your username</label>
        <input className='inputBox' type="text" />
      </div>

      <div className='inputContainer'>
        <label className='labelContainer'>Enter your username</label>
        <BoxWithDropdown />
      </div>

      <div className='generateButton'>Generate Badge</div>
      <div>
        <label>Markdown</label>
        <textarea></textarea>
        <label>Markdown</label>
        <textarea></textarea>
      </div>
    </div>
  )
}

export default Home
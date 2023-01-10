import React, { useState } from 'react'
import BoxWithDropdown from '../../components/BoxWithDropdown'

function Home() {

  const [userName, setUserName] = useState("");
  const [showTextBox, setShowTextBox] = useState(false);
  const [markDownString, setMarkDownString] = useState("");
  const [htmlString, setHtmlString] = useState("");

  const _handleGenerateBadge = () => {
    if (userName) {
      setShowTextBox(true)
      setMarkDownString(`[![Topmate](https://topmate-readme-badge.onrender.com/${userName}?style=flat)](https://topmate.io/${userName})`)
      setHtmlString(`<a href="https://topmate.io/${userName}"><img src="https://topmate-readme-badge.onrender.com/${userName}?style=flat" alt="Connect on Topmate" /></a>`)
    }
  }

  const handleUserNameChange = (e) => {
    setUserName(e.target.value)
  }
  return (
    <div>
      <h1>Holopin README Badge Generator</h1>
      <div>Style your GitHub Profile README with an awesome badge</div>
      <div className='inputContainer'>
        <label className='labelContainer'>Enter your username</label>
        <input className='inputBox' type="text" onChange={(e) => handleUserNameChange(e)} />
      </div>

      <div className='inputContainer'>
        <label className='labelContainer'>Enter your username</label>
        <BoxWithDropdown />
      </div>

      <div className='generateButton' onClick={() => _handleGenerateBadge()}>Generate Badge</div>
      {
        showTextBox && (
          <div>
            <div className='textbox-container'>
              <label>Markdown</label>
              <textarea readOnly>
                {markDownString}
              </textarea>
            </div>
            <div className='textbox-container'>
              <label>HTML</label>
              <textarea readOnly>
                {htmlString}
              </textarea>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Home
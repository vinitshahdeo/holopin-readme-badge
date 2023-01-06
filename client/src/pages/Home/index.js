import React from 'react'

function Home() {
  return (
    <div>
      <h1>Holopin README Badge Generator</h1>
      <div>Style your GitHub Profile README with an awesome badge</div>
      <div>
        <input placeholder='Enter your username'></input>
        <input placeholder='Choose badge style'></input>
      </div>
      <button>Generate Badge</button>
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
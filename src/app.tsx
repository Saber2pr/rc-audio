import React, { useState } from "react"
import "./app.less"

const a = "http://music.163.com/song/media/outer/url?id=34002702.mp3"

export const App = () => {
  const [sta, setSta] = useState(true)
  return (
    <div className="App">
      {sta ? <Audio src={a} /> : <span>hello</span>}
      <button onClick={() => setSta(!sta)}>change</button>
    </div>
  )
}

import ReactDOM from "react-dom"
import Audio from "./index"

ReactDOM.render(<App />, document.getElementById("root"))

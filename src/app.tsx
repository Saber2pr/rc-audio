import React, { useState } from "react"
import "./app.less"

const a = "http://music.163.com/song/media/outer/url?id=34002702.mp3"

export const App = () => {
  const [sta, setSta] = useState(true)
  const [time, set] = useState(0)
  console.log("time", time)
  return (
    <div className="App">
      {sta ? (
        <Audio
          src={a}
          start={time}
          onChange={(statu, audio) => {
            console.log(statu, audio.currentTime, audio.duration)
            set(audio.currentTime)
          }}
        />
      ) : (
        <span>hello</span>
      )}
      <button onClick={() => setSta(!sta)}>change</button>
    </div>
  )
}

import ReactDOM from "react-dom"
import Audio from "./index"

ReactDOM.render(<App />, document.getElementById("root"))

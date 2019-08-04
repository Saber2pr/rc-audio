import React from "react"
import "./app.less"

const a =
  "https://m10.music.126.net/20190804152726/286bd6d44f5c4ea2316ced7b96111e9e/ymusic/ffe8/7891/0744/237333383312e4cca09ef6b289f59c3c.mp3"

export const App = () => (
  <div className="App">
    播放
    <Audio src={a} />
  </div>
)

import ReactDOM from "react-dom"
import Audio from "./index"

ReactDOM.render(<App />, document.getElementById("root"))

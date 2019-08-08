/*
 * @Author: saber2pr
 * @Date: 2019-08-04 18:20:22
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-08-04 18:23:51
 */
import React, { useRef, useState, useEffect } from "react"
import { Icon } from "../../iconfont"
import { useInterval } from "../../hooks"
import "./style.less"

export interface Audio {
  src: string
  onChange?: (statu: "pause" | "playing", element: HTMLAudioElement) => void
}

export const Audio = ({ src, onChange }: Audio) => {
  const ref = useRef<HTMLAudioElement>()
  const [statu, setStatu] = useState<"pause" | "playing">("pause")

  const [radius, setRad] = useState(0)
  const [isFlip, flip] = useState(false)

  const rotate = (percent: number) => {
    const deg = 360 * percent
    if (deg < 180) {
      setRad(deg)
    } else {
      flip(true)
      setRad(deg - 180)
    }
  }

  const play = () => ref.current.play().then(() => setStatu("playing"))

  const pause = () => {
    ref.current.pause()
    setStatu("pause")
  }

  const reset = () => {
    setStatu("pause")
    setRad(0)
    flip(false)
    ref.current.currentTime = 0
  }

  const setProgress = () => {
    const length = ref.current.duration
    const current = ref.current.currentTime
    const percent = Number((current / length).toFixed(2))
    current < length ? rotate(percent) : reset()
  }

  useInterval(setProgress, 1000, statu !== "playing")

  useEffect(() => {
    onChange && onChange(statu, ref.current)
  }, [statu])

  return (
    <span
      className="Audio"
      onClick={() => (statu === "pause" ? play() : pause())}
      title={src}
    >
      <audio ref={ref} src={src} />
      {statu === "playing" ? <Icon.Bofang1 /> : <Icon.Bofang />}
      <span
        className="Audio-Base"
        style={{
          transform: isFlip ? `rotate(${180}deg)` : `rotate(${0}deg)`
        }}
      >
        <span className="Audio-Base-0 Color" />
        <span
          className="Audio-Base-1 Base-Color"
          style={{ transform: `rotate(${radius}deg)` }}
        />
        <span className={`Audio-Base-2 ${isFlip ? "Color" : "Base-Color"}`} />
        <span className="Audio-Base-3" />
      </span>
    </span>
  )
}

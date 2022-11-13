import { useEffect, useRef } from "react"

const Preloader = () => {
  const ref = useRef();

  useEffect(() => {

  })

  return (
    <div className="fixed left-0 ring-0 top-0 bottom-0">
      <canvas ref={ref}></canvas>
    </div>
  )
}

export default Preloader;
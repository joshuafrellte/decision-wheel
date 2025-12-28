import { useState, useEffect } from 'react'

function App() {
  const [decision, setDecision] = useState(false)
  const [isSpinning, setIsSpinning] = useState(false)

  

  useEffect(() => {
    if (!isSpinning) return

    const spinTime = Math.floor(Math.random() * 6000) 

    const intervalId = setInterval(() => {
      setDecision(decision => !decision)
    }, 250)

    const timeoutId = setTimeout(() => {
      setIsSpinning(false)
      clearInterval(intervalId)
      console.log(`interval stopped after ${spinTime} secs`)
      console.log(decision)
    }, spinTime)
    
    return () => {}
  }, [isSpinning])

  function handleSpin() {
    
  }

  return (
    <div className="absolute top-1/2 left-1/2 -translate-1/2 flex flex-col justify-center items-center gap-3">
      <h1 className="text-2xl font-semibold">Decision Roulette</h1>
      <label>{decision.toString()}</label>
      <button 
        className="bg-amber-300 py-1 px-2 w-fit cursor-pointer active:bg-amber-400"
        onClick={() => setIsSpinning(true)}
      >
        Spin the wheel!
      </button>
    </div>
  )
}

export default App

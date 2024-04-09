import React, {useState} from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count+1)}>increment</button>
      <button onClick={() => {if(count>0) setCount(count-1)}}>decrement</button>
    </div>
  )
}

export default App

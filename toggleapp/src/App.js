import React, {useState} from 'react';

const App = () => {
  const [isOn, setisOn] = useState(false);

  const toggle = () => {
    setisOn(!isOn);
  };
  return (
    <div>
      <h1 onChange={toggle}> I am {isOn ? 'Alive' : 'dead'} </h1>
      <button onClick={toggle}>{isOn ? 'On' : 'off'}</button>
    </div>
  )
}

export default App
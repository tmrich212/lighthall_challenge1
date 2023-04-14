import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);    
  }
  
  useEffect(() => {
    let data = window.localStorage.getItem('MY_BUTTON_COUNT');
    if(data !== "0") setCount(JSON.parse(data));
  }, []);
  
  useEffect(() => {
    window.localStorage.setItem('MY_BUTTON_COUNT', JSON.stringify(count));
  }, [count]);

  return (
    <div className="App">
      <button className='button' onClick={ handleClick }>Click Count: { count }</button>
    </div>
  );
}

export default App;

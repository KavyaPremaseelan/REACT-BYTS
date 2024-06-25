import { useState } from 'react';
import './App.css';
// import Sample1 from './Sample1';
import Sample2 from './Sample2';
function App() {
  const [count,setCount]=useState(0);
  function handleClick(){
    setCount(count+1);
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Click {count}</button>
      <Sample2 count={count}/>
    </div>
  );
}

export default App;

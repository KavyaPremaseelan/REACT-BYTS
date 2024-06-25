import React, { useState } from 'react'

function Sample1({value,min,max}) {

    const [count,setCount] = useState(value)

    function handleInc(){
        if(count<max)
            setCount(count + 1);
    }

    function handleDec(){
        if(count>min)
            setCount(count-1);
    }

    return (
    <div>
        <p>The value of count is {count}</p>
        <button onClick={handleInc} >Increment</button>
        <button onClick={handleDec} >Decrement</button>
    </div>
  )
}

export default Sample1

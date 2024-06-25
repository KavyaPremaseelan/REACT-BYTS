import React from 'react'

function Sample2({count}) {
    // const [count,setCount] = useState(10);
    if(count%2===0){
        return <p>this is even number</p>
    }
    else{
        return <p>this is odd number</p>
    }

}

export default Sample2

import { useState } from "react"


function Counter() {

    let [count,setCount] = useState(5)

  return (
    <>

    <div className="container">
        <div className="val"> {count}</div>
        <div className="btn">
            <button onClick={()=>{setCount(count+1)}} >Increase</button>
            <button onClick={()=>(setCount(count-1))}>Decrease </button>
        </div>
    </div>
    
    </>
      
    
  )
}

export default Counter

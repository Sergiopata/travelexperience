import { useEffect, useState } from "react";

/* const stock = 10; */

const Contador = () => {

  const [count, setCount] = useState(0)

  useEffect ( ()=> {
    console.log();
  },[])

  

  const addHandler = () => {
      setCount(count + 1)
  }

  const subtractHandler = () => {
      setCount(count - 1)
  }
    
  return (
    <>

    <div>Contador</div>
    <button onClick={subtractHandler}> - </button>
    <strong> { count } </strong>
    <button onClick={addHandler}> + </button>

    </>
  )
}
export default Contador
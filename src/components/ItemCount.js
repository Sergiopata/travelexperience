import { useState } from "react";


const ItemCount = ({stock, initial, onAdd }) => {

  const [count, setCount] = useState(initial);

  const subtractHandler = () => {
    if(count > initial){
      setCount(count - 1)
    }   
  }
  const addHandler = () => {
    if(count < stock){
      setCount(count + 1)
    }
  } 
  const handleClick = (count) => {
    onAdd(count)
  }

  return (
    <div>
      <div className="flex justify-evenly mt-1 bg-gray-200 rounded-xl p-0">
        <button onClick={subtractHandler}>-</button>
        <span>{count}</span>
        <button onClick={addHandler}>+</button>
        
      </div>
      <button onClick = {() => handleClick(count)
} className="btn btn-primary mt-2 "> Agregar al Carrito </button>
    </div>
  )
}
export default ItemCount
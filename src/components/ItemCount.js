import { useState } from "react";

const ItemCount = ({stock, initial, onAdd, id}) => {

  const [count, setCount] = useState(initial)

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
  return (
    <div>
      <div className="flex justify-evenly mt-2 bg-gray-200 rounded-xl p-4">
        <button onClick={subtractHandler}>-</button>
        <span>{count}</span>
        <button onClick={addHandler}>+</button>
        
      </div>
      <button onClick = {() => onAdd(count)} className="btn btn-primary"> Agregar al Carrito </button>
    </div>
  )
}
export default ItemCount
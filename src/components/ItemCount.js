import { useState } from "react";
/* import { useAppContext } from "./context/AppContext"
import { useCartContext } from "./context/CartContext"; */

const ItemCount = ({stock, initial, onAdd }) => {

  const [count, setCount] = useState(initial);

  /* const { addItem } = useCartContext()
  const { provinces } = useAppContext() */

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
  /* const handleClick = (id, cantidad) => {
    const findProvince = provinces.find ((producto) => producto.id === id)
    if (!findProvince) {
      alert ("Error en la base de datos")
      return
    }
    addItem(findProvince, cantidad) */
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
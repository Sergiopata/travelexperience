import { useState } from "react";
import { useAppContext } from "./context/AppContext"
import { useCartContext } from "./context/CartContext";

const ItemCount = ({stock, initial, onAdd, id}) => {

  const [count, setCount] = useState(initial)

  const { addItem } = useCartContext()
  const { provinces } = useAppContext()

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
  const handleClick = (id, cantidad) => {
    const findProvince = provinces.find ((producto) => producto.id === id)
    if (!findProvince) {
      alert ("Error en la base de datos")
      return
    }
    addItem(findProvince, cantidad)
    onAdd(count)
  }

  return (
    <div>
      <div className="flex justify-evenly mt-2 bg-gray-200 rounded-xl p-4">
        <button onClick={subtractHandler}>-</button>
        <span>{count}</span>
        <button onClick={addHandler}>+</button>
        
      </div>
      <button onClick = {() => handleClick(id,count)
} className="btn btn-primary"> Agregar al Carrito </button>
    </div>
  )
}
export default ItemCount
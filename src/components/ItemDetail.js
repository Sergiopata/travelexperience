/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { provincesData } from "../data/provincesData"
import Item from "./Item"
import ItemCount from "./ItemCount"

const ItemDetail = () => {

  const { itemId } = useParams()
  const [item, setItem] = useState({})

  useEffect(() => {
    
  setItem (provincesData.find ( i => i.id === itemId ) )
  
    
  }, [itemId])


  const onAdd = (count) => {
    alert (`Se agrego producto al carrito`)
  }; 
  

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <div className="w-full mx-auto flex flex-wrap justify-center   gap-10">
        <div className="card-body">
            <h2 className="card-title"> <strong> Destino: {item.title} </strong></h2>
            <p><strong> Categoria: {item.category} </strong></p>
            <p>{item.description}</p>
            <p><strong> Precio:$ {item.price}</strong></p>
            <figure><img src={item.pictureUrl} alt="Travel" /></figure>
            
          <button onClick = {() => onAdd(item.count)} className="btn      btn-primary bg-gradient-to-r from-green-400 to-blue-500     hover:from-pink-500 hover:to-yellow-500 ..."> Agregar al Carrito 
          </button>

        </div>
      </div>
    </div>
  )
}
export default ItemDetail
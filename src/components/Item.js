import { Link } from "react-router-dom";
import ItemCount from "./ItemCount"

const Item = ( props ) => {
/* console.log(props.province, "Item") */
  const {id, title, description, price, pictureUrl, stock, category} = props.province
  const onAdd = (count) => {
    alert (`Se agregaron ${count} productos al carrito`)
  }; 
  return (

  <div className="card w-96 bg-base-100 shadow-xl">
    <figure><img src={pictureUrl} alt="Travel" /></figure>
    <div className="card-body">
        <h2 className="card-title"><strong> Destino: {title}</strong> </h2>
        <p><strong> Categoria: {category}</strong></p>
        <p>{description}</p>
        <p><strong> Precio:$ {price}</strong></p> 
        <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
      <div className="card-actions justify-end">
          <Link to={`/Item/${id}`} className="btn btn-primary bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">Ver Detalle</Link>
          
      </div> 
    </div>
    
  </div>


  )
}
export default Item




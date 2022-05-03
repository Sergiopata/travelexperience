import Contador from "./Contador"

const Item = ( props ) => {
console.log(props.province, "Item")
  const {title, description, price, pictureUrl, stock} = props.province
  const onAdd = (count) => {
    alert (`Se agregaron ${count} productos al carrito`)
  }; 
  return (

  <div className="card w-96 bg-base-100 shadow-xl">
    <figure><img src={pictureUrl} alt="Travel" /></figure>
      <div className="card-body">
        <h2 className="card-title"> {title} </h2>
        <p>{description}</p>
        <p>{price}</p>
        <Contador stock={stock} initial={1} onAdd={onAdd}/>
        {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">Comprar Aqui!</button>
        </div> */}
      </div>
    
  </div>


  )
}
export default Item




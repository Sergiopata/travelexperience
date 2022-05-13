/* eslint-disable no-undef */
import { Link } from "react-router-dom";


const Item = ( {items} ) => {

  console.log(items)
  return (
      <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
              <img src={items.pictureUrl} alt="Travel" />
          </figure>
          <div className="card-body">
              <h2 className="card-title"> {items.title} </h2>
              <p>{items.description}</p>
              <p>
                  <strong> Precio:$ {items.price}</strong>
              </p>
              <p>
                  <strong> Categoria: {items.category}</strong>
              </p>
              <div className="card-actions justify-end">
                  <Link
                      to={`/Item/${items.id}`}
                      className="btn btn-primary bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">
                      {" "}
                      Ver Mas{" "}
                  </Link>
              </div>
          </div>
      </div>
  );
}
export default Item




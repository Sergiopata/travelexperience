/* eslint-disable no-undef */
import { Link } from "react-router-dom";


const Item = ({ items }) => {
    return (
        <div className="card w-96 bg-base-200 shadow-xl">
            <figure>
                <img src= {items.pictureUrl} alt="Travel" />
            </figure>
            <div className="card-body">
                <h2 className="card-title badge badge-xl text-yellow"> Destino: {items.title} </h2>
                <p className="">
                    <strong> Precio: $ {items.price} </strong>
                </p>
                <div className="card-actions justify-end">
                    <Link
                        to={`/Item/${items.id}`}
                        className="btn btn-primary"
                    >
                        {" "}
                        Ver Mas{" "}
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default Item;




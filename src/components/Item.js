/* eslint-disable no-undef */
import { Link } from "react-router-dom";


const Item = ({ items }) => {
    return (
        <div className="card w-96 shadow-xl ">
            <figure className="size-image ">
                <img src= {items.pictureUrl} alt="Travel" />
            </figure>
            <div className="card-body">
                <h2 className="card-title badge badge-xl"> Destino: {items.title} </h2>
                <p className="">
                    <strong> Precio: $ {items.price} </strong>
                </p>
                <div className="card-actions mt-10 justify-center">
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




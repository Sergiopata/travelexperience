/* eslint-disable no-undef */
import { Link } from "react-router-dom";


const Item = ({ items }) => {
    return (
        <div className="card shadow-xl max-w-sm rounded-lg ml-6 mr-6 mb-6 bg-white">

            <img src={items.pictureUrl} alt="Travel" />

            <div className="card-body">
                <h2 className="card-title text-center"> Destino: {items.title} </h2>
                <p className="">
                    <strong> Precio: $ {items.price} </strong>
                </p>
                <div className="card-actions mt-10 justify-center">
                    <Link
                        to={`/Item/${items.id}`}
                        className="btn btn-primary">
                        Ver Más
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default Item;




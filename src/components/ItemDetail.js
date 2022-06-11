/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount"
import { useCartContext } from "./context/CartContext";


const ItemDetail = ({ items }) => {
    const { title, description, price, pictureUrl, stock, category } = items;
    const [terminar, setTerminar] = useState(false)
    const {addItem} = useCartContext()
    const onAdd = (count) => {
        setTerminar(true)
        addItem(items, count)
    };

    return (
        <section className="mt-20">
        <div className="card card-compact w-96 bg-base-200 mx-auto">
            <div className="w-full mx-auto justify-center gap-10">
                <div className="card-body grid justify-items-center">
                    <h2 className="card-title ">
                        {" "}
                        <strong > Destino: {title} </strong>
                    </h2>
                    <p>
                        <strong> Categoria: {category} </strong>
                    </p>
                    <p>{description}</p>
                    <p>
                        <strong> Precio:$ {price}</strong>
                    </p>
                    <figure>
                        <img  src={pictureUrl} alt="Travel" />
                    </figure>
                    {
                    terminar ? (
                        <Link to="/cart"  className="btn btn-primary bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">
                        Terminar compra
                        </Link>
                    ):(
                    <ItemCount stock={stock} initial={1} onAdd={onAdd} />
                    
                    )
                    }

                    
                    
                </div>
            </div>
        </div>
        </section>
    );
};
export default ItemDetail
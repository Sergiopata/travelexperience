import { Link } from "react-router-dom";
import { useCartContext } from "./context/CartContext";


const Cart = () => {
    const { cart } = useCartContext();
    const { removeItem } = useCartContext();
    const { clearCart } = useCartContext();

    return (
        <div className="container mx-auto bg-white">
            <h1 className="text-black text-center text-5xl p-4 mb-6">
                Carrito
            </h1>
            {cart.length === 0 ? (
                <div className="h-[calc(100vh-300px)] grid place-content-center">
                    <p className="font-extrabold text-center">
                        Por el momento no hay nada agregado al carrito...
                    </p>
                    <Link
                        to="/"
                        className="btn ml-2 mt-2 bg-green-500 hover:bg-green-600"
                    >
                        Volver al inicio para realizar tu compra!
                    </Link>
                </div>
            ) : (
                <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
                    <button
                        className="btn ml-2 bg-green-500 hover:bg-green-600"
                        onClick={clearCart}
                    >
                        Vaciar carrito
                    </button>
                </div>
            )}
            {cart.map((item) => (
                <div
                    key={item.id}
                    className="flex flex-row p-4 items-center justify-center gap-4"
                >
                    <img className="image-detail" src={item.pictureUrl} alt={item.title} />
                    <div>
                        <h2 className="text-black text-xl">
                            <strong>{item.title}</strong>
                        </h2>
                        <p className="text-black text-xl"></p>

                        <p className="text-black text-xl">
                            <span> N° Pasajes: </span>
                            {item.quantity}
                        </p>
                        <p className="text-black text-xl">
                            <span> SubTotal:$ </span>
                            {item.price * item.quantity}
                        </p>

                        <button
                            className="btn ml-2 bg-green-500 hover:bg-green-600"
                            onClick={() => removeItem(item)}
                        >
                            Eliminar
                        </button>
                        <Link to="/checkout"className="btn ml-2 bg-green-500 hover:bg-green-600">CHECKOUT</Link>
                    </div>
                </div>
            ))}
            <span className="flex justify-center text-xl badge-primary ">
                {" "}
                <strong>
                    Precio Total: $
                    {cart.reduce(
                        (acc, ite) => acc + ite.price * ite.quantity,
                        0
                    )}{" "}
                </strong>{" "}
            </span>
        </div>
    );
};

export default Cart;

import { Link } from "react-router-dom";
import { useCartContext } from "./context/CartContext";

const Cart = () => {
    const { cart } = useCartContext();
    const { removeItem } = useCartContext();
    const { clearCart } = useCartContext();

    return (
        <div className="container mx-auto black">
            <h1 className="text-black text-center text-5xl p-4 mb-6">
                Carrito
            </h1>
            {cart.length === 0 ? (
                <div className="h-[calc(100vh-300px)] grid place-content-center">
                    <p className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">
                        No has agregado nada al carrito por ahora...
                    </p>
                    <Link
                        to="/"
                        className="btn mt-12 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ..."
                    >
                        Comienza tu compra!
                    </Link>
                </div>
            ) : (
                <div className="flex justify-center">
                    <button
                        className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ..."
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
                    <img src={item.pictureUrl} alt={item.title} />
                    <div>
                        <h2 className="text-black text-xl"><strong>{item.title}</strong></h2>
                        <p className="text-black text-xl"></p>
                        <span>Precio: </span>
                            {item.price}
                        <p className="text-black text-xl">
                            <span>Cantidad: </span>
                            {item.quantity}
                        </p>
                        
                        <button
                            className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ..."
                            onClick={() => removeItem(item)}
                        >
                            Eliminar
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cart;

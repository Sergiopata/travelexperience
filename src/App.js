/* eslint-disable no-unused-vars */
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import AppContextProvider from "./components/context/AppContext";
import CartContextProvider from "./components/context/CartContext";
import Cart from "./components/Cart";
import CheckOut from "./components/CheckOut";

function App() {
    const styles = {
        header: "text-center text-3xl m-4",
    };

    return (
        <AppContextProvider>
            <CartContextProvider>
                <BrowserRouter>
                    <NavBar />

                    <div className="App">
                        <h1 className="text-9xl font-black text-center">
                            TRAVEL EXPERIENCE
                        </h1>
                        <h2 className={styles.header}>
                            'Crea recuerdos inolvidables a través de una
                            explosión de inspiración y propósito.'
                        </h2>
                    </div>

                    <Routes>
                        <Route path="/" element={<ItemListContainer/>}></Route>
                        <Route
                            path="/Item/:itemId"
                            element={<ItemDetailContainer/>}
                        ></Route>
                        <Route
                            path="/category/:categoryId"
                            element={<ItemListContainer/>}
                        ></Route>
                        <Route path="/cart" element={<Cart/>}></Route>
                        <Route path="/checkout" element={<CheckOut/>}></Route>
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </CartContextProvider>
        </AppContextProvider>
    );
}

export default App;

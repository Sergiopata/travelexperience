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
                            Bienvenidos a la Experiencia de Viajar
                        </h2>
                    </div>

                    <Routes>
                        <Route path="/" element={<ItemListContainer />}></Route>
                        <Route
                            path="/Item/:itemId"
                            element={<ItemDetailContainer />}
                        ></Route>
                        <Route
                            path="/category/:Id"
                            element={<ItemListContainer />}
                        ></Route>
                        <Route path="/cart" element={<Cart />}></Route>
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </CartContextProvider>
        </AppContextProvider>
    );
}

export default App;

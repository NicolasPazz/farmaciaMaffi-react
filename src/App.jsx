import MyNavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import { CartContextProvider } from "./components/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const App = () => {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <MyNavBar />

                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route
                        path="/categoria/:categoryId"
                        element={<ItemListContainer />}
                    />
                    <Route
                        path="/item/:idItem"
                        element={
                            <>
                                <ItemDetailContainer />
                                <Toaster
                                    position="bottom-right"
                                    reverseOrder={false}
                                />
                            </>
                        }
                    />
                    <Route
                        path="/cart"
                        element={
                            <>
                                <Cart />
                                <Toaster
                                    position="bottom-right"
                                    reverseOrder={false}
                                />
                            </>
                        }
                    ></Route>
                </Routes>
            </BrowserRouter>
        </CartContextProvider>
    );
};

export default App;

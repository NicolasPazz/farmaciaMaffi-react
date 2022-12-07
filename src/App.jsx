import MyNavbar from "./components/MyNavbar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"


const App = () => {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/categoria/:idCategory' element={<ItemListContainer />} />
        <Route path='/item/:idProduct' element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

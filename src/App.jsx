import MyNavbar from "./components/MyNavbar"
import ItemListContainer from "./components/ItemListContainer"
import "./App.css"


const App = () => {
  return (
    <>
      <MyNavbar />
      <ItemListContainer mensaje="ItemListContainer" />
    </>
  )
}

export default App;

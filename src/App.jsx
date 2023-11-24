import Cabecalho from "./components/Cabecalho/Cabecalho";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  

  return (
    <>
        <Cabecalho/>
        <Outlet/>
        <Footer/>

    </>
  )
}

export default App

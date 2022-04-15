

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Inicio from "./Inicio/Inicio"
import Navbar from "./navbar"
import Contactos from "./Pages/Contactos"
import Login from "./Pages/Login"
import ShoppingCart from "./Carrito/ShoppingCart"
import RedesSociales from "./RedesSociales/RedesSociales.js"
import FreeDelivery from "./Inicio/FreeDelivery.js"
import Footer from "../components/Footer/footer"
import Productos from "./Pages/Productos"
import Error404 from "./Error404/Error404"



const Rutas = () => {
return (
    <>
        <Router>
            <header>
                <FreeDelivery/>
                <Navbar/>
            </header>

            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/Productos" element={<Productos/>}/>
                <Route path="/contactos" element={<Contactos/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/ShoppingCart" element={<ShoppingCart/>}/>
                <Route path="*" element={<Error404/>}/>
            </Routes>

            <footer>
                <RedesSociales/>
                <Footer/> 
            </footer>
        </Router>
    </>
)
}

export default Rutas
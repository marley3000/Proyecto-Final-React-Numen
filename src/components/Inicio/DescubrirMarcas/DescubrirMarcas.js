import React from 'react';
import DescubrirMarcas from "../../../assets/Image/DescubrirMarcas.jpeg";
import { Link } from 'react-router-dom'


const DMarca = () => {
    return (

        <div className="flex-row justify-between md:flex">
            {/* Para md */}
            <div className="h-[600px] object-center w-[70%] font-cormorant hidden md:block bg-gradient-to-r from-blue-200">
                <br/>
                <h1 className="text-3xl md:text-6xl font-[700] ml-[25px] lg:ml-[55px] mt-[15%] lg:mt-[20%]">Encuentra las mejores marcas para tu mascota</h1>
                <br/>
                <h2 className="text-xl md:text-3xl font-poppins ml-[25px] lg:ml-[55px]">Descubre marcas y sus historias</h2>
                <br/>
                <button className='border-2 border-black text-black rounded w-[200px] h-11 font-poppins ml-[25px] lg:ml-[55px]'>
                    <Link to="/Productos">Buscar Marcas</Link>
                </button>
            </div>
            {/* Para sm */}
            <div className="h-[300px] object-center text-center font-cormorant bg-gradient-to-b block md:hidden from-blue-200">
                <br/>
                <h1 className="text-3xl font-[700] mt-[15%]">Encontra las mejores marcas para tu mascota</h1>
                <br/>
                <h2 className="text-xl font-poppins">Descubri marcas y sus historias</h2>
                <br/>
                <button className='border-2 border-black text-black rounded w-[200px] h-11 font-poppins'>
                    <Link to="/Productos">Buscar Marcas</Link>
                </button>
            </div>

            {/* Para md */}

            <div className="hidden md:block">
                    <img className="object-none object-left h-[600px]" src={DescubrirMarcas}/>
            </div>

            {/* Para sm */}

            <div className="block md:hidden">
                    <img className="" src={DescubrirMarcas}/>
            </div>
            
        </div>
    )
}

export default DMarca;

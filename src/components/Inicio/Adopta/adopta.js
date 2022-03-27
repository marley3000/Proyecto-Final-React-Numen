import React from 'react'
import adopta from '../Adopta/Image/adopta.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const adoptar = () => {
  return (
    <div className='grid mt-8 auto-rows-min md:grid-cols-2 md:justify-items-center mx-14'>

      <div className='mt-10 md:ml-3'> 
        <h1 className='font-cormorant font-bold text-4xl text-[#FF8126]'> Porqué adoptar una mascota?</h1>
                
          <div className="text-[#FF8126] flex-col space-y-6">
            <div><FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-2xl md:text-2xl" /></div>
            <div><FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-2xl md:text-2xl" /></div>
            <div><FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-2xl md:text-2xl" /></div>
            <div><FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-2xl md:text-2xl" /></div>
          </div>
                     
        <p className='text-xs not-italic font-medium leading-6 bottom-3 first-letter:w-6 absolut last:m-4 font-poppins' >       
                Por su amor incondicional por el propietario y demás miembros de la familia.<br/>
                Porque no juzgan ni la personalidad ni el aspecto de las personas.<br/>
                Porque son compañeros fieles y pueden convertirse en nuestros mejores amigos.<br/>
                Porque siempre están contentos y nos contagian su buen humor.<br/>
        </p>
        <button className='bg-[#FF8126] text-white rounded w-[230px] h-10 mt-4 md:mt-8 mb-6'>Leer más</button>
      </div >
      <div >
        <img className='w-[500px] h-[350px] opacity-100 md:w-[560px] md:h-[390px]' src={adopta} alt='Adopta una mascota' />
        </div>
      
    </div>
  )
}

export default adoptar
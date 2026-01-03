import { RevealInView } from '../RevealInView/RevealInView'
import { Link } from 'react-router-dom'
import { MdOutlineEmail } from 'react-icons/md'
import { FaInstagram } from 'react-icons/fa6'
import { FaWhatsapp } from 'react-icons/fa'
import ContactForm from './ContactForm/ContactForm'
import { LiaLinkedin } from 'react-icons/lia'

export default function Contact() {
  return (
    <div id='contacts' className='bg-gray-200 flex flex-col justify-center items-center text-center md:px-12 px-4'>
        <RevealInView once threshold={0.2} className='w-full'>
            <h2 className='text-2xl md:text-4xl mb-8 font-bold text-primary'>Contatos</h2>
            <div className='mb-16 md:mb-32 bg-white shadow-lg rounded-xl p-4 md:p-8 w-full flex flex-col gap-8'>
                <p className='md:text-xl md:mb-4 '>Estou sempre aberto a novas oportunidades e conexões! Se você deseja entrar em contato comigo, sinta-se à vontade para me enviar uma mensagem.</p>

                <div className='w-full flex items-start gap-8 flex-wrap md:flex-nowrap'>
                    <div className='flex-col flex justify-center items-center md:gap-6 md:w-1/2 w-full  mx-auto'>
                       <h3 className=" mb-6 text-primary text-xl md:text-3xl font-bold">Entre em contato</h3>
                          <ContactForm/>
                    </div>
                    <div className='flex-col flex justify-center items-center md:gap-6 md:w-1/2 w-full  mx-auto'>
                        <h3 className=" mb-6 text-primary text-xl md:text-3xl font-bold">Informações de contato</h3>
                        <div className='flex items-start w-full gap-2 lg:gap-8 flex-col lg:flex-row'>
                            <Link 
                            to="mailto:mateuscavichion9@gmail.com" 
                            target='_blank'
                            className='w-full hover:cursor-pointer hover:bg-gray-100 rounded-lg p-2 duration-300'>
                                <div className='flex items-start gap-8'>
                                    <MdOutlineEmail className='text-4xl ms-2 text-primary'/>
                                    <div className='flex items-start flex-col'>
                                        <p className='font-bold'>E-mail</p>
                                        <p className='break-all text-sm sm:text-base text-start'>mateuscavichion9@gmail.com</p>
                                    </div>
                                </div>
                            </Link>
                            <Link 
                            to="https://wa.me/5548984850081" 
                            target='_blank'
                            className='w-full hover:cursor-pointer hover:bg-gray-100 rounded-lg p-2 duration-300'>
                                <div className='flex items-start gap-8'>
                                    <FaWhatsapp className='text-4xl ms-2 text-primary'/>
                                    <div className='flex items-start flex-col'>
                                        <p className='font-bold'>Celular</p>
                                        <p className='break-all text-sm sm:text-base text-start'>+55 (48) 98485-0081</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className='flex items-start w-full gap-2 lg:gap-8 flex-col lg:flex-row'>  
                            <Link 
                            to="https://www.linkedin.com/in/mateus-cavichion/" 
                            target='_blank'
                            className='w-full hover:cursor-pointer hover:bg-gray-100 rounded-lg p-2 duration-300'>
                                <div className='flex items-start gap-8'>
                                    <LiaLinkedin  className='text-4xl ms-2 text-primary'/>
                                    <div className='flex items-start flex-col'>
                                        <p className='font-bold'>Linkedin</p>
                                        <p className='break-all text-sm sm:text-base text-start'>Mateus Cavichion</p>
                                    </div>
                                </div>
                            </Link>
                            <Link 
                            to="https://www.instagram.com/mateus_ca13/" 
                            target='_blank'
                            className='w-full hover:cursor-pointer hover:bg-gray-100 rounded-lg p-2 duration-300'>
                                <div className='flex items-start gap-8'>
                                    <FaInstagram className='text-4xl ms-2 text-primary'/>
                                    <div className='flex items-start flex-col'>
                                        <p className='font-bold'>Instagram</p>
                                        <p className='break-all text-sm sm:text-base text-start'>Mateus_Ca13 </p>
                                    </div>
                                </div>
                            </Link>
                        </div>  
                    </div>
                    
                </div>
               
                
            </div>
        </RevealInView> 
    </div>
  )
}

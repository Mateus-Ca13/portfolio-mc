import { motion } from 'motion/react'
import { RevealInView } from '../RevealInView/RevealInView'
import { FaRegLightbulb } from 'react-icons/fa'
import { FaArrowTrendUp } from 'react-icons/fa6'
import { LuBrain } from 'react-icons/lu'
import { TbTools } from 'react-icons/tb'


export default function AboutMe() {

    const screenWidth = window.innerWidth

  return (
    <>
    <RevealInView 
    threshold={screenWidth > 1280 ? 0.5 : 0.2}
    once
    className='mb-18 md:mb-32'
   >
    <div id='about' className='flex mx-6 md:mx-12 xl:mx-32 flex-col justify-center items-center text-center'>
        <h2 className='text-2xl md:text-4xl my-8 font-bold text-primary'>Quem é Mateus?</h2>
        <div className='xl:flex-row flex-col flex justify-center items-center gap-12 '>
            <div className='flex flex-col gap-8 justify-center items-center w-full xl:w-2/3 text-start'>
                <p className=' md:text-2xl'>Sou um desenvolvedor Front-End apaixonado pelo constante aprendizado. Sou movido pela curiosidade e pelo desejo de transformar ideias em realidade, sempre com foco na usabilidade e na performance.</p>
                <p className=' md:text-2xl'>Minha jornada no mundo da programação começou em 2023, e desde então, tenho me dedicado a aprimorar minhas habilidades e conhecimentos para construir aplicações web robustas e de alta qualidade.</p>
                <p className=' md:text-2xl'>Como pessoa, sou alguém extremamente participativo, e que busca sempre estar alinhado com os objetivos da equipe. Acredito que a colaboração e a comunicação são fundamentais para o sucesso de qualquer projeto.</p>
            </div>
            <div className='w-1/3 flex flex-col  gap-8 justify-center items-center'>    
                <motion.div 
                className='rounded-xl p-6 w-48 md:w-64 gap-4 flex flex-col justify-center items-center bg-primary'
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                style={{ x: -40}}
                transition={{repeat: Infinity, repeatType: "reverse", duration: 2, ease: "easeInOut", delay: 0.5}}>
                    <p className='text-2xl text-white font-bold'>2023</p>
                    <p className='text-white md:text-xl font-semibold'>Primeiro contato com programação</p>
                </motion.div>
                <motion.div 
                className='rounded-xl p-6 w-48 md:w-64 gap-4 flex flex-col justify-center items-center bg-primary'
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                style={{ x: 40}}
                transition={{repeat: Infinity, repeatType: "reverse", duration: 2, ease: "easeInOut", delay: 1}}>
                    <p className='text-2xl text-white font-bold'>2024</p>
                    <p className='text-white md:text-xl font-semibold'>Aprofundamento no Front-end</p>
                </motion.div>
                <motion.div 
                className='rounded-xl p-6 w-48 md:w-64 gap-4 flex flex-col justify-center items-center bg-primary'
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                style={{ x: -40}}
                transition={{repeat: Infinity, repeatType: "reverse", duration: 2, ease: "easeInOut", delay: 1.5}}>
                    <p className='text-2xl text-white font-bold'>2025</p>
                    <p className='text-white md:text-xl font-semibold'>Início da transição para Fullstack</p>
                </motion.div>
            </div>
        </div>
    </div>
    </RevealInView >
    <RevealInView 
    threshold={screenWidth > 1280 ? 0.5 : 0.2}
    once
    className='md:mb-48 lg:mb-64'
   >
    <div className='flex mx-6 md:mx-12 xl:mx-32 flex-col justify-center items-center text-center'>
        <h2 className='text-2xl md:text-4xl mb-8 font-bold text-primary'>Meu cenário atual</h2>
        <div className='xl:flex-row flex-col-reverse flex justify-center items-center'>
            <div className='w-1/3 flex flex-col gap-8 justify-center items-center'>
                <div className='flex flex-row xl:flex-col xl:gap-28 2xl:flex-row 2xl:gap-0 mt-24 xl:mt-0 justify-center gap-0 md:gap-8 items-center '>
                    <div className='flex items-center'>
                        <motion.div 
                        className='rounded-full p-5 sm:p-8 md:h-24 flex justify-center items-center md:w-24 bg-primary'
                        initial={{ y: -20 }}
                        transition={{repeat: Infinity, repeatType: "reverse", duration: 2, ease: "easeInOut", }}
                        animate={{ y: -10}}><FaRegLightbulb className='text-3xl text-white'/></motion.div>
                        <motion.div 
                        className='rounded-full p-5 sm:p-8 md:h-24 flex justify-center items-center md:w-24 bg-primary'
                        initial={{ y: 60 }}
                        transition={{repeat: Infinity, repeatType: "reverse", duration: 2, ease: "easeInOut", delay: 0.5}}
                        animate={{ y: 50}}><FaArrowTrendUp  className='text-3xl text-white'/></motion.div>
                    </div>
                    <div className='flex items-center'>
                        <motion.div 
                        className='rounded-full p-5 sm:p-8 md:h-24 flex justify-center items-center md:w-24 bg-primary'
                        initial={{ y: -60 }}
                        transition={{repeat: Infinity, repeatType: "reverse", duration: 2, ease: "easeInOut", delay: 1}}
                        animate={{ y: -50}}><LuBrain  className='text-3xl text-white'/></motion.div>
                        <motion.div 
                        className='rounded-full p-5 sm:p-8 md:h-24 flex justify-center items-center md:w-24 bg-primary'
                        initial={{ y: 20  }}
                        transition={{repeat: Infinity, repeatType: "reverse", duration: 2, ease: "easeInOut", delay: 1.5}}
                        animate={{ y: 10}}><TbTools  className='text-3xl text-white'/></motion.div>
                    </div>
                
                </div>
            </div>
            <div className='flex flex-col  xl:px-6 gap-8 justify-center items-center text-start w-full xl:w-2/3'>
                <p className=' md:text-2xl'>Atualmente, tenho me dedicado a expandir meus conhecimentos. Iniciei na área como desenvolvedor front-end, mas hoje já realizo projetos de maior porte, desenvolvendo soluções back-end para dar vida as minhas aplicações.
                </p>
                <p className=' md:text-2xl'>Além disso, minha jornada de experiência (especialmente com televisores smart TV), me condicionou a buscar as melhores práticas de desenvolvimento e arquitetura de software, para que minhas aplicações sejam escaláveis e de alta performance.</p>
            </div>
        </div>
    </div>
    </RevealInView >
</>
 )
}

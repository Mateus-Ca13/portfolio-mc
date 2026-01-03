import { motion } from 'motion/react'
import { RevealInView } from '../RevealInView/RevealInView'
import { FaRegLightbulb } from 'react-icons/fa'
import { FaArrowTrendUp } from 'react-icons/fa6'
import { LuBrain } from 'react-icons/lu'
import { TbTools } from 'react-icons/tb'

export default function AboutMe() {

    const screenWidth = window.innerWidth

  return (
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
                <p className=' md:text-2xl'>Tendo iniciado na área em 2023, me dediquei a aprimorar minhas habilidades e conhecimentos para construir aplicações web. No cenário atual, venho me deslocando para o desenvolvimento Fullstack, buscando construir soluções completas e robustas.</p>
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

 )
}

import { TbTools } from "react-icons/tb";
import { RevealInView } from "../RevealInView/RevealInView";
import { motion } from "motion/react";
import { FaRegLightbulb } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { LuBrain } from "react-icons/lu";

export default function Skills() {

    const screenWidth = window.innerWidth

  return (
    <RevealInView 
    threshold={screenWidth > 1280 ? 0.5 : 0.2}
    once
    className='md:mb-48 lg:mb-64'
   >
    <div id="skills" className='flex mx-6 md:mx-12 xl:mx-32 flex-col justify-center items-center text-center'>
        <h2 className='text-2xl md:text-4xl mb-12 font-bold text-primary'>Habilidades <span className="text-gray-300">|</span> Experiência</h2>
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
            <div className='flex flex-col  xl:px-6 gap-8 justify-center items-start text-start w-full xl:w-2/3'>
                <p className=' md:text-2xl'>Hoje, venho expandindo meu conhecimento e assumindo o papel de desenvolvedor FullStack, com experiência tanto no desenvolvimento 
                    de interfaces, utilizando React.js, TailwindCSS, MUI, Zustand, etc., quanto no back-end, 
                    em ambientes Node.js, utilizando Express.js, Prisma ORM e bancos de dados relacionais</p>                
                <p className=' md:text-2xl'>Além disso, possuo experiência com a criação de APIs RESTful, autenticação JWT, e integrações com serviços de terceiros. Tenho experiência no desenvolvimento
                    de aplicações responsivas e otimizadas para diferentes dispositivos, garantindo uma ótima experiência do usuário.</p>
                <p className=' md:text-2xl'> Esses e outros detalhes de minha jornada podem ser vistos no meu currículo <a href="/cv_mateus_cavichion.pdf" download className="text-primary font-bold underline hover:text-primary/70 duration-200">clicando aqui.</a>
                </p>
            </div>
        </div>
    </div>
    </RevealInView >
  )
}

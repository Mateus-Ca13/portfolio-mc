import { motion } from "motion/react"

export default function Banner() {  
  return (
    <div className="w-full px-24 bg-[url('/banner2.jpg')] bg-cover bg-center bg-no-repeat overflow-hidden relative h-screen flex items-center justify-center" style={{ perspective: 1000 }}>
        <div
        className="px-8 pt-18 sm:pt-0  flex lg:flex-row flex-col absolute text-black z-20 gap-12">
            <div className="flex flex-col justify-center xl:items-start items-center! text-center gap-8">
            <motion.div
            initial={{opacity: 0, x:-40}}
            animate={{opacity: 1, x: 0}}
            transition={{ duration: 1.5, delay: 0.5}} 
            className="text-xl xl:text-3xl font-semibold">👋 Olá, mundo! Me chamo</motion.div>
            <motion.div
            initial={{opacity: 0, x:-50}}
            animate={{opacity: 1, x: -10}}
            transition={{ duration: 1, delay: 2}} 
            className="text-6xl font-lobster xl:text-9xl text-primary">Mateus Cavichion</motion.div>
            <motion.div
            initial={{opacity: 0, x:-40}}
            animate={{opacity: 1.5, x: 0}}
            transition={{ duration: 1, delay: 3}} 
            className="text-lg xl:text-3xl font-bold">Desenvolvedor Front-End <span className="text-gray-300">|</span> Next.js <span className="text-gray-300">|</span> React.js <span className="text-gray-300">|</span> Typescript</motion.div>
            </div>
            <motion.div
            className="flex justify-center items-center"
            initial={{opacity: 0, x:-40}}
            animate={{opacity: 1.5, x: 0}}
            transition={{ duration: 1, delay: 3}}>
                <img src="./photo.png" className="rounded-full h-56 md:h-96 shadow-lg" alt="" />
            </motion.div>
        </div>
        <div className="bg-linear-to-t from-gray-50 absolute z-10 to-transparent h-screen w-full"></div>
    </div>
  )
}

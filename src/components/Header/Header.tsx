import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useState } from 'react'
import { IoIosMenu } from 'react-icons/io'
import { Link } from 'react-router-dom'
import NameLogo from '../NameLogo'

export default function Header() {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const shouldReduceMotion = useReducedMotion()

    const toggleMenuIsOpen = () => {
        setMenuIsOpen(!menuIsOpen)
    }

  return (
    <motion.div
    className='fixed z-30 top-4 xl:top-6 bg-gray-50/60 backdrop-blur-md flex justify-between items-center shadow-lg w-4/5 rounded-full p-2 font-bold'
    initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -50, scale: 0.96, filter: 'blur(8px)' }}
    animate={{opacity: 1, y: 0, scale: 1, filter: 'blur(0px)'}}
    transition={{
        duration: shouldReduceMotion ? 0 : 0.65,
        delay: shouldReduceMotion ? 0 : 4,
        ease: [0.22, 1, 0.36, 1],
    }}
    >
        <NameLogo compactDelay={5600} />
        <div className='hidden xl:flex items-center justify-center gap-4 px-6 xl:gap-7 xl:px-12'>
            <motion.div className="rounded-full px-4 py-2 transition-colors duration-200 hover:bg-primary/10 hover:text-primary" whileHover={{y: -2}}>
                <Link to={'/#about'} className=''>Sobre mim</Link>
            </motion.div>
            <motion.div className="rounded-full px-4 py-2 transition-colors duration-200 hover:bg-primary/10 hover:text-primary" whileHover={{y: -2}}>
                <Link to={'/#skills'} className=''>Habilidades</Link>
            </motion.div>
            <motion.div className="rounded-full px-4 py-2 transition-colors duration-200 hover:bg-primary/10 hover:text-primary" whileHover={{y: -2}}>
                <Link to={'/#differentials'} className=''>Diferenciais</Link>
            </motion.div>
            <motion.div className="rounded-full px-4 py-2 transition-colors duration-200 hover:bg-primary/10 hover:text-primary" whileHover={{y: -2}}>
                <Link to={'/#projects'} className=''>Projetos</Link>
            </motion.div>
            <motion.div className="rounded-full px-4 py-2 transition-colors duration-200 hover:bg-primary/10 hover:text-primary" whileHover={{y: -2}}>
                <Link to={'/#contacts'} className=''>Contatos</Link>
            </motion.div>
        </div>    
        <div className=' xl:hidden'>
            <IoIosMenu onClick={toggleMenuIsOpen} className={` text-3xl md:text-4xl mr-4 text-gray-700  cursor-pointer duration-200 ${menuIsOpen ? 'text-primary scale-105' : ''}`}/>
            <AnimatePresence>
            {menuIsOpen && 
            <motion.div
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            exit={{ opacity: 0, y: -20 }}
            className='w-full absolute top-16 right-0 bg-gray-50 flex flex-col justify-center items-center shadow-lg rounded-xl p-4 font-bold gap-4'>
                
                <Link className="w-full rounded-lg px-4 py-2 text-center transition-colors duration-200 hover:bg-primary/10 hover:text-primary" to={'/#about'} onClick={toggleMenuIsOpen}>Sobre mim</Link>
                <Link className="w-full rounded-lg px-4 py-2 text-center transition-colors duration-200 hover:bg-primary/10 hover:text-primary" to={'/#skills'} onClick={toggleMenuIsOpen}>Habilidades</Link>
                <Link className="w-full rounded-lg px-4 py-2 text-center transition-colors duration-200 hover:bg-primary/10 hover:text-primary" to={'/#differentials'} onClick={toggleMenuIsOpen}>Diferenciais</Link>
                <Link className="w-full rounded-lg px-4 py-2 text-center transition-colors duration-200 hover:bg-primary/10 hover:text-primary" to={'/#projects'} onClick={toggleMenuIsOpen}>Projetos</Link>
                <Link className="w-full rounded-lg px-4 py-2 text-center transition-colors duration-200 hover:bg-primary/10 hover:text-primary" to={'/#contacts'} onClick={toggleMenuIsOpen}>Contatos</Link>
            </motion.div>}
            </AnimatePresence>
        </div>
    </motion.div>
  )
}

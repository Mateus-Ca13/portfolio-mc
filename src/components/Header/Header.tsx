import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { IoIosMenu } from 'react-icons/io'
import { Link } from 'react-router-dom'

export default function Header() {

    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const toggleMenuIsOpen = () => {
        setMenuIsOpen(!menuIsOpen)
    }

  return (
    <motion.div
    className='fixed z-30 top-4 xl:top-10 bg-gray-50/50 backdrop-blur-md flex justify-between items-center shadow-lg w-4/5 rounded-full p-2 font-bold'
    initial={{opacity: 0, y: -50}}
    animate={{opacity: 1, y: 0}}
    transition={{ duration: 0.5, delay: 4}} 
    >
        <img src="icon.png" className='h-10 px-4 py-1 bg-primary rounded-full' alt="" />
        <div className='hidden md:flex  items-center justify-center gap-12 px-12'>
            <motion.div whileHover={{y: -2, color: 'var(--color-primary)'}}>
                <Link to={'/#about'} className=''>Sobre mim</Link>
            </motion.div>
            <motion.div whileHover={{y: -2, color: 'var(--color-primary)'}}>
                <Link to={'/#projects'} className=''>Projetos</Link>
            </motion.div>
            <motion.div whileHover={{y: -2, color: 'var(--color-primary)'}}>
                <Link to={'/#contacts'} className=''>Contatos</Link>
            </motion.div>
        </div>    
        <div>
            <IoIosMenu onClick={toggleMenuIsOpen} className={` md:hidden text-3xl md:text-4xl mr-4 text-gray-700  cursor-pointer duration-200 ${menuIsOpen ? 'text-primary scale-105' : ''}`}/>
            <AnimatePresence>
            {menuIsOpen && 
            <motion.div
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            exit={{ opacity: 0, y: -20 }}
            className='w-full absolute top-16 right-0 bg-gray-50 flex flex-col justify-center items-center shadow-lg rounded-xl p-4 font-bold gap-4'>
                
                <Link to={'/#about'} onClick={toggleMenuIsOpen}>Sobre mim</Link>
                <Link to={'/#projects'} onClick={toggleMenuIsOpen}>Projetos</Link>
                <Link to={'/#contacts'} onClick={toggleMenuIsOpen}>Contatos</Link>
            </motion.div>}
            </AnimatePresence>
        </div>
    </motion.div>
  )
}

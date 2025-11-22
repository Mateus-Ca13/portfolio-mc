import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

export default function Header() {

  return (
    <motion.div
    className='fixed z-30 top-4 xl:top-10 bg-gray-50/10 backdrop-blur-md flex justify-between items-center shadow-lg w-4/5 rounded-full p-2 font-bold'
    initial={{opacity: 0, y: -50}}
    animate={{opacity: 1, y: 0}}
    transition={{ duration: 0.5, delay: 4}} 
    >
        <img src="icon.png" className='h-10 px-4 py-1 bg-primary rounded-full' alt="" />
        <div className='hidden md:flex  items-center justify-center gap-12 px-12'>
            <motion.div whileHover={{y: -2, color: 'var(--color-primary)'}}>
                <Link to={'#about'} className=''>Sobre mim</Link>
            </motion.div>
            <motion.div whileHover={{y: -2, color: 'var(--color-primary)'}}>
                <Link to={'#projects'} className=''>Projetos</Link>
            </motion.div>
            <motion.div whileHover={{y: -2, color: 'var(--color-primary)'}}>
                <Link to={'#contacts'} className=''>Contatos</Link>
            </motion.div>
            
        </div>    
    </motion.div>
  )
}

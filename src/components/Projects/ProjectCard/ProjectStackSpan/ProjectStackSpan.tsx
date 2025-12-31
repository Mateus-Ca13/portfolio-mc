import { motion } from 'motion/react'
import { useCallback, useState } from 'react'
import { MdOutlineExpandMore } from 'react-icons/md'

type ProjectStackSpanProps = {
    techs: string[]
}


export default function ProjectStackSpan({techs}: ProjectStackSpanProps) {

    const [isHovered, setIsHovered] = useState(false)

    const width = useCallback(() => {
        return window.innerWidth;
    }, [])


  return (
    <div className='relative '>
        <div onMouseOver={()=> (techs.length > 6 && width() >= 768) && setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)} className='flex px-4  gap-2 md:gap-4 flex-wrap bg-gray-100 p-2 rounded-lg my-6 items-center justify-center'>
            {techs.slice(0, 6).map((t, index) => <><p className='text-sm lg:text-lg font-bold'>{t} </p>{index !== techs.slice(0, 6).length -1? <span className="font-bold text-gray-400">|</span> : <></>}</>)}
            {techs.length > 6 && <MdOutlineExpandMore   className='hidden md:block text-xl text-gray-400'/>}
        </div>
        {isHovered &&
        <motion.div
            initial={{opacity: 0, y: -5}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.3}}
            className='absolute -bottom-6 left-0 w-full xl:w-max flex-wrap bg-gray-100 z-10 text-black text-sm px-3 py-2 rounded-md shadow-lg flex justify-start items-center gap-2'>
                {techs.map((t, index) => <p className='font-bold'>{t}{index !== techs.length -1? <span className="font-bold">,</span> : <></>}</p>)}
        </motion.div>
        }
    </div>
  )
}




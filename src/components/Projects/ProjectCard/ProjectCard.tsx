import { useState } from "react"
import { FaGithub } from "react-icons/fa"
import { GrTest } from "react-icons/gr"
import { Link } from "react-router-dom"
import { useDialogStore } from "../../../store/useDialogStore"
import { BiExpand } from "react-icons/bi"
import ProjectStackSpan from "./ProjectStackSpan/ProjectStackSpan"
import { motion } from "motion/react"

export type ProjectCardProps = {
    name: string
    description: string
    githubBe?: string
    githubFe?: string
    demo?: string
    techs: string[]
    images: string[]
    video: string


}

export default function ProjectCard({name, description, githubBe, githubFe, demo, techs, images, video} : ProjectCardProps) {

    const onOpen = useDialogStore(state => state.onOpen)
    const [onRepoButtonHover, setOnRepoButtonHover] = useState(false)

  return (
    <div className='shadow-lg mb-8  md:mb-12 md:gap-12 bg-white rounded-xl w-full flex flex-col xl:flex-row  justify-between items-start p-4 md:p-8'>
        <div className='flex flex-col justify-center items-start w-full xl:w-1/2'>
            <h3 className=" mb-6 text-primary text-xl md:text-3xl font-bold">{name}</h3>
            <p className=" md:text-xl text-start">{description}</p>
            <ProjectStackSpan techs={techs}/>
            <div className="mt-2 flex-col sm:flex-row w-full flex gap-2 md:gap-8">
            
                <button 
                onMouseOver={()=>(githubBe || githubFe) && setOnRepoButtonHover(true)} 
                onMouseLeave={()=>setOnRepoButtonHover(false)}
                disabled={!(githubBe || githubFe)} 
                className="relative w-full lg:w-max justify-center bg-purple-800 hover:bg-purple-900 flex items-center disabled:opacity-50 disabled:cursor-default text-white font-semibold py-4 px-12 rounded-lg  duration-200">
                Ver no Github <FaGithub className="ms-2 text-xl"/> 
                {onRepoButtonHover && 
                    <motion.div 
                    initial={{opacity: 0, bottom: -30}}
                    animate={{opacity: 1, bottom: -45}}
                    exit={{opacity: 0, bottom: 0}}
                    className="absolute bg-purple-900 w-full h-full rounded-lg justify-center items-center flex">
                        <Link to={githubFe?? '/'} target="_blank" className="w-1/2 underline hover:opacity-80 duration-200">
                            <button disabled={!githubFe} className="disabled:opacity-55 disabled:cursor-default hover:cursor-pointer">Front-end</button>
                        </Link>
                        <div className="max-w-1 bg-white h-2/3"></div>
                        <Link to={githubBe?? '/'} target="_blank" className="w-1/2 underline hover:opacity-80 duration-200">
                            <button disabled={!githubBe} className="disabled:opacity-55 disabled:cursor-default hover:cursor-pointer">Back-end</button>
                        </Link>
                    </motion.div>
                }
                </button>
            <Link to={demo?? ''} target="_blank" className="w-full lg:w-max"><button disabled={!demo} className="w-full lg:w-max justify-center bg-primary flex items-center disabled:opacity-50 disabled:cursor-default text-white font-semibold py-4 px-12 rounded-lg hover:brightness-90 duration-200 cursor-pointer">Testar a demo <GrTest  className="ms-2 text-xl"/></button></Link>

            </div>
        </div>
        
            
            <div className="w-full overflow-scroll md:overflow-auto mt-8 xl:mt-0 xl:w-1/2 gap-4 xl:gap-10 flex-row flex justify-start xl:justify-end items-start xl:items-center">
            <img onClick={()=>onOpen(images[0])} className="border border-gray-300 shrink-0 rounded-xl h-42 lg:h-42 xl:h-96 hover:brightness-75 duration-200 cursor-pointer" src={images[0]} alt=""/>
            <div className="flex shrink-0 xl:w-1/2 2xl:w-1/3 gap-4 xl:gap-10 flex-row xl:flex-col items-center justify-center">
                <img onClick={()=>onOpen(images[1])} className="shrink-0 border border-gray-300 rounded-xl h-42 xl:h-42 hover:brightness-75 duration-200 cursor-pointer" src={images[1]} alt=""/>
                <video className="rounded-xl w-full h-42 border border-gray-300 xl:h-42 " src={video} controls></video>
            </div> 
              
        </div>
        <div className="text-sm md:text-lg xl:hidden flex mt-2 md:-mt-8 items-center text-gray-400 font-semibold justify-center gap-2">
            <p>Clique para expandir as imagens</p>
            <BiExpand/>
        </div>

    </div>
  )
}

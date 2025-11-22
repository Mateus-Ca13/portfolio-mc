import { FaGithub } from "react-icons/fa"
import { GrTest } from "react-icons/gr"
import { Link } from "react-router-dom"

export type ProjectCardProps = {
    name: string
    description: string
    github?: string
    demo?: string
    techs: string[]
    images: string[]
    video: string


}

export default function ProjectCard({name, description, github, demo, techs, images, video} : ProjectCardProps) {
  return (
    <div className='shadow-lg bg-white rounded-xl w-full flex flex-col xl:flex-row  justify-between items-start p-8'>
        <div className='flex flex-col justify-center items-start w-full xl:w-1/2'>
            <h3 className=" mb-4 text-primary text-4xl font-bold">{name}</h3>
            <p className="text-xl text-start">{description}</p>
            <div className='flex gap-4 flex-wrap bg-gray-100 p-2 rounded-lg my-4 items-center justify-center'>
                {techs.map((t, index) => <><p className='text-md lg:text-lg font-bold'>{t} </p>{index !== techs.length -1? <span className="font-bold text-gray-400">|</span> : <></>}</>)}
            </div>
            <div className="mt-12 xl:mt-24 flex-col sm:flex-row w-full flex gap-8">
            <Link to={github?? ''} target="_blank"><button className="w-full md:w-max justify-center bg-purple-800 flex items-center text-white font-semibold p-4 rounded-lg hover:brightness-90 duration-200 cursor-pointer">Ver no Github <FaGithub className="ms-2 text-xl"/> </button></Link>
            <Link to={demo?? ''} target="_blank"><button className="w-full md:w-max justify-center bg-primary flex items-center text-white font-semibold p-4 rounded-lg hover:brightness-90 duration-200 cursor-pointer">Testar a demo <GrTest  className="ms-2 text-xl"/></button></Link>

            </div>
        </div>
        <div className="w-full mt-8 xl:mt-0 xl:w-1/3 gap-2 xl:gap-8 flex-col lg:flex-row flex justify-start xl:justify-end items-start xl:items-center">
        <img className="xl:w-1/3 rounded-xl h-42 xl:h-96" src={images[0]} alt=""/>
        <div className="x-full flex gap-2 xl:gap-10 flex-col lg:flex-row xl:flex-col items-center justify-center">
            <img className="w-full rounded-xl h-42 xl:h-42" src={images[1]} alt=""/>
            <video className="w-full rounded-xl h-42 xl:h-42" src={video} controls></video>
        </div>   
        </div>
        

    </div>
  )
}

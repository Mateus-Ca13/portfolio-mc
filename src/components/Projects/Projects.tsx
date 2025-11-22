import React from 'react'
import { RevealInView } from '../RevealInView/RevealInView'
import ProjectCard, { type ProjectCardProps } from './ProjectCard/ProjectCard'

export default function Projects() {

    const projects: ProjectCardProps[] = [
        {name: "Portfolio",
            description: "Este é o meu portfólio pessoal, desenvolvido com React e TypeScript. Ele apresenta meus projetos, habilidades e informações de contato, proporcionando uma visão abrangente da minha experiência como desenvolvedor.",
            images: ["/project1_1.png", "/project1_1.png"],
            github: "https://github.com/luizfelipe-lf/portfolio",
            demo: "https://portfolio-luizfelipe-lf.vercel.app/",
            techs: ["React.js", "Typescript", "Framer motion", "TailwindCSS", "React Router"],
            video: ""

        }
    ] 

  return (
  
        <div className='bg-gray-200 flex flex-col justify-center items-center text-center'>
            <RevealInView once threshold={0.3}>
                <h2 className='text-4xl mb-8 font-bold text-primary'>Projetos <span className="text-gray-300">|</span> Cases</h2>
                <div className='mb-32 mx-12'>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
             </RevealInView> 
        </div>
   
  )
}

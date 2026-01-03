import { RevealInView } from '../RevealInView/RevealInView'
import ProjectCard, { type ProjectCardProps } from './ProjectCard/ProjectCard'

export default function Projects() {

    const projects: ProjectCardProps[] = [
        {name: "Portfolio",
            description: "Este é o meu portfólio pessoal, desenvolvido com React e TypeScript. Ele apresenta meus projetos, habilidades e informações de contato, proporcionando uma visão abrangente da minha experiência como desenvolvedor.",
            images: ["images/project1_2.png", "images/project1_1.png"],
            githubFe: "https://github.com/Mateus-Ca13/portfolio-mc",
            demo: "https://portfolio-mc-seven.vercel.app/",
            techs: ["React.js", "Typescript", "Framer motion", "TailwindCSS", ],
            video: "/videos/project1_video.mp4"

        },
        {name: "Controle de Estoque - Divino Oleiro",
            description: "Projeto desenvolvido para uma comunidade católica. Trata-se de uma solução full-stack para controle de estoque simplificado. Usuários são capazes de realizar funções de CRUD sobre diversos recursos, como produtos e estoques. São capazes de criar movimentações atráves de importação de NF-e ou cadastro maunal.",
            images: ["images/project2_2.png", "images/project2_1.png"],
            techs: ["React.js", "Typescript", "Express.js", "PostgreSQL", "Prisma ORM", "JWT", "Zod", "MUI", "Zustand", "React Query", "Axios", "Bcrypt"],
            video: "/videos/project2_video.mp4",
            githubFe: "https://github.com/Mateus-Ca13/front-storage-control.git",
            githubBe: "https://github.com/Mateus-Ca13/api-storage-control.git",
            demo: "https://divinooleiro.cloud/login"


        },
        {name: "Sistema de login e autenticação - Bola na Rede",
            description: "PoC (Prova de Conceito) de um sistema (mobile-only) de login e autenticação utilizando Express.js para o backend e Supabase como banco de dados. O sistema permite que os usuários se registrem, façam login e acessem rotas protegidas com uso de JWT.",
            images: ["images/project4_2.png", "images/project4_1.png"],
            techs: ["React.js", "TailwindCSS", "Express.js", "Nodemailer", "JWT", "Supabase", "Bcrypt"],
            video: "/videos/project4_video.mp4",
            demo: "https://bola-na-rede.vercel.app/",
            githubBe: "https://github.com/Mateus-Ca13/API-BolaNaRede",
            githubFe: "https://github.com/Mateus-Ca13/Bola_na_Rede.git"


        },
        {name: "Landing Page - LAM Móveis",
            description: "Landing page desenvolvida para uma loja de móveis planejados. O site apresenta os serviços oferecidos pela empresa, portfólio de projetos realizados e informações de contato para potenciais clientes.",
            images: ["images/project3_2.png", "images/project3_1.png"],
            githubFe: "https://github.com/Mateus-Ca13/LAM-website.git",
            demo: "https://mateus-ca13.github.io/LAM-website/",
            techs: ["HTML", "CSS", "JavaScript", "Bootstrap"],
            video: "/videos/project3_video.mp4"

        },

    ] 

  return (
  
        <div id='projects' className='bg-gray-200 flex flex-col justify-center items-center text-center'>
            <RevealInView once threshold={0.1}>
                <h2 className='text-2xl md:text-4xl mb-8 font-bold text-primary'>Projetos <span className="text-gray-300">|</span> Cases</h2>
                <div className='mb-14 md:mb-32 mx-4 md:mx-12'>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
             </RevealInView> 
        </div>
   
  )
}

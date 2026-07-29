import { RevealInView } from '../RevealInView/RevealInView'
import ProjectCard, { type ProjectCardProps } from './ProjectCard/ProjectCard'

const projects: ProjectCardProps[] = [
        {name: "Wishly - Sua lista de desejos online",
            description: "O Wishly é um SaaS B2C freemium para gestão centralizada de listas de desejos. Desenvolvido como um Progressive Web App (PWA) utilizando Next.js 16+ e Supabase, o projeto prioriza alta performance de renderização e escalabilidade de banco de dados.",
            images: ["images/project5_2.png", "images/project5_1.png"],
            githubFe: "https://github.com/Mateus-Ca13/Wishly.git",
            demo: "https://appwishly.vercel.app/",
        techs: ["Next.js +16", "Typescript", "Supabase", "Framer motion", "TailwindCSS", "Shadcn/ui",  "Next intl", "Nanoid", "Slugify", "Zustand", "zod", "React Hook Form", "@ducanh2912/next-pwa" ],
            video: "/videos/project5_video.mp4"

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

export default function Projects() {
  return (
        <section
            id="projects"
            className="relative isolate overflow-hidden bg-gray-50 px-6 pb-28 pt-16 sm:px-10 lg:px-12 lg:pb-40 lg:pt-24"
        >
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    backgroundImage: [
                        "radial-gradient(circle at 20% 28%, rgba(95,168,30,0.06) 0%, transparent 55%)",
                        "radial-gradient(circle at 80% 68%, rgba(190,242,100,0.07) 0%, transparent 52%)",
                        "radial-gradient(circle at 78% 12%, rgba(255,255,255,0.75) 0%, transparent 36%)",
                    ].join(", "),
                }}
            />

            <RevealInView once threshold={0.1} className="relative mx-auto max-w-7xl">
                <div className="mb-12 flex text-center flex-col items-center justify-center gap-6 lg:mb-18 lg:grid-cols-[1fr_0.72fr]">
                    <div>

                        <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-950 sm:text-4xl lg:text-5xl">
                            Cases <span className="text-primary">&</span> Projetos
                            <span className="block text-2xl text-gray-400">Experiências em destaque</span>
                        </h2>
                    </div>
                    <p className="max-w-xl text-base  leading-relaxed text-gray-600 sm:text-lg lg:justify-self-end">
                        Produtos completos, da interface à infraestrutura, construídos para
                        resolver necessidades reais com clareza, desempenho e boa experiência.
                    </p>
                </div>

                <div className="space-y-8 lg:space-y-12">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.name}
                            {...project}
                            index={index}
                        />
                    ))}
                </div>
             </RevealInView>
        </section>
  )
}

import type { IconType } from 'react-icons'
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { LuArrowUpRight, LuClock3, LuMessageCircleMore } from 'react-icons/lu'
import { MdOutlineEmail } from 'react-icons/md'
import { RevealInView } from '../RevealInView/RevealInView'
import ContactForm from './ContactForm/ContactForm'

type ContactChannel = {
  label: string
  value: string
  href: string
  icon: IconType
}

const contactChannels: ContactChannel[] = [
  {
    label: 'E-mail',
    value: 'mateuscavichion9@gmail.com',
    href: 'mailto:mateuscavichion9@gmail.com',
    icon: MdOutlineEmail,
  },
  {
    label: 'WhatsApp',
    value: '+55 (48) 98485-0081',
    href: 'https://wa.me/5548984850081',
    icon: FaWhatsapp,
  },
  {
    label: 'LinkedIn',
    value: 'Mateus Cavichion',
    href: 'https://www.linkedin.com/in/mateus-cavichion/',
    icon: FaLinkedinIn,
  },
  {
    label: 'Instagram',
    value: '@mateus_ca13',
    href: 'https://www.instagram.com/mateus_ca13/',
    icon: FaInstagram,
  },
]

export default function Contact() {
  return (
    <section
      id="contacts"
      className="relative isolate overflow-hidden bg-gray-50 px-6 pb-12 sm:px-10 lg:px-12 lg:pb-24"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: [
            "radial-gradient(circle at 20% 84%, rgba(95,168,30,0.06) 0%, transparent 55%)",
            "radial-gradient(circle at 80% 72%, rgba(190,242,100,0.07) 0%, transparent 52%)",
          ].join(", "),
        }}
      />

      <RevealInView once threshold={0.12} className="relative mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-950 sm:text-4xl lg:text-5xl">
            Vamos construir algo
            <span className="text-primary"> juntos?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Tem uma oportunidade, uma ideia ou apenas quer trocar experiências?
            Escolha um canal ou envie uma mensagem.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-4xl border border-white/80 bg-white/70 shadow-2xl shadow-gray-900/10 backdrop-blur-sm lg:grid-cols-[0.88fr_1.12fr]">
          <div className="relative overflow-hidden bg-gray-950 p-6 text-white sm:p-9 lg:p-10">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 78% 18%, rgba(95,168,30,0.12) 0%, transparent 55%)",
              }}
            />
            <div className="relative">
              <LuMessageCircleMore className="text-4xl text-primary" aria-hidden="true" />
              <h3 className="mt-4 text-2xl font-bold sm:text-3xl">Fale diretamente comigo</h3>
              <p className="mt-3 max-w-md leading-relaxed text-white/55">
                Use o canal que for mais conveniente. Responderei assim que possível.
              </p>

              <div className="mt-8 space-y-3">
                {contactChannels.map((channel) => {
                  const Icon = channel.icon

                  return (
                    <a
                      key={channel.label}
                      href={channel.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_28px_rgba(95,168,30,0.16)]"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/8 text-xl text-primary transition-colors group-hover:bg-primary/15">
                        <Icon aria-hidden="true" />
                      </span>
                      <span className="min-w-0 flex-1 text-left">
                        <span className="block text-xs font-bold uppercase tracking-[0.18em] text-white/35">
                          {channel.label}
                        </span>
                        <span className="mt-0.5 block truncate text-sm font-semibold text-white/85 sm:text-base">
                          {channel.value}
                        </span>
                      </span>
                      <LuArrowUpRight className="shrink-0 text-white/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                    </a>
                  )
                })}
              </div>

              <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6 text-sm text-white/45">
                <LuClock3 className="text-lg text-primary" aria-hidden="true" />
                <span>Normalmente respondo em até 1 dia útil.</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                Envie uma mensagem
              </p>
              <h3 className="mt-2 text-2xl font-bold text-gray-950 sm:text-3xl">
                Conte-me sobre sua ideia
              </h3>
              <p className="mt-3 max-w-xl leading-relaxed text-gray-500">
                Preencha os campos abaixo e inclua os detalhes necessários para
                começarmos uma boa conversa.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </RevealInView>
    </section>
  )
}

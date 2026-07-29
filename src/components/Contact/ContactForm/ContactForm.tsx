import { motion, useInView, useReducedMotion } from 'motion/react'
import { useRef } from 'react'
import { LuSend } from 'react-icons/lu'

export default function ContactForm() {
  const submitButtonRef = useRef<HTMLButtonElement>(null)
  const isSubmitButtonVisible = useInView(submitButtonRef, { once: true, amount: 0.8 })
  const shouldReduceMotion = useReducedMotion()

  return (
    <form
      action="https://formspree.io/f/mvzgpwen"
      method="POST"
      className="flex w-full flex-col gap-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-left">
          <span className="text-sm font-bold text-gray-700">Seu nome</span>
          <input
            type="text"
            name="name"
            placeholder="Como posso te chamar?"
            autoComplete="name"
            required
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-950 outline-none transition-all duration-200 placeholder:text-gray-400 hover:border-gray-300 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
          />
        </label>

        <label className="flex flex-col gap-2 text-left">
          <span className="text-sm font-bold text-gray-700">Seu e-mail</span>
          <input
            type="email"
            name="email"
            placeholder="voce@exemplo.com"
            autoComplete="email"
            required
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-950 outline-none transition-all duration-200 placeholder:text-gray-400 hover:border-gray-300 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
          />
        </label>
      </div>

      <label className="flex flex-col gap-2 text-left">
        <span className="text-sm font-bold text-gray-700">Assunto</span>
        <input
          type="text"
          name="subject"
          placeholder="Sobre o que vamos conversar?"
          required
          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-950 outline-none transition-all duration-200 placeholder:text-gray-400 hover:border-gray-300 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
        />
      </label>

      <label className="flex flex-col gap-2 text-left">
        <span className="text-sm font-bold text-gray-700">Mensagem</span>
        <textarea
          name="message"
          placeholder="Conte um pouco sobre sua ideia, projeto ou oportunidade..."
          required
          className="min-h-40 w-full resize-y rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-950 outline-none transition-all duration-200 placeholder:text-gray-400 hover:border-gray-300 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
        />
      </label>

      <button
        ref={submitButtonRef}
        type="submit"
        className="group relative mt-1 flex w-full cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-xl bg-primary px-8 py-4 font-bold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/25 focus:outline-none focus:ring-4 focus:ring-primary/25"
      >
        <motion.span
          aria-hidden="true"
          initial={{ left: '-25%' }}
          animate={{ left: isSubmitButtonVisible ? '115%' : '-25%' }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1.15,
            delay: shouldReduceMotion ? 0 : 0.65,
            ease: 'easeInOut',
          }}
          className="pointer-events-none absolute inset-y-0 w-20 -skew-x-20 bg-linear-to-r from-transparent via-white/60 to-transparent"
        />
        <span className="relative z-10">Enviar mensagem</span>
        <LuSend className="relative z-10 text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
      </button>
    </form>
  )
}

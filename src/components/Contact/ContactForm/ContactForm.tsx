import React from 'react'

export default function ContactForm() {
  return (
    <form action="https://formspree.io/f/mvzgpwen" method="POST" className="w-full flex flex-col gap-4">
        <div className='flex flex-col lg:flex-row items-center w-full gap-4'>
            <input type="text" name="name" placeholder="Seu nome" required className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"/>
            <input type="email" name="email" placeholder="Seu e-mail" required className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"/>
        </div>
        <textarea name="message" placeholder="Sua mensagem" required  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary h-36 resize-none"></textarea>
        <button type="submit" className="w-full hover:cursor-pointer hover:brightness-90 duration-200 mx-auto justify-center bg-primary flex items-center text-white font-semibold py-4 px-12 rounded-lg">
            Enviar mensagem
        </button>
    </form>
  )
}

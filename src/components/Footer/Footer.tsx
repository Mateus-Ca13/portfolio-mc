import NameLogo from '../NameLogo'

export default function Footer() {
  return (
    <div className='bg-white shadow-2xl flex flex-col w-full py-8 justify-center items-center text-center'>
        <NameLogo animateWhenVisible compactDelay={1400} />
        <p className='py-8 text-gray-500 px-6 text-sm'>© 2026 Mateus Cavichion. Todos os direitos reservados.</p>
    </div>
  )
}

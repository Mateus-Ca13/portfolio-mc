import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

export default function MainLayout() {
  return (
    <main className='bg-gray-50 max-w-screen min-h-screen flex flex-col items-center justify-center'>
        <Header/>
        <Outlet/>
        <Footer/>
    </main>
  )
}

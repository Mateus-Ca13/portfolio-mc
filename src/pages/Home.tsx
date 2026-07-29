import Banner from '../components/Banner/Banner'
import AboutMe from '../components/AboutMe/AboutMe'
import Projects from '../components/Projects/Projects'
import ExpandImageDialog from '../components/ExpandImageDialog/ExpandImageDialog'
import Contact from '../components/Contact/Contact'
import Skills from '../components/Skills/Skills'
import Differentials from '../components/Differentials/Differentials'

export default function Home() {
  return (
    <section className='w-full'>
    <Banner/>
    <AboutMe/>
    <div className="bg-linear-to-b from-gray-50 to-gray-100">
      <Skills/>
      <Differentials/>
    </div>
    <Projects/>
    <Contact/>
      <ExpandImageDialog/>
    </section>
    
  )
}

import Banner from '../components/Banner/Banner'
import AboutMe from '../components/AboutMe/AboutMe'
import Projects from '../components/Projects/Projects'
import ToolsKnowlegde from '../components/ToolsKnowlegde/ToolsKnowlegde'
import ExpandImageDialog from '../components/ExpandImageDialog/ExpandImageDialog'
import Contact from '../components/Contact/Contact'

export default function Home() {
  return (
    <section className='w-full'>
    <Banner/>
    <AboutMe/>
    <ToolsKnowlegde/>
    <div className="h-18 lg:h-32 bg-linear-to-t to-transparent from-gray-200"></div>
    <Projects/>
    <Contact/>
      <ExpandImageDialog/>
    </section>
    
  )
}

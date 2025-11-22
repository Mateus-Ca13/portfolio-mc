import Banner from '../components/Banner/Banner'
import AboutMe from '../components/AboutMe/AboutMe'
import Projects from '../components/Projects/Projects'
import ToolsKnowlegde from '../components/ToolsKnowlegde/ToolsKnowlegde'

export default function Home() {
  return (
    <section className='w-full'>
    <Banner/>
    <AboutMe/>
    <ToolsKnowlegde/>
    <div className="h-18 lg:h-32 bg-linear-to-t to-transparent from-gray-200"></div>
    <Projects/>
        <div className='w-full'>
            
            <div className="h-96"></div>
            <div className="h-96"></div>
            <div className="h-96"></div>
        </div>
    </section>
  )
}

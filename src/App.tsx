import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import Home from "./pages/Home"
import { ScrollToHash } from "./components/ScrollToHash/ScrollToHash"

function App() {


  return (
    <BrowserRouter>
    <ScrollToHash/>
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route path="/" element={<Home/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App

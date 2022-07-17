import Home from "./components/home/Home"
import About from "./components/about/About"
import Experience from "./components/experience/Experience"
import { Routes, Route } from "react-router-dom"
import SharedNav from "./components/sharedNav/SharedNav"
import Work from "./components/work/Work"
import Contact from "./components/contact/Contact"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedNav />}>
           <Route index element={<Home />} />
           <Route path="about" element={<About />} />
           <Route path="experience" element={<Experience />} />
           <Route path="work" element={<Work />} />
           <Route path="contact" element={<Contact />} />


        </Route>

      </Routes>

    </div>
  )
}

export default App
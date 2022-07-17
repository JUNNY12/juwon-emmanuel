import { Routes, Route } from "react-router-dom"
import Experience_1 from "../../components/experience/Experience_1"

const TheRoutes = () => {
  return (
    <div>
         <Routes>
            <Route path='experience_1' element={Experience_1} />
          </Routes>
    </div>
  )
}

export default TheRoutes
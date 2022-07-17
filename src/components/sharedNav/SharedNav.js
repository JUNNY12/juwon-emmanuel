import { Outlet } from "react-router-dom"
import Nav from "../nav/Nav"
import RightSide from "../sideicons/RightSide"
import LeftIcons from "../sideicons/LeftIcons"

const SharedNav = () => {
  return (
    <div>
        <Nav />
        <RightSide />
        <LeftIcons />
        <Outlet />
    </div>
  )
}

export default SharedNav
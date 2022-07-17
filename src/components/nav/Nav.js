import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"
import {BsFillMenuButtonWideFill} from "react-icons/bs"
import {useState, useEffect} from "react"
import { useLocation } from "react-router-dom"


const Nav = () => {

    const {pathname} = useLocation()

    const [isOpen, setIsOpen] = useState(true)

    useEffect(() => {
        setIsOpen(false)
    }, [pathname])


    const toggleNav = () =>{
        setIsOpen(prevState =>!prevState )
    }

 

  return (
    <div className="mb-8">
        <nav className="flex flex-wrap justify-between items-center 
        py-4 px-8 fixed top-0 w-full text-cyan-900 bg-white
        z-10 shadow-slate-500 shadow-md"
        >
            <div className="text-xl md:text-2xl lg:text-5xl h-14 w-14 object-cover">
                <Link to={`/`}>
                    <img src={logo} alt={`my Logo`} className='h-full w-full'/>
                </Link>
            </div>

            <div className={isOpen? "block w-full md:flex md:items-center md:w-auto" 
            :"hidden w-full md:flex md:items-center md:w-auto"}>
                <ul className="md:flex md:justify-between text-center text-lg md:text-xl ">
                    <li className="mr-6 my-4 md:my-0 block">
                        <Link to={`about`}>
                            <span className="text-myTextColor mr-2">01.</span>
                            <span className="text-gray-700 hover:text-myTextColor">About</span>
                        </Link>
                    </li>
                    <li className="mr-6 my-4 md:my-0 block">
                        <Link to={`experience`}>
                            <span className="text-myTextColor mr-2">02.</span>
                            <span className="text-gray-700 hover:text-myTextColor">Experience</span>
                        </Link>
                    </li>
                    <li className="mr-6 my-4 md:my-0 block">
                        <Link to={`work`}>
                            <span className="text-myTextColor mr-2">03.</span>
                            <span className="text-gray-700 hover:text-myTextColor">Work</span>
                        </Link>
                    </li>
                    <li className="mr-6 my-4 md:my-0 block">
                        <Link to={`contact`}>
                            <span className="text-myTextColor mr-2">04.</span>
                            <span className="text-gray-700 hover:text-myTextColor">Contact</span>
                        </Link>
                    </li>
                    <li  className="p-1 px-2 border text-lg font-bold border-myTextColor rounded-3xl text-gray-700 cursor-pointer">
                        Download CV
                    </li>
                </ul>
            </div>

            <div className="block absolute right-3 top-7  md:hidden bg-gray-300 p-3 font-bold rounded-full hover:cursor-pointer" onClick={toggleNav}>
                <BsFillMenuButtonWideFill />
            </div>
        </nav>
    </div>
  )
}

export default Nav
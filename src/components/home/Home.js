import { Link } from "react-router-dom"
 





const Home = () => {
  return (
    <div className='mt-12  px-8 md:px-24 pt-28 tracking-widest leading-8'>
        <h1 className='text-2xl text-myTextColor font-bold mb-2'>Hello, My name is</h1>
        <h2 className='sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl text-gray-700 font-bold'>Juwon Emmanuel</h2>
        <h3 className='sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl text-gray-700 mb-6 font-bold'>I like building things for the web.</h3>
        <p className='sm:text-lg md:text-xl sm:max-w-xs md:max-w-sm text-gray-700 mb-8'>
          I am a frontend developer. I have a deep interest in creating good user 
          interface and providing better experience for users.
        </p>

        <div className='mb-3 '>
         <Link to={`about`}>
            <button className='border-2 p-2 px-6 font-bold rounded-3xl
              text-gray-700 outline-none border-myTextColor
              hover:
              '
            >
                More About Me
            </button>
         </Link>
        </div>

        
    </div>
  )
}

export default Home
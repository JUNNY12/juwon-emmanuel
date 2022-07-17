import picture from "../../assets/Mine.jpg"

const About = () => {
  return (
    <div className='px-8 md:px-24 h-screen pt-28'>
        <div className='flex text-xl md:text-2xl lg:4xl gap-4
         items-center justify-center py-4'>
            <div className='text-myTextColor font-bold ' >01.</div>
            <h2 className='text-white border-b-2 border-b-myTextColor pb-2 mb-6'>About</h2>
        </div>

        <div className='grid  grid-cols-1 gap-4 xmd:grid-cols-2 place-items-center text-lg
         sm:text-xl md:2xl text-gray-700
         leading-8 tracking-widest
        '>
            <div className="cover h-72 w-72 xmd:h-96 xmd:w-72  rounded-full xmd:rounded-none">
                <img src={picture} alt='Juwon akingbade' className="w-full h-full rounded-full xmd:rounded-none" />
            </div>
            
            <div>
                <p className="mb-3">
                    Hello! My name is Juwon, and I like
                     making things that are available on web.
                </p>
                <p className="mb-3">
                    I am a self taught frontend developer with keen interest
                    of creating web / web apps that are fully responsive across all
                    devices. Few Technologies I have worked with  
                    <span className="font-bold"> Javascript (ES6)</span>,
                    <span className="font-bold"> React</span>,
                    <span className="font-bold"> Boostrap</span> and 
                    <span className="font-bold"> Tailwind CSS</span>.
                </p>

                <p className="mb-3">
                    Fast-forward to today, I have worked as frontend developer in two frirms.
                    My main focus these days is broadening my knowledge on creating reusable components
                    and design systems.
                </p>

                <p>
                    Fun fact about me is that I love data science, 
                    so I am currently learning data science.
                </p>
            </div>
        
        </div>
    </div>
  )
}

export default About
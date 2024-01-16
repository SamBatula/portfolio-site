/*
COLOR DESCRIPTION:
Background Color - dark blueish [#020817]
Text Color: light greyish [#ccd6f6]

Page Layout: 
* Name & About section: Samsondeen/ About section
* Widgets (On right side): Resume, Linkedin, Github
* Experience: 
* Projects: 
*/

// typing rafce generates the skeleton functional component below
import React, {useState} from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {

    const[home, setHome] = useState(false)
    {/* click function handleClick to setNav to the opposite of its current value */}
    const handleClick = () => setHome(!home)
    
  return (
    <div name='home' className='w-full h-screen bg-primary'>
        {/* Parent Container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full '>
            <h1 className= 'text-4xl sm:text-2xl font-bold text-[#ccd6f6]'> Samsondeen Batula</h1>
            <h2 className='text-2xl sm:text-2xl font-bold text-[#ccd6f6]'> A Software Developer </h2>

            {/* About Me and on Click container w/ arrow animation using link react-scroll library */}
    {/* to add border on the about me add this code after the hover:bg code... 
    CODE: hover:border-[#355E3B] */}
            <div>
            <Link onClick = {handleClick} to="about"  smooth={true} offset={50} duration={500}>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#59606c]'>About Me
                    
                    <span className='group-hover:rotate-90 duration-200'>
                        
                        <HiArrowNarrowRight className='ml-3'/> 
                    </span>
                </button>
            </Link>
                
            </div>


        </div>
    </div>
  )
}

export default Home
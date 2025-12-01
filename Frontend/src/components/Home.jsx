import React from 'react'
import { NavLink } from 'react-router'

const Home = () => {
    return (
        <>
            
            {/* Navbar */}
            <nav className='bg-gray-900 w-full px-15 py-2 flex justify-between items-center'>
                <img src="http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/logo1.png" alt="Logo" />

                <div>
                    <NavLink to='/' className="text-white font-semibold px-3 py-2 rounded ease-in-out duration-800 hover:bg-gray-700 hover:text-blue-500">Movies</NavLink>
                </div>
            </nav>

        </>
    )
}

export default Home
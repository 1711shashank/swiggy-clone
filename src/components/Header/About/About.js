import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h1>About Us Page</h1>
            <Outlet />
            <Link to="profile">
                <button className='px-2 py-1 bg-gray-400 rounded' > Go to Profile</button>
            </Link>

        </div>
    )
}

export default About
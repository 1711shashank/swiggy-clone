import React from 'react'
import { Outlet } from 'react-router-dom'
import Profile from './Profile';
import ProfileClass from './ProfileClass';

const About = () => {
  return (
    <div>
        <h1>About</h1>
        <Profile name="Shashank"/>
        <ProfileClass name="Shashank"/>
        {/* <Outlet/> */}
    </div>
  )
}

export default About
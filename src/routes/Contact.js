import React from 'react'
import NavBar from "../components/Navbar"
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
      <NavBar/>
      <HeroImg2 heading = "CONTACTS" text = "Find the details to connect with me"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact
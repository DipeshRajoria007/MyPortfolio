import React from 'react'
import {BsLinkedin} from'react-icons/bs'
import {FaGithub} from'react-icons/fa'
import {FaBloggerB} from'react-icons/fa'
import './Header.css'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/dipeshrajoria/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/DipeshRajoria007" target="_blank"><FaGithub/></a>
        <a href="https://creativemind69.blogspot.com/" target="_blank"><FaBloggerB/></a>
    </div>
  )
}

export default HeaderSocials
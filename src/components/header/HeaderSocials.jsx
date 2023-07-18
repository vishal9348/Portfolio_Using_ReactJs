import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FiGithub} from 'react-icons/fi'
import {BsDribbble} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank"><FiGithub/></a>
        <a href="https://dribble.com" target="_blank"><BsDribbble/></a>
    </div>
  )
}

export default HeaderSocials
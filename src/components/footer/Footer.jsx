import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>VISHAL</a>

      <ul className="permalinks">
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='exprience'>Exprience</a></li>
        <li><a href='services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testmonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://facebook.com'><FaFacebook/></a>
        <a href='https://instagram.com'><BsInstagram/></a>
        <a href='https://twitter.com'><AiFillTwitterCircle/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Vishal. All right reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
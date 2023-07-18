import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaFacebookMessenger} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me!</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>abc@gmail.com</h5>
            <a href="mailto:anantbeta88@gmail.com" target='_blank'>Send a Message!</a>
          </article>

          <article className="contact__option">
            <FaFacebookMessenger className='contact__option-icon'/>
            <h4>Messanger</h4>
            <h5>BigOCode</h5>
            <a href="https://m.me/vishal" target='_blank'>Send a Message!</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>7492096406</h5>
            <a href="https://api.whatsapp.com/send?phone+917492096406" target='_blank'>Send a Message!</a>
          </article>
        </div>



        <form action="">
          <input type="text" name="name" placeholder="Your Full Name" required />

          <input type="email" name="email" placeholder="Enter your mail" required />

          <textarea name="message" rows="7" placeholder="Your message" required></textarea>

          <button type="submit" className='btn btn-primary'>Send Message!</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
import React from 'react'
import './exprience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Exprience = () => {
  return (
    <section id="exprience">
      <h5>What Skills I have</h5>
      <h2>My Exprience</h2>

      <div className="conatiner exprience__container">
        <div className="exprience__frontend">
          <h3>Frontend Development</h3>
          <div className="exprience__content">
            <article className="exprience__details">
              <BsPatchCheckFill className="exprience__details-icon"/>
             <div>
             <h4>HTML</h4>
              <small className='text-light'>Exprienced</small>
             </div>
            </article>

            <article className="exprience__details">
              <BsPatchCheckFill className="exprience__details-icon"/>
             <div>
             <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
             </div>
            </article>

            <article className="exprience__details">
              <BsPatchCheckFill className="exprience__details-icon"/>
             <div>
             <h4>BOOTSTRAP</h4>
              <small className='text-light'>Exprienced</small>
             </div>
            </article>

            <article className="exprience__details">
              <BsPatchCheckFill className="exprience__details-icon"/>
              <div>
              <h4>JAVA SCRIPT</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="exprience__details">
              <BsPatchCheckFill className="exprience__details-icon"/>
             <div>
             <h4>REACT</h4>
              <small className='text-light'>Beginer</small>
             </div>
            </article>
          </div>
        </div>

        <div className="exprience__backend">
        <h3>Backend Development</h3>
          <div className="exprience__content">
            <article className="exprience__details">
              <BsPatchCheckFill className="exprience__details-icon"/>
              <div>
              <h4>Springboot</h4>
              <small className='text-light'>Beginer</small>
              </div>
            </article>

            <article className="exprience__details">
              <BsPatchCheckFill className="exprience__details-icon"/>
              <div>
              <h4>Servlet & JSP</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="exprience__details">
              <BsPatchCheckFill className="exprience__details-icon"/>
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Exprienced</small>
              </div>
            </article>

            <article className="exprience__details">
              <BsPatchCheckFill className="exprience__details-icon"/>
              <div>
              <h4>DJANGO</h4>
              <small className='text-light'>Beginer</small>
              </div>
            </article>

            <article className="exprience__details">
              <BsPatchCheckFill className="exprience__details-icon"/>
              <div>
              <h4>NODE JS</h4>
              <small className='text-light'>Beginer</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Exprience
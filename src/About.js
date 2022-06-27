import React from 'react';
import "./About.css";
import aboutImg from './img/about.jpg';

export default function About() {
    // UP TO TOP BTN FUNCTIONALITY
    window.addEventListener("scroll", function () {
        const upToTop = document.querySelector("a.bottom__to__top");
        upToTop.classList.toggle("active", this.window.scrollY > 0)
    });

  return (
    <div className='about component__space' id='About'>
        <div className='container'>
            <div className='row'>
                <div className='col__2'>
                    <img src={aboutImg} alt='' className='about__img'></img>
                </div>
                <div className='col__2'>
                    <h1 className='about__heading'>About Me</h1>
                    <div className='about__meta'>
                        <p className='about__text p__color'>
                            There are many variations of Lorem Ipsum available.But 
                            the majority have suffered in some form.
                        </p>
                        <div className='about__button d__flex align__items__center'>
                            <a href='#'><button className='about btn pointer'>Download CV</button></a>
                            <a href='#'><button className='about btn pointer'>Hire Me</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* UP TO TOP BTN */}

        <div className='up__to__top__btn'>
            <a href='#' className='bottom__to__top'></a>
        </div>
    </div>
  )
}

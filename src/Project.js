import React from 'react';
import "./Project.css";
import Project1 from "./img/portfolio-1.jpg";

export default function Project() {
  return (
    <div className='project component__space' id='Portfolio'>
        <div className='heading'>
            <h1 className='heading'>My Latest Projects</h1>
            <p className='heading p__color'>There are several variations</p>
            <p className='heading p__color'>There are several variations</p>
        </div>
        <div className='container'>
            <div className='row'>

                <div className='col__3'>
                    <div className='project__box cursor relative'>
                        <div className='project__box__img pointer relative'>
                            <div className='project__img__box '>
                                <img src={Project1} alt="" className='project__img'/>
                            </div>
                            <div className='mask__effect'></div>
                        </div>
                        <div className='project__meta absolute'>
                            <h5 className='project__text'>Development</h5>
                            <h4 className='project__text'>Getting  tickets to the big show</h4>
                            <a href='#Home' className='project__btn'>View Details</a>
                        </div>
                    </div>
                </div>

                <div className='col__3'>
                    <div className='project__box cursor relative'>
                        <div className='project__box__img pointer relative'>
                            <div className='project__img__box '>
                                <img src={Project1} alt="" className='project__img'/>
                            </div>
                            <div className='mask__effect'></div>
                        </div>
                        <div className='project__meta absolute'>
                            <h5 className='project__text'>Development</h5>
                            <h4 className='project__text'>Getting  tickets to the big show</h4>
                            <a href='#Home' className='project__btn'>View Details</a>
                        </div>
                    </div>
                </div>

                <div className='col__3'>
                    <div className='project__box cursor relative'>
                        <div className='project__box__img pointer relative'>
                            <div className='project__img__box '>
                                <img src={Project1} alt="" className='project__img'/>
                            </div>
                            <div className='mask__effect'></div>
                        </div>
                        <div className='project__meta absolute'>
                            <h5 className='project__text'>Development</h5>
                            <h4 className='project__text'>Getting  tickets to the big show</h4>
                            <a href='#Home' className='project__btn'>View Details</a>
                        </div>
                    </div>
                </div>

                <div className='col__3'>
                    <div className='project__box cursor relative'>
                        <div className='project__box__img pointer relative'>
                            <div className='project__img__box '>
                                <img src={Project1} alt="" className='project__img'/>
                            </div>
                            <div className='mask__effect'></div>
                        </div>
                        <div className='project__meta absolute'>
                            <h5 className='project__text'>Development</h5>
                            <h4 className='project__text'>Getting  tickets to the big show</h4>
                            <a href='#Home' className='project__btn'>View Details</a>
                        </div>
                    </div>
                </div>

                <div className='col__3'>
                    <div className='project__box cursor relative'>
                        <div className='project__box__img pointer relative'>
                            <div className='project__img__box '>
                                <img src={Project1} alt="" className='project__img'/>
                            </div>
                            <div className='mask__effect'></div>
                        </div>
                        <div className='project__meta absolute'>
                            <h5 className='project__text'>Development</h5>
                            <h4 className='project__text'>Getting  tickets to the big show</h4>
                            <a href='#Home' className='project__btn'>View Details</a>
                        </div>
                    </div>
                </div>

                <div className='col__3'>
                    <div className='project__box cursor relative'>
                        <div className='project__box__img pointer relative'>
                            <div className='project__img__box '>
                                <img src={Project1} alt="" className='project__img'/>
                            </div>
                            <div className='mask__effect'></div>
                        </div>
                        <div className='project__meta absolute'>
                            <h5 className='project__text'>Development</h5>
                            <h4 className='project__text'>Getting  tickets to the big show</h4>
                            <a href='#Home' className='project__btn'>View Details</a>
                        </div>
                    </div>
                </div>

                <div className='view__more__btn d__flex align__items__center justify__content__center pxy__30'>
                    <button className='view__more pointer btn'>View More</button>
                </div>
            </div>
        </div>
    </div>
  )
}

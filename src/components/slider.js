import right from '../img/slider-right.svg'
import left from '../img/slider-left.svg'
import portfolio0 from '../img/portfolio0.png'
import Carousel from 'react-elastic-carousel'
import React from "react";

function Slider() {
    return (
        <div className="slider">
            <h2>Мое портфолио</h2>

            <Carousel itemsToShow={1}>
                <div>
                    <img className="" src={portfolio0} alt=""/>
                </div>
                <div>
                    <img className="" src={portfolio0} alt=""/>
                </div>
                <div>
                    <img className="" src={portfolio0} alt=""/>
                </div>
                <div>
                    <img className="" src={portfolio0} alt=""/>
                </div>
                <div>
                    <img className="" src={portfolio0} alt=""/>
                </div>

            </Carousel>
        </div>
    )
}

document.addEventListener("DOMContentLoaded", function (event) {
    // let prev = document.querySelector('#left')
    // let next = document.querySelector('#right')
    //
    // let slidePrev = document.querySelector('.slide-prev')
    // let slideActive = document.querySelector('.slide-active')
    // let slideNext = document.querySelector('.slide-next')
    // let slideHiddenNext = document.querySelector('.slide-hidden__next')
    // let slideHidden = document.querySelector('.slide-hidden')
    // let slideHiddenPrev = document.querySelector('.slide-hidden__prev')
    //
    //
    // prev.onclick = function(){
    //     slideActive.className = 'slide-prev'
    //     slidePrev.className = 'slide-hidden__prev'
    //     slideNext.className = 'slide-active'
    //     slideHiddenNext.className = 'slide-next'
    //     slideHidden.className = 'slide-hidden__next'
    //     slideHiddenPrev.className = 'slide-hidden'
    // }
    //
    // next.onclick = function(){
    //
    // }
    //
    //


},false);




export default Slider
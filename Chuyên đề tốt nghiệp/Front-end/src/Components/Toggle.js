import React, { useState } from 'react'

export default function Toggle() {
    function handleChange() {
        let domToggle = document.querySelector('.toggle')
        let domHTML = document.querySelector('html')
        let domCarouselInner = document.querySelector('.carousel-inner');
        domToggle.classList.toggle('active')
        domHTML.classList.toggle('active')

        domCarouselInner.classList.toggle('active')


    }
    return (
        <div
            className='toggle'
            onClick={() => handleChange()}
        >
        </div>
    )
}

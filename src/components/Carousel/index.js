import React, { useState, useRef, useEffect } from "react";
import { IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";

// Projects small images
import blogrProjectImageSmall from '../../assets/images/blogr-project-small.png'
import filmariaImageSmall from '../../assets/images/filmaria-small.png'
import hangmanImageSmall from '../../assets/images/hangman-small.png'
import introSectionImageSmall from '../../assets/images/introSection-small.png'
import sistemaChamadosImageSmall from '../../assets/images/sistemaChamados-small.png'
import toDoListImageSmall from '../../assets/images/toDoList-small.png'

import './carousel.sass'
export default function Carousel({ updateState }) {
    const itemsRef = useRef([])
    const sliderRef = useRef(null)

    const [active, setActive] = useState(3)
    const [centeredElement, setCenteredElement] = useState(null)

    const items = [blogrProjectImageSmall, filmariaImageSmall, hangmanImageSmall, introSectionImageSmall, sistemaChamadosImageSmall, toDoListImageSmall]

    useEffect(() => {
        function loadShow() {
            let stt = 0

            itemsRef.current[active].style.transform = `none`
            itemsRef.current[active].style.zIndex = 3
            itemsRef.current[active].style.filter = 'none'
            itemsRef.current[active].style.opacity = 1

            for (let i = active + 1; i < itemsRef.current.length; i++) {
                stt++
                itemsRef.current[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`
                itemsRef.current[i].style.zIndex = -stt + 2
                itemsRef.current[i].style.filter = 'blur(2px) grayscale(100%)'
                itemsRef.current[i].style.opacity = stt > 2 ? 0 : .6
            }

            stt = 0

            for (let i = active - 1; i >= 0; i--) {
                stt++
                itemsRef.current[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`
                itemsRef.current[i].style.zIndex = -stt + 2
                itemsRef.current[i].style.filter = 'blur(2px) grayscale(100%)'
                itemsRef.current[i].style.opacity = stt > 2 ? 0 : .6
            }

            itemsRef.current.forEach((item) => {
                if (item.style.transform === 'none') {
                    setCenteredElement(item)
                }
            })

        }

        loadShow();
    }, [active]);

    useEffect(() => {
        if (centeredElement) {

            itemsRef.current.forEach((item) => {
                if (item !== centeredElement) {
                    item.classList.remove('active')
                }
            })

            updateState(centeredElement)
            centeredElement.classList.add('active')
        }
    }, [centeredElement, updateState]);


    function handleNext() {
        setActive(active + 1 < items.length ? active + 1 : active)
    }

    function handlePrev() {
        setActive(active - 1 >= 0 ? active - 1 : active)
    }

    return (
        <div className="container-carousel">
            <div className='slider' ref={sliderRef}>
                {items.map((src, i) => {
                    return <div className='item' key={'item' + i} id={i} ref={(el) => { itemsRef.current[i] = el }}>
                        <img src={src} alt='project' draggable='false' />
                    </div>
                })}

                <button id='prev' className='icon carousel' onClick={() => { handlePrev() }}><IoArrowBackCircle /></button>
                <button id='next' className='icon carousel' onClick={() => { handleNext() }}><IoArrowForwardCircle /></button>
            </div>
        </div>
    );
}


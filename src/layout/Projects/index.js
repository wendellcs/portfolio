import { useState } from "react";

import { IoLogoGithub } from "react-icons/io5";

import Carousel from "../../components/Carousel";
import Highlight from "../../components/Highlight";

import './projects.sass'
export default function Projects() {

    const [sharedState, setSharedState] = useState(null)

    function updateState(state) {
        if (state) {
            setSharedState(state)
        }
    }

    return (
        <section id='projects'>
            <h2 className='projects-title'>Meus projetos</h2>
            <h3 className='projects-subtitle'>Estes são os meus melhores projetos</h3>

            <div>
                <Highlight sharedState={sharedState} />
                <Carousel updateState={updateState} />
            </div>

            <div className='cta'>
                <p>Eu tenho vários outros projetos legais.</p>
                <p>Dê uma olhada neles</p>

                <a className='btn cta' rel='noreferrer noopener' target='_blank' href='https://github.com/wendellcs' ><IoLogoGithub className='icon static' /></a>
            </div>
        </section >
    )
}
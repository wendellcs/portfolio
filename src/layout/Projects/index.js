import { useState } from "react";

import { IoLogoGithub } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";

import Carousel from "../../components/Carousel";
import Highlight from "../../components/Highlight";

import './projects.sass'
import './modal.sass'
export default function Projects() {

    const [sharedState, setSharedState] = useState(null)
    const [openedModal, setOpenedModal] = useState(false)

    function updateState(state) {
        if (state) {
            setSharedState(state)
        }
    }

    function handleModal() {
        setOpenedModal(!openedModal)
    }

    return (
        <section id='projects'>
            <h2 className='projects-title'>Meus projetos</h2>
            <h3 className='projects-subtitle'>Estes são os meus melhores projetos</h3>

            <div>
                <Highlight sharedState={sharedState} handleModal={handleModal} />
                <Carousel updateState={updateState} />
            </div>

            <div className='cta'>
                <p>Eu tenho vários outros projetos legais.</p>
                <p>Dê uma olhada neles</p>

                <a className='btn cta' rel='noreferrer noopener' target='_blank' href='https://github.com/wendellcs' ><IoLogoGithub className='icon static' /></a>
            </div>

            {<div className={openedModal ? 'container-modal' : 'container-modal hidden'}>
                <div className='modal-content'>
                    <IoIosCloseCircle className='icon close' onClick={() => { handleModal() }} />
                </div>
            </div>}
        </section >
    )
}
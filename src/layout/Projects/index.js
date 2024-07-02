import { useEffect, useState } from "react";

import { IoLogoGithub } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";

import Carousel from "../../components/Carousel";
import Highlight from "../../components/Highlight";

import './projects.sass'
import './modal.sass'
import { projectsData } from './data'

export default function Projects() {

    const [sharedState, setSharedState] = useState(null)
    const [openedModal, setOpenedModal] = useState(false)

    const [projectInfo, setProjectInfo] = useState(null)

    useEffect(() => {
        if (sharedState && projectsData[sharedState.id]) {
            setProjectInfo(projectsData[sharedState.id])
        }
    }, [sharedState])

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
                <Highlight projectInfo={projectInfo} handleModal={handleModal} />
                <Carousel updateState={updateState} />
            </div>

            <div className='cta'>
                <p>Eu tenho vários outros projetos legais.</p>
                <p>Dê uma olhada neles</p>

                <a className='btn cta' rel='noreferrer noopener' target='_blank' href='https://github.com/wendellcs' ><IoLogoGithub className='icon static' /></a>
            </div>

            {projectInfo &&
                <div className={openedModal ? 'container-modal' : 'container-modal hidden'}>
                    <div className='modal-content'>
                        <IoIosCloseCircle className='icon close' onClick={() => { handleModal() }} />

                        <h2 className='modal-title'>{projectInfo.name}</h2>

                        <div className='modal-box'>
                            <p>Para ir ao Live Site clique aqui</p>
                            <a className='btn cta-modal' rel='noreferrer noopener' target='_blank' href={projectInfo.liveSiteUrl} > <CgWebsite className='icon static' /></a>

                            <p>Caso queira ver o repositório do projeto <br /> clique aqui :D</p>
                            <a className='btn cta-modal' rel='noreferrer noopener' target='_blank' href={projectInfo.gitHubUrl} ><IoLogoGithub className='icon static' /></a>
                        </div>
                    </div>
                </div>}
        </section >
    )
}
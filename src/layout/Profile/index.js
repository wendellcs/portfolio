import { RiGithubFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";
import cv from '../../assets/doc/CV_WendellCSilva.pdf'

import './profile.sass'
import profilePic from '../../assets/images/profile.jpeg'
export default function Profile() {
    return (
        <section id='profile'>
            <div className='profile-image-box'>
                <img className='profile-image' src={profilePic} alt='Wendell C Silva'/>
            </div>
            <div className='profile-text'>
                <p>Olá, meu nome é Wendell e sou <span className='span-highlight'>Desenvolvedor Front-end.</span></p>
            </div>

            <div className="profile-icons">
                <a href='https://www.linkedin.com/in/wendellcsilva/' rel='noreferrer noopener' target='_blank'>
                    <FaLinkedin className='icon' />
                </a>
                <a href='https://github.com/wendellcs' rel='noreferrer noopener' target='_blank'>
                    <RiGithubFill className='icon' />
                </a>
                <a download='CV-WendellCSilva.pdf' href={cv} type='application/pdf'>
                    <TiDocumentText className='icon' />
                </a>
            </div>
        </section>
    )
}
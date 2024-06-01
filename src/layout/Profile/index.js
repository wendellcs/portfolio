import { RiGithubFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";

import './profile.sass'
export default function Profile() {
    return (
        <section id='profile'>
            <div className='profile-image-box'></div>
            <div className='profile-text'>
                <p>Olá, meu nome é Wendell e sou <span className='span-highlight'>Desenvolvedor Front-end.</span></p>
            </div>

            <div className="profile-icons">
                <RiGithubFill className='icon' />
                <FaLinkedin className='icon' />
                <TiDocumentText className='icon' />
            </div>
        </section>
    )
}
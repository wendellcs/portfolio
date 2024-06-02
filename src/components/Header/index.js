import { RiGithubFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";

import './header.sass'
export default function Header() {
    return (
        <header className="container-header">
            <div className="container-header-icons">
                <a href='https://www.linkedin.com/in/wendellcsilva/' rel='noreferrer noopener' target='_blank'>
                    <FaLinkedin className='icon' />
                </a>
                <a href='https://github.com/wendellcs' rel='noreferrer noopener' target='_blank'>
                    <RiGithubFill className='icon' />
                </a>
            </div>
            <nav className="container-header-nav">
                <ul>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projetos</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}
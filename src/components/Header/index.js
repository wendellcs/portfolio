import { RiGithubFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaSun, FaRegMoon } from "react-icons/fa";

import './header.sass'
export default function Header() {
    return (
        <header className="container-header">
            <FaRegMoon className='icon' style={{ display: 'none' }} />
            <FaSun className='icon' style={{ display: 'none' }} />
            <div className="container-header-icons">
                <FaLinkedin className='icon' />
                <RiGithubFill className='icon' />
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
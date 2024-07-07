import { RiGithubFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";

import './header.sass'
import { useState } from "react";
export default function Header() {
    const [openedMenu, setOpenedMenu] = useState(false)

    function handleOpenMenu() {
        setOpenedMenu(!openedMenu)
    }


    return (

        <header className={openedMenu ? 'container-header active' : 'container-header'}>
            <div className="container-header-icons">
                <a href='https://www.linkedin.com/in/wendellcsilva/' rel='noreferrer noopener' target='_blank'>
                    <FaLinkedin className='icon' />
                </a>
                <a href='https://github.com/wendellcs' rel='noreferrer noopener' target='_blank'>
                    <RiGithubFill className='icon' />
                </a>
            </div>

            <nav className={openedMenu ? 'container-header-nav active' : 'container-header-nav '}>
                <ul className='links'>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projetos</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>


                <div className='menu-button' onClick={() => { handleOpenMenu() }}>
                    <div className='menu-icon'></div>
                </div>
            </nav>
        </header>

    )
}
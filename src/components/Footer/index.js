import { RiGithubFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";

import './footer.sass'
export default function Footer() {
    return (
        <footer className="container-footer">
            <div className="container-footer-icons">
                <a href='https://www.linkedin.com/in/wendellcsilva/' rel='noreferrer noopener' target='_blank'>
                    <FaLinkedin className='icon' />
                </a>
                <a href='https://github.com/wendellcs' rel='noreferrer noopener' target='_blank'>
                    <RiGithubFill className='icon' />
                </a>
            </div>
        </footer>
    )
}
import { RiGithubFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";

import './footer.sass'
export default function Footer() {
    return (
        <footer className="container-footer">
            <div className="container-footer-icons">
                <FaLinkedin className='icon' />
                <RiGithubFill className='icon' />
            </div>
        </footer>
    )
}
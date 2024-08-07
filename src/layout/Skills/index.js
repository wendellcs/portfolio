import { RiGithubFill } from "react-icons/ri";
import { FaHtml5, FaCss3Alt, FaReact, FaSass, FaFigma, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

import './skills.sass'
export default function Skills() {
    return (
        <section id='skills'>
            <h2 className='skills-title'>Minhas skills</h2>

            <div className='skills-container'>
                <div className='skills-container-frontEnd'>
                    <h3 className='skills-box-title'>
                        Front-end
                    </h3>

                    <div className='skills-container-frontEnd-techs'>
                        <FaHtml5 className='icon html' />
                        <FaCss3Alt className='icon css' />
                        <IoLogoJavascript className='icon javascript' />
                        <FaReact className='icon react' />
                        <FaSass className='icon sass' />
                    </div>
                </div>

                <div className='skills-container-languages'>
                    <h3 className='skills-box-title'>
                        Idiomas
                    </h3>

                    <div className='skills-container-languages-language'>
                        <p>Inglês <span className='span-highlight-language'>( B2 )</span></p>
                        <p>Português <span className='span-highlight-language'>( nativo )</span></p>
                    </div>
                </div>

                <div className='skills-container-tools'>
                    <h3 className='skills-box-title'>
                        Tools
                    </h3>

                    <div className='skills-container-tools-tool'>
                        <RiGithubFill className='icon github' />
                        <FaGitAlt className='icon git' />
                        <FaFigma className='icon figma' />
                    </div>
                </div>
            </div>
        </section>
    )
}
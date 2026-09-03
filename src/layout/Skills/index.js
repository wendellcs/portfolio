import { RiGithubFill } from "react-icons/ri";
import { FaHtml5, FaCss3Alt, FaReact, FaSass, FaFigma, FaGitAlt, FaPython } from "react-icons/fa";
import { SiTypescript, SiMongodb, SiFastapi } from "react-icons/si";
import { RiTailwindCssFill, RiSupabaseFill  } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";

import './skills.sass'
export default function Skills() {
    return (
        <section id='skills'>
            <h2 className='skills-title'>Minhas skills</h2>

            <div className='skills-container'>
                <div className='skills-container-frontEnd'>
                    <h3 className='skills-box-title'>
                        Techs
                    </h3>

                    <div className='skills-container-frontEnd-techs'>
                        <FaReact className='icon react' />
                        <IoLogoJavascript className='icon javascript' />
                        <SiTypescript className="icon typescript"/>
                        <FaPython className='icon python' />
                        <SiFastapi className='icon fastapi' />
                        <FaHtml5 className='icon html' />
                        <FaCss3Alt className='icon css' />
                        <RiTailwindCssFill className='icon tailwind' />
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
                        <SiMongodb className='icon mongo'/>
                        <RiSupabaseFill className='icon supabase'/>
                    </div>
                </div>
            </div>
        </section>
    )
}
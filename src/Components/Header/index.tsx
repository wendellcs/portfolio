import { useState } from "react"
import clsx from "clsx"
import { Github, Linkedin } from "../Icons"

export default function Header() {
    const [activeLink, setActiveLink] = useState<string>('about')

    return (
        <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300 ">
            <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <a href="#top" className="font-mono text-sm">
                    <span className="text-primary">&lt;</span>
                    <span className="font-bold text-transparent bg-clip-text bg-gradient-text animate-gradient-text bg-size[200%_auto]">wendell</span>
                    <span className="text-primary"> /&gt;</span>
                </a>
                <div className="flex items-center gap-1">
                    <a href="#about" onClick={() => setActiveLink('about')}
                        className={clsx(
                            "header-link",
                            { 'active text-primary': activeLink === 'about' }
                        )}>Sobre</a>

                    <a href="#skills" onClick={() => setActiveLink('skills')}
                        className={clsx(
                            "header-link",
                            { 'active text-primary': activeLink === 'skills' }
                        )}>Skills</a>

                    <a href="#projects" onClick={() => setActiveLink('projects')} className={clsx(
                        "header-link",
                        { 'active text-primary': activeLink === 'projects' }
                    )}>Projetos</a>

                    <a href="#contact" onClick={() => setActiveLink('contact')} className={clsx(
                        "header-link",
                        { 'active text-primary': activeLink === 'contact' }
                    )}>Contato</a>
                </div>

                <div className="hidden md:flex items-center gap-3">
                    <Github size={"18"}/>
                    <Linkedin size={"18"}/>
                </div>
            </nav>
        </header>
    )
}
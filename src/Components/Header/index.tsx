import { useEffect, useState } from "react"
import clsx from "clsx"

export default function Header() {
    const [activeLink, setActiveLink] = useState<string>('about')

    useEffect(() => {
        console.log(activeLink)
        return () => { }
    }, [activeLink])

    return (
        <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300 ">
            <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <a href="#top" className="font-mono text-sm tracking-tight">
                    <span className="text-primary">&lt;</span>
                    <span className="font-bold text-transparent bg-clip-text bg-gradient-text animate-gradient-text bg-[length:200%_auto]">wendell</span>
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
                    <a href="https://github.com/wendellcs" target="_blank" rel="noreferrer" className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-card transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github size-4" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                    </a>

                    <a href="https://github.com/wendellcs" target="_blank" rel="noreferrer" className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-card transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin size-4" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                </div>
            </nav>
        </header>
    )
}
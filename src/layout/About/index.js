import { TiDocumentText } from "react-icons/ti";
import cv from '../../assets/doc/CV-Wendell_C_Silva.docx.pdf'

import './about.sass'
export default function About() {
    return (
        <section id='about'>
            <h1 className='about-title'>Wendell de Carvalho Silva</h1>
            <h2 className='about-subtitle'>
                Desenvolvedor Full-stack
            </h2>

            <p className='about-text'>
                Busco sempre aperfeiçoar minhas habilidades, com o objetivo de elevar
                tanto o nível quanto a qualidade dos meus projetos.
            </p>
            <p className='about-text'>
                Interessado em <span className='span-highlight'>desenvolvimento web</span>, com experiência em 
                <span className='span-highlight'> front-end</span> e <span className='span-highlight'>back-end</span>. 
                Atualmente curso <span className='span-highlight'>Ciência da Computação</span> e desenvolvo projetos 
                full-stack para aprimorar minhas habilidades e criar aplicações eficientes e intuitivas.
            </p>

            <div className='about-cta'>
                <p className='about-cta-text'>Clique aqui para ver meu CV</p>

                <a className='btn cta' download='CV-WendellCSilva.pdf' href={cv} type='application/pdf'>
                    <TiDocumentText className='icon static' />
                </a>
            </div>
        </section>
    )
}
import { TiDocumentText } from "react-icons/ti";
import cv from '../../assets/doc/wendell_carvalho_silva-frontend_developer_pt_br.pdf'

import './about.sass'
export default function About() {
    return (
        <section id='about'>
            <h1 className='about-title'>Wendell de Carvalho Silva</h1>
            <h2 className='about-subtitle'>
                Desenvolvedor Full-stack com foco em Frontend
            </h2>

            <p className='about-text'>
                Busco sempre aperfeiçoar minhas habilidades, com o objetivo de elevar
                tanto o nível quanto a qualidade dos meus projetos.
            </p>
            <p className='about-text'>
                Interessado em <span className='span-highlight'>desenvolvimento web</span>, com experiência em 
                <span className='span-highlight'> front-end</span> e <span className='span-highlight'>back-end</span>. 
                Formado em <span className='span-highlight'>Ciência da Computação</span>, desenvolvo projetos 
                full-stack para aprimorar minhas habilidades, criando aplicações eficientes e intuitivas.
            </p>

            <div className='about-cta'>
                <p className='about-cta-text'>Clique aqui para ver meu currículo</p>

                <a className="btn cta" download='Wendell_Silva_Frontend_Developer_CV.docx' href={cv} type='application/vnd.openxmlformats-officedocument.wordprocessingml.document'>
                    <TiDocumentText className='icon static' />
                </a>
            </div>
        </section>
    )
}
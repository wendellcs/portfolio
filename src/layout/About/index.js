import { TiDocumentText } from "react-icons/ti";
import cv from '../../assets/doc/CV_WendellCSilva.pdf'

import './about.sass'
export default function About() {
    return (
        <section id='about'>
            <h1 className='about-title'>Wendell de Carvalho Silva</h1>
            <h2 className='about-subtitle'>
                Desenvolvedor Front-end
            </h2>

            <p className='about-text'>
                Busco sempre aperfeiçoar minhas habilidades, com o objetivo de elevar
                tanto o nível quanto a qualidade dos meus projetos.
            </p>
            <p className='about-text'>
                Meu primeiro contato com
                <span className='span-highlight'> desenvolvimento web </span>foi há cerca de 1 ano e 8 meses foi quando
                eu tive um grande interesse pela criação de páginas web. Desde então, tenho
                buscado conhecimento na área e atualmente estou cursando
                <span className='span-highlight'> Ciência da Computação </span> e
                desenvolvendo diversos projetos para aprimorar minhas habilidades.
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
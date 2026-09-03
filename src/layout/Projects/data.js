// Icons
import { FaHtml5, FaCss3Alt, FaReact, FaSass, FaPython } from "react-icons/fa";
import { SiFastapi, SiMongodb, SiTypescript } from "react-icons/si";
import { RiTailwindCssFill, RiSupabaseFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
// import { RiNodejsLine } from "react-icons/ri";

// Images
import blogrProjectImage from '../../assets/images/blogr-project-big.png'
import filmariaImage from '../../assets/images/filmaria-big.png'
import hangmanImage from '../../assets/images/hangman-big.png'
import comprafacilby from '../../assets/images/compra-facilby-big.png'
import codeJourney from '../../assets/images/code-journey-big.png'
// import sistemaChamadosImage from '../../assets/images/sistemaChamados-big.png'
// import toDoListImage from '../../assets/images/toDoList-big.png'
// import chatbotImage from '../../assets/images/chatbot-big.png'

// Projects database
export const projectsData = [{
    name: 'Blogr Landing Page',
    image: blogrProjectImage,
    liveSiteUrl: 'https://wendellcs.github.io/blog-landing-page/',
    gitHubUrl: 'https://github.com/wendellcs/blog-landing-page',
    techs: [FaHtml5, FaCss3Alt, IoLogoJavascript]
},
{
    name: 'Filmaria',
    image: filmariaImage,
    liveSiteUrl: 'https://filmaria-nu.vercel.app',
    gitHubUrl: 'https://github.com/wendellcs/filmaria',
    techs: [FaReact, FaHtml5, FaCss3Alt, IoLogoJavascript]
},
{
    name: 'Hangman',
    image: hangmanImage,
    liveSiteUrl: 'https://wendellcs.github.io/hangman/',
    gitHubUrl: 'https://github.com/wendellcs/hangman',
    techs: [FaHtml5, FaCss3Alt, IoLogoJavascript, FaSass]
}, {
    name: 'Code Journey',
    image: codeJourney,
    liveSiteUrl: 'https://code-journey-liard.vercel.app',
    gitHubUrl: 'https://github.com/wendellcs/Code-Journey',
    techs: [FaReact, RiTailwindCssFill, SiTypescript, FaPython, SiFastapi, RiSupabaseFill]
},
{
    name: 'Compra Fácil By',
    image: comprafacilby,
    liveSiteUrl: 'https://www.comprafacilby.com.br',
    gitHubUrl: 'https://github.com/wendellcs/virtual-store',
    techs: [FaReact, FaSass, IoLogoJavascript, FaPython, SiFastapi, SiMongodb]
}
]

// Icons
import { FaHtml5, FaCss3Alt, FaReact, FaSass, FaPython } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiFastapi } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNodejsLine } from "react-icons/ri";

// Images
import blogrProjectImage from '../../assets/images/blogr-project-big.png'
import filmariaImage from '../../assets/images/filmaria-big.png'
import hangmanImage from '../../assets/images/hangman-big.png'
import comprafacilby from '../../assets/images/compra-facilby-big.png'
import sistemaChamadosImage from '../../assets/images/sistemaChamados-big.png'
import toDoListImage from '../../assets/images/toDoList-big.png'
import chatbotImage from '../../assets/images/chatbot-big.png'

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
    name: 'Compra Fácil By',
    image: comprafacilby,
    liveSiteUrl: 'https://www.comprafacilby.com.br',
    gitHubUrl: 'https://github.com/wendellcs/virtual-store',
    techs: [FaReact, FaSass , IoLogoJavascript, FaPython, SiFastapi, DiMongodb]
},
{
    name: 'Hangman',
    image: hangmanImage,
    liveSiteUrl: 'https://wendellcs.github.io/hangman/',
    gitHubUrl: 'https://github.com/wendellcs/hangman',
    techs: [FaHtml5, FaCss3Alt, IoLogoJavascript, FaSass]
},
// {
//     name: 'Intro Section',
//     image: introSectionImage,
//     liveSiteUrl: 'https://wendellcs.github.io/Projects/intro-section-with-dropdown-navigation/',
//     gitHubUrl: 'https://github.com/wendellcs/Projects/tree/main/intro-section-with-dropdown-navigation',
//     techs: [FaHtml5, FaCss3Alt, IoLogoJavascript]
// },
// {
//     name: 'Sistema de chamados',
//     image: sistemaChamadosImage,
//     liveSiteUrl: 'https://sistema-de-chamados-orcin.vercel.app',
//     gitHubUrl: 'https://github.com/wendellcs/sistema-de-chamados',
//     techs: [FaReact, FaHtml5, FaCss3Alt, IoLogoJavascript]
// },
// {
//     name: 'ReactJs To Do List',
//     image: toDoListImage,
//     liveSiteUrl: 'https://todo-list-mauve-mu.vercel.app',
//     gitHubUrl: 'https://github.com/wendellcs/todo-list',
//     techs: [FaReact, FaHtml5, FaCss3Alt, IoLogoJavascript]
// },
// {
//     name: 'Chatbot',
//     image: chatbotImage,
//     liveSiteUrl: 'https://chatbot-eight-pink-46.vercel.app',
//     gitHubUrl: 'https://github.com/wendellcs/chatbot-openai',
//     techs: [FaReact, FaSass, RiNodejsLine, IoLogoJavascript]
// }
]

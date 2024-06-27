// Icons
import { FaHtml5, FaCss3Alt, FaReact, FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

// Images
import blogrProjectImage from '../../assets/images/blogr-project-big.png'
import filmariaImage from '../../assets/images/filmaria-big.png'
import hangmanImage from '../../assets/images/hangman-big.png'
import introSectionImage from '../../assets/images/introSection-big.png'
import sistemaChamadosImage from '../../assets/images/sistemaChamados-big.png'
import toDoListImage from '../../assets/images/toDoList-big.png'

// Projects database
export const projectsData = [{
    name: 'Blogr Landing Page',
    image: blogrProjectImage,
    liveSiteUrl: '',
    gitHubUrl: 'https://github.com/wendellcs/blog-landing-page',
    techs: [FaHtml5, FaCss3Alt, IoLogoJavascript]
},
{
    name: 'Filmaria',
    image: filmariaImage,
    liveSiteUrl: '',
    gitHubUrl: 'https://github.com/wendellcs/filmaria',
    techs: [FaReact, FaHtml5, FaCss3Alt, IoLogoJavascript]
},
{
    name: 'Hangman',
    image: hangmanImage,
    liveSiteUrl: '',
    gitHubUrl: 'https://github.com/wendellcs/hangman',
    techs: [FaHtml5, FaCss3Alt, IoLogoJavascript, FaSass]
},
{
    name: 'Intro Section',
    image: introSectionImage,
    liveSiteUrl: '',
    gitHubUrl: 'https://github.com/wendellcs/Projects/tree/main/intro-section-with-dropdown-navigation',
    techs: [FaHtml5, FaCss3Alt, IoLogoJavascript]
},
{
    name: 'Sistema de chamados',
    image: sistemaChamadosImage,
    liveSiteUrl: '',
    gitHubUrl: 'https://github.com/wendellcs/sistema-de-chamados',
    techs: [FaReact, FaHtml5, FaCss3Alt, IoLogoJavascript]
},
{
    name: 'To Do List',
    image: toDoListImage,
    liveSiteUrl: '',
    gitHubUrl: 'https://github.com/wendellcs/todo-list',
    techs: [FaReact, FaHtml5, FaCss3Alt, IoLogoJavascript]
}]

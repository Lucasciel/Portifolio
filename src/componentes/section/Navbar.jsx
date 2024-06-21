import style from './Navbar.module.css'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'


function Navbar() {
    return (
        <div className={style.Navbar}>
            <ul>
                <li><Nav.Link href='#Projetos'>Projetos</Nav.Link></li>
                <li><Nav.Link>Tecnologias</Nav.Link></li>
                <li><Nav.Link href='#Sobremim'>Sobre mim</Nav.Link></li>
            </ul>
            <ul>
                <li><a href="https://github.com/Lucasciel"><FaGithub size={30} /></a></li>
                <li><a href="https://www.linkedin.com/in/lucas-souza-396444176/"><CiLinkedin size={30} /></a></li>
            </ul>
        </div>
    )
}

export default Navbar

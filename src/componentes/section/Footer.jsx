
import { FaFigma } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import style from './Footer.module.css'

function Footer() {
    return (
        <div className={style.footer}>

            <ul>
                <li>
                    <p>Meu contato: <br /> 16991886474</p>
                </li>
                <li><p>Email: <br />lluckaslink@gmail.com</p></li>
            </ul>

            <ul>
                <li><a href="https://github.com/Lucasciel"><FaGithub size={40}/></a></li>
                <li><a href="https://www.linkedin.com/in/lucas-souza-396444176/"><CiLinkedin size={40}/></a></li>
                <li><a href=""><FaFigma size={40}/></a></li>
            </ul>

        </div>
    )
}

export default Footer
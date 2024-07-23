import { FaLinkedin } from "react-icons/fa";
import {FiMail} from "react-icons/fi"
import { BsFillBriefcaseFill } from "react-icons/bs";


export default function Footer(){
    return (<footer>
        <div className="footer">
      
        <ul>
          <li>
            <b>Categorias</b>
          </li>
          <li>
            <a href="/">
              Tortas
            </a>
          </li>
          <li>
            <a href="/">
            Desayunos y Box</a>
           
          </li>
        
          <li>
            <a href="/">
              Postres
            </a>
          </li>
        </ul>
       
        <ul>
          <li>
            <b>Contáctame</b>
          </li>
          <li>
            <FaLinkedin />
            <a
              href="https://www.linkedin.com/in/benjamin-francisco-puricelli/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <BsFillBriefcaseFill />
            <a
              href="https://benjaminpuricelli.vercel.app/contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio
            </a>
          </li>
          <li>
            <FiMail />
            <a href="mailto:dulcevictorinaok@gmail.com">Correo</a>
          </li>
        </ul>
      </div>
    </footer>)
}
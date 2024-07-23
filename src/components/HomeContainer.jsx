import Card from "./Card"
import ContactForm from "./ContactForm";
import ProjectCard from "./ProjectCard";
import { blocks } from "../utils/blocks"
import { FcCollaboration } from "react-icons/fc";
import projects from "../utils/projects";

export default function HomeContainer({refs}){
    return(
        <section>
            <div className="projects" ref={refs.section1Ref}>
                <h4>Impulsa tu negocio</h4>
                <div className="homeCards">
                    {blocks.map((card, idx) => (<Card key={idx} title={card.title} icon={card.icon} desc={card.desc}/>))}
                </div>
            </div>
            <div className="aboutMe">
                <div><h4>Sobre mí</h4></div>
                <div><p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p></div>
                
            </div>
            <div className="projects">
                <div><h4>Algunos de mis proyectos!</h4></div>
                <div className="projectsCards">
                {projects.map((p, idx) => (<ProjectCard key={idx} title={p.name} desc={p.description} image={p.screenshot} link={p.site}/>))}
                </div>
            </div>
            <div className="howToBuy" ref={refs.section2Ref}>
                <div><h4>¿Cómo comprar?</h4></div>
                <div><p></p></div>
            </div>
            <div className="contact flex-div" ref={refs.section3Ref}>
                <div>
                    <span><h4>Contáctame</h4><FcCollaboration/></span>
                    <ul style={{marginTop: "3rem"}}>
                        <li><p>Contáctame fácilmente a través de un <b>correo eléctronico</b> explicando tu proyecto.</p></li>
                        <li><p>Puedes también aprovechar este espacio para indicar el <b>presupuesto</b> (tener en cuenta que los precios variarán mucho dependiendo del objetivo de cada App)</p></li>
                        <li><p>A la brevedad nos pondremos en contacto... 😁</p></li>
                    </ul>
                </div>
                <div className="formContainer">
                    <ContactForm/>
                </div>
            </div>
        </section>
    ) 
}
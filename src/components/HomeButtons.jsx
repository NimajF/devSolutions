

export default function HomeButtons({onScroll, refs}){
    return (
        <div className="homeButtons">
            <button className="aboutMeButton">Sobre mí</button>
            <button className="projectsButton" onClick={() => onScroll(refs.section1Ref)}>Proyectos</button>
            <button className="howToBuyButton" onClick={() => onScroll(refs.section2Ref)}> Cómo comprar</button>
            <button className="contactButton" onClick={() => onScroll(refs.section3Ref)}>Contacto</button>
        </div>
    )
}
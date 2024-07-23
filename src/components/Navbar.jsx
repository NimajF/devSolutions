import { useState, useEffect, useRef } from "react";

export default function Navbar({onScroll, refs}){
    const [sticky, setSticky] = useState("relative");

    useEffect(() => {
        window.addEventListener("scroll", stickNavbar);
    
        return () => {
          window.removeEventListener("scroll", stickNavbar);
        };
      }, []);
    
      const stickNavbar = () => {
        if (window !== undefined) {
          let windowHeight = window.scrollY;
          windowHeight > 200 ? setSticky("stickyNavbar") : setSticky("relative");
        }
      };

    return(
        <nav className={sticky}>
            <span>
                ASDASDASD
            </span>
            <div>
                <button onClick={() => onScroll(refs.section1Ref)}>
                    Proyectos
                </button>
                <button onClick={() => onScroll(refs.section2Ref)}>
                    Compras
                </button>
                <button onClick={() => onScroll(refs.section3Ref)}>
                    Contacto
                </button>

            </div>
        </nav>
    )
}
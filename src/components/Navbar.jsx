import { useState, useEffect } from "react";

export default function Navbar(){
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
                <button>
                    Proyectos
                </button>
                <button>
                    Compras
                </button>
                <button>
                    Contacto
                </button>

            </div>
        </nav>
    )
}
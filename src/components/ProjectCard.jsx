import React from "react";


export default function ProjectCard({title, desc, image, site}){
    return <div>
         <img
            src={image}
            alt={`Imágen del proyecto ${title}`}
            className="card-image"
      />
        <p className="card-title">{title}</p>
        {/* <p>{desc}</p> */}
        <a
              href={site}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visitar
            </a>
    </div>
}
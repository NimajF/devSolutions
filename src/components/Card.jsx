
export default function Card({title, icon, desc}){
    return (
        <div className="card">
            <span>{icon}</span>
            <article>
                <p>{title}</p>
                <p>{desc}</p>
            </article>
        </div>
    )
}
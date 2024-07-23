import HomeButtons from "./HomeButtons"

export default function TitleDiv({onScroll, refs}){
    return (
        <div className="titleDiv">
            <h1>BucketDev Solutions</h1>
            <h2>Creemos el sitio Web de tus sueños</h2>
            <h3>Lleva tu proyecto o emprendimiento a otro nivel con precios increíbles </h3>
            <HomeButtons onScroll={onScroll}refs={refs}/>
        </div>
    )
}
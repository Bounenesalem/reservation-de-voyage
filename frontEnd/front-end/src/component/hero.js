import "./heroStyles.css"
function Hero(props){
    
    return (
        <>
        <div className={props.cName}>
            <img alt="heroImg" src={props.heroImg} />
            <div className="hero-text">
                <h1>
                {props.title} 
                </h1>
                <p>{props.texte} </p>
                <a href={props.url} className={props.btnClass} >
                {props.buttontexte} 
                </a>

            </div>
  
        </div>
        </>
    )
       
       

    
}

export default Hero;
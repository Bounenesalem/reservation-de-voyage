import "./FooterStyles.css"

const Footer =() =>{
return(
    <div className="footer">
<div className="top">
    <div>
        <h1>Reservation De Voyage</h1>
        <p>
        choisiser le vol qui vous convient.
        </p>
    </div>
    <div>
        <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
        </a>

        <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
        </a>

   
        <a href="/">
            <i className="fa-brands fa-behance-square"></i>
        </a>

    
        <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
        </a>

    </div>
</div>

<div className="bottom">
    <div>
    <h4>project</h4>
    <a href="//">journal des modification</a>
    <a href="/">statut</a>
    <a href="/">licence</a>
    <a href="/">touts les verstons</a>
</div>
<div>
    <h4>community</h4>
    <a href="/">GitHub</a>
    <a href="/">Issues</a>
    <a href="/">project</a>
    <a href="/">twitter</a>
  
</div>
<div>
    <h4>Aide</h4>
    <a href="/">soutien</a>
    <a href="/">Deppannage</a>
    <a href="/">Contactez-nous</a>
</div>
<div >
    <h4>Autres</h4>
    <a href="/">Conditions d'utilisation</a>
    <a href="/">politique de confidentite</a>
    <a href="/">licence</a>
</div>


    </div>
    </div>
)
}
export default Footer;
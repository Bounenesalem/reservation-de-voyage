// import Header from "../../component/Header"

// function Home(){
    
//     return <div>
//         <Header/>
//         <h1>welcome to home page</h1>
//     </div> 
// }

// export default Home

// Home.js



import Header from "../../component/Header"
import Hero from "../../component/hero"
import AbutImage from "../../asserts/5.jpeg"
import Footer from "../../component/Footer"
import { Navbar } from "react-bootstrap"

function Home(){
    
    return <div>
        <>
      
        <Header/>
        <Hero
        cName="hero"
        heroImg={AbutImage}
        title="Bienvenue sur noter site de voyages
              enter les villes de mauritanie. "
              texte="choisiser le vol qui vous convient."
              buttontexte="Reserver"
              url="/users"
              btnClass="show"
        />
        <Footer/>
    </>
    </div> 
}

export default Home
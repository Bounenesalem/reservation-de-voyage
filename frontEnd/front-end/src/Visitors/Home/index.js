import Header from "../../component/Header"
import Hero from "../../component/hero"
import AbutImage from "../../asserts/5.jpeg"
import Footer from "../../component/Footer"
import Destination from "../../component/Destinastion"
import { Link } from "react-router-dom"


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
                <div style={{ textAlign: 'center', margin: '20px' }}>
          <Link to="/dashboard">
            <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#1976d2', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              Go to Dashboard
            </button>
          </Link>
        </div>
        <Destination/>
        <Footer/>
    </>
    </div> 
}

export default Home
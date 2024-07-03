import Header from "../../component/Header"
import Hero from "../../component/hero"
import AbutImage from "../../asserts/3.jpg"
import Footer from "../../component/Footer"
import AboutUs from './about.js'
function About(){

    return(
      <>
      <Header/>
      <Hero
      cName="hero-mid"
      heroImg={AbutImage}
      title="About"
            btnClass="hide"
      />
      <AboutUs/>
      <Footer/>
  </>
    ) ;
}

export default About
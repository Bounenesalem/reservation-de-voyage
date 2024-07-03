import Header from "../../component/Header"
import Hero from "../../component/hero"
import AbutImage from "../../asserts/4.jpg"  
import Footer from "../../component/Footer"
import ContactFrom from "./ContactFrom"

function Contact(){
    
    return <>
    <Header/>
    <Hero
      cName="hero-mid"
      heroImg={AbutImage}
      title="contact"
            btnClass="hide"
      />
      <ContactFrom/>
      <Footer/>
    </>
}

export default Contact
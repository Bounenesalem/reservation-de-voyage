
import "./ContactFromStyles.css"

function ContactFrom(){
    return(
   <div className="from-container">
   <h1>en voyer un message a nous</h1>
   <form>
    <input placeholder="name"/>
    <input placeholder="Email"/>
    <input placeholder="Subject"/>
    <textarea placeholder="Message" rows="4"></textarea>
    <button>Envoyer Message</button>
   </form>
   </div>
    )
}
export default ContactFrom ;
import photo1 from "../asserts/R.png";
import photo2 from "../asserts/2.jpg";
import photo3 from "../asserts/9.jpeg";
import photo4 from "../asserts/8.jpg";
import photo5 from "../asserts/11.jpg";
import photo6 from "../asserts/12.jpg";
import "./DestinationStyles.css";
import DestinationData from "./DestinationData";

const Destination =() =>{
    return(
        <div className="destination">
         <h1>
            Quelque destination  
         </h1>
         <p>
         Quelque destination qui est les plus reserver dans mon site 
         </p>
         <DestinationData
         
         heading="Nouadibou"
         text="Nouadhibou est une ville et un port de Mauritanie situé sur la côte atlantique. C'est la capitale de l'état de Dakhla Nouadhibou. Elle est la capitale économique de la Mauritanie et la deuxième ville en termes d'activité commerciale. Elle est considérée comme la porte d'entrée de l'Afrique du Nord en Mauritanie. un aéroport international et plusieurs installations industrielles et touristiques.."
                     img1={photo1}
                     img2={photo2}
         />
         <DestinationData
         
         heading="Nouakchott"
         text="Nouakchott ou Nouakchott est la capitale de la Mauritanie et sa plus grande ville. Sa population en 2013 était estimée à 958 mille personnes. En 1957, la région côtière de Nouakchott est choisie pour devenir la capitale du nouvel Etat. C'est l'une des plus grandes villes du désert du Sahara et le centre administratif et économique de la Mauritanie. Elle est située à 18° et 6' nord, 15° et 57' ouest.
"
                     img1={photo3}
                     img2={photo4}
         />

     <DestinationData
         
         heading="Rosso"
         text="Rosso, ou bateaux, est une ville située au sud de la Mauritanie à la frontière avec la République du Sénégal. Elle est la capitale de l'État du Trarza. Elle se trouve à 203 km de la capitale, Nouakchott, et est considérée comme la ville la plus éloignée. dans le monde arabe."
                     img1={photo5}
                     img2={photo6}
         />

        

        </div>
    )
}
export default Destination
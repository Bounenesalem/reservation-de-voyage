// import { components } from "react-select";
import "./DestinationStyles.css";
import photo1 from "../asserts/R.png";
import photo2 from "../asserts/2.jpg";

import { Component } from "react";

class DestinationData extends Component {
    render(){
        return(
            <div className="first-des">
            <div className="des-text">
                <h2>
                {this.props.heading}
                </h2>
                <p>
                {this.props.text}
                </p>
            </div>
            <div className="image">
            <img alt="img" src={this.props.img1} />

            <img alt="img" src={this.props.img2} />
    
    
            </div>
             </div>
        )
    }
}export default DestinationData
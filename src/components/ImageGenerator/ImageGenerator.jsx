import React from "react";
import './imagegenerator.css';
import default_img from '../assets/default_image.svg'

const ImageGenerator = () => {
    return(
        <div className="ai-image-generator">
            <div className="header">AI Image <span>Generator</span></div>
            <div className="img-loading">
                <div className="image"><img src={default_img} alt="default"></img></div>
            </div>
        </div>
    )
}

export default ImageGenerator;
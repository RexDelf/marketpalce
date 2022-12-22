import '../../assets/css/ImageGallery.css';
import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import React from "react";

export default function ImageGallery({images}){
    const [current, setCurrent] = useState(0);
    const length = images.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(images) || images.length <= 0) {
        return null;
    }

    return (
        <section className="image-gallery">
            {length > 1 && <div className="gallery-buttons">
                <button className="gallery-right-btn" onClick={nextSlide}><FontAwesomeIcon icon={faChevronRight}/></button>
                <button className="gallery-left-btn" onClick={prevSlide}><FontAwesomeIcon icon={faChevronLeft}/></button>
            </div>}
            {(images).map((image, index) => {
                return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (<img src={`data:${image.type};base64,${image.imageData}`} alt={image.name}/>)}
                        </div>)
                    }
                )
            }
    </section>
    )
}
import '../assets/css/AdvertPage.css';
import {useEffect, useState} from "react";
import api from "../api";
import {useParams} from "react-router-dom";
import ImageGallery from "../feature/ImageGallery";
import moment from "moment";

export default function AdvertPage(){
    const { id } = useParams();

    const [advert, setAdvert] = useState(null);

    useEffect(() => {
        fetchAdvert();
    }, [])

    const fetchAdvert = async () => {
        const response = await api.get(`/${id}`);
        setAdvert(response.data);
    }

    return advert && (
        <div className="advert-page-wrapper">
            <div className="advert-gallery-title-row">
                {advert && <ImageGallery images={advert.advertImages}/>}
                <div className="advert-page-info">
                    <div className="advert-page-info-container">
                        <h3 className="advert-page-title">{advert.title}</h3>
                        <div className="advert-page-number"><span>ID: </span>{advert.id}</div>
                        <div className="advert-page-price"><span>Price: </span>{advert.price}</div>
                        <div className="advert-page-date"><span>Posted: </span>{moment(advert.createdAt).format('DD-MM-YYYY HH:mm')}</div>
                        <div className="advert-page-location"><span>Location: </span>{advert.location}</div>
                        <div className="advert-page-phone"><span>Phone number: </span>{advert.phone}</div>
                    </div>
                </div>
            </div>
            <div className="advert-page-description-container">
                <div className="advert-page-description-title">Description</div>
                <div className="advert-page-description">{advert.description}</div>
            </div>
        </div>
    )
}
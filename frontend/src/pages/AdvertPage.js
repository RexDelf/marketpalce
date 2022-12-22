import '../assets/css/AdvertPage.css';
import {useEffect, useState} from "react";
import api from "../api";
import {useParams} from "react-router-dom";
import ImageGallery from "../feature/ImageGallery";

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

    return (
        <div className="advert-page-wrapper">
            {advert && <ImageGallery images={advert.advertImages}/>}
        </div>
    )
}
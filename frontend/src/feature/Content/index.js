import api from "../../api";
import {useEffect, useState} from "react";
import '../../assets/css/Content.css';

export default function Content(){
    const [adverts, setAdverts] = useState([]);

    useEffect(() => {
        fetchAdverts();
    }, [])

    const fetchAdverts = async () => {
        const response = await api.get("");
        setAdverts(response.data);
        console.log(response)
    }

    const advertList = adverts.map((advert) => {
        return (<section className="advert-card">
            <div className="advert-image">
                <img src={`data:${advert.advertImage.type};base64,${advert.advertImage.imageData}`} />
            </div>
            <div className="advert-info">
                <div className="price">

                </div>
                <h3 className="title">

                </h3>
                <div className="published">

                </div>
                <div className="location">

                </div>
            </div>
        </section>)
    });

    return(
        <div className="adverts">
            {advertList}
        </div>
    );
}
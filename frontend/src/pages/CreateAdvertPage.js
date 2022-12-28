import '../assets/css/CreateAdvertPage.css';
import {useState} from "react";
import api from "../api";

export default function CreateAdvertPage(){
    const token = localStorage.getItem("token");
    const [images, setImages] = useState();
    const [advert, setAdvert] = useState({
        title: '', price: '', location: '', description: '', phone: ''
    });

    const set = name => {
        return ({ target: { value } }) => {
            setAdvert(oldAdvert => ({...oldAdvert, [name]: value }));
        }
    };

    const onChange = (e) => {
        const chosenImages = Array.prototype.slice.call(e.target.files)
        setImages(chosenImages);
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            let formData = new FormData();
            formData.append("advert",
                new Blob([JSON.stringify(advert)], {type: 'application/json'}
                )
            );
            [...images].forEach( image => {
                formData.append("images", image)
            })
            const response = await api.post("/create", formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept' : 'application/json',
                    'Content-Type': 'multipart/form-data'
                }
            });
        } catch(error) {
            console.log(error)
        }
    }

    return(
        <div className="create-page-wrapper">
            <div className="create-advert-form-wrapper">
                <form className="create-advert-form">
                    <div className="advert-create-info-wrapper">
                        <div className="advert-short-info-wrapper">
                            <label>
                                Title
                                <input type="text" name="title" onChange={set('title')}/>
                            </label>
                            <label>Price
                                <input type="number" name="price" onChange={set('price')}/>
                            </label>
                            <label>Location
                                <input type="text" name="location" onChange={set('location')}/>
                            </label>
                            <label>Phone number
                                <input type="text" name="phone" onChange={set('phone')}/>
                            </label>
                        </div>
                        <div className="create-description-wrapper">
                            <label>Description
                                <textarea className="description" name="description" onChange={set('description')}/>
                            </label>
                        </div>
                    </div>
                    <div className="add-images">
                        <label>Photos
                        </label>
                        <label className="add-images-btn-wrapper">
                            <input className="add-images-btn" onChange={onChange} type="file" accept="image/png, image/jpeg" multiple />
                            Upload
                        </label>
                    </div>
                    <div className="submit-advert-wrapper">
                        <div className="submit-advert">
                            <input onClick={(e) => handleSubmit(e)} className="submit-advert-btn" type="submit"
                                   value="Submit"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
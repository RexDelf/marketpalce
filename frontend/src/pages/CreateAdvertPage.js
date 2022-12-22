import Header from "../components/Header";
import Filter from "../feature/Filter";
import ContentHeader from "../feature/ContentHeader";
import Content from "../feature/Content";
import {useState} from "react";
import api from "../api";

export default function CreateAdvertPage(){
    const [images, setImages] = useState();
    const [advert, setAdvert] = useState({
        title: '', price: '', location: '', description: ''
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

    const handleSubmit = async () => {
        try {
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
                    'Content-Type': 'multipart/form-data'
                }
            });
        } catch(error) {
            console.log(error)
        }
    }

    return(
        <div className="create-page-wrapper">
                <form>
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
                    <label>Description
                        <textarea className="description" name="description" onChange={set('description')}/>
                    </label>
                    <label>Photos
                        <input onChange={onChange} type="file" multiple/>
                    </label>
                    <input onClick={() => handleSubmit()} type="submit" value="Submit"/>
                </form>
        </div>
    )
}
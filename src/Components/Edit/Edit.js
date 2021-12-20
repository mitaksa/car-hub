import { useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from 'react-router-dom';
import useCarState from "../../hooks/useCarState.js";
import * as carService from "../../services/carService.js"

const categories = [
    { value: 'Sport', text: 'Sport' },
    { value: 'Old', text: 'Old' },
    { value: 'New', text: 'New' },

]

const Edit = () => {

    const { carId } = useParams();
    const [errors, setErrors] = useState({ brand: false, model: false });
    const [car, setCar] = useCarState(carId);
    const navigate = useNavigate();

    const carEditSubmitHandler = (e) => {
        e.preventDefault();

        let carData = Object.fromEntries(new FormData(e.currentTarget));

        carService.update(car._id, carData);
        navigate(`/details/${car._id}`)
    }

    return (
        <div id="container">
            <h1>&bull; Create car post &bull;</h1>
            <div className="underline">
            </div>
            <form method="POST" id="contact_form" onSubmit={carEditSubmitHandler}>
                <div className="name">
                    <input type="text" placeholder="Car brand" name="brand" id="name_input" defaultValue={car.brand} />
                </div>
                <div className="email">
                    <input type="text" placeholder="Car model" name="model" id="email_input" defaultValue={car.model} />
                </div>
                <div className="email">
                    <input type="text" placeholder="Car price $" name="price" id="email_input" defaultValue={car.price} />
                </div>
                <div className="telephone">
                    <input type="text" placeholder="Car image url" name="imageUrl" id="telephone_input" defaultValue={car.imageUrl} />
                </div>
                <div className="subject">
                    <select name="category" id="subject_input" value={car.category} onChange={(e) => setCar(s => ({ ...s, category: e.target.value }))}>
                        {categories.map(x => <option key={x.value} value={x.value}>{x.text}</option>)}
                    </select>
                </div>
                <div className="message">
                    <textarea name="description" placeholder="Car description" id="message_input" cols="30" rows="5" defaultValue={car.description} ></textarea>
                </div>
                <div className="submit">
                    <input type="submit" value="Post" id="form_button" />
                </div>
            </form>
        </div>
    )

}

export default Edit;
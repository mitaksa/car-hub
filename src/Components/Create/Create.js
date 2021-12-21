import { useNavigate } from 'react-router';
import * as carService from '../../services/carService.js'
import { useAuthContext } from '../../contexts/AuthContext.js';

const Create = () => {
    const {user} = useAuthContext();
    const navigate = useNavigate();

    const onPostHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let brand = formData.get('brand');
        let model = formData.get('model');
        let price = formData.get('price');
        let imageUrl = formData.get('imageUrl');
        let category = formData.get('category');
        let description = formData.get('description');
        
        carService.create({
            brand,
            model,
            price,
            imageUrl,
            category,
            description
        }, user.accessToken)
        .then(result => {
            navigate('/');
        })
    }

    return (

        <div id="container">
            <h1>&bull; Create car post &bull;</h1>
            <div className="underline">
            </div>
            <form onSubmit={onPostHandler} method="POST" id="contact_form">
                <div className="name">
                    <input type="text" placeholder="Car brand" name="brand" id="name_input" required />
                </div>
                <div className="email">
                    <input type="text" placeholder="Car model" name="model" id="email_input" required />
                </div>
                <div className="email">
                    <input type="text" placeholder="Car price $" name="price" id="email_input" required />
                </div>
                <div className="telephone">
                    <input type="text" placeholder="Car image url" name="imageUrl" id="telephone_input" required />
                </div>
                <div className="subject">
                    <select placeholder="Car category" name="category" id="subject_input" required>
                        <option disabled hidden selected>Car category</option>
                        <option>Sport</option>
                        <option>Old</option>
                        <option>New</option>
                    </select>
                </div>
                <div className="message">
                    <textarea name="description" placeholder="Car description" id="message_input" cols="30" rows="5" required></textarea>
                </div>
                <div className="submit">
                    <input type="submit" value="Post" id="form_button" />
                </div>
            </form>
        </div>

    )
}

export default Create;
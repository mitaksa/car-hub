import { useNavigate, useParams } from "react-router";
import { useAuthContext } from "../../contexts/AuthContext.js";
import useCarState from "../../hooks/useCarState.js";
import { Link } from "react-router-dom";
import * as carService from "../../services/carService.js"
import { useEffect } from "react";



const Details = () => {
    const { user } = useAuthContext();
    const { carId } = useParams();
    const [car, setCar] = useCarState(carId);
    const navigate = useNavigate();

    useEffect(() => {
        carService.getCarLikes(carId)
            .then(likes => {
                setCar(state => ({...state, likes}))
            })
    }, []);

    const ownerButtons = (
        <>
            <Link className="editlink" to={`/edit/${car._id}`}>Edit</Link>
            <a className="btn btn-custom" onClick={(e) => deleteHandler(e)} >Delete</a>
        </>
    );

    const userButtons = <button onClick={(e) =>likeButtonClick(e)} className="btn btn-custom" disabled={car.likes?.includes(user._id)}>Like</button>;

    const deleteHandler = (e) => {
        e.preventDefault();

        carService.destroy(carId, user.accessToken)
            .then(() => {
                navigate('/my-cars');
            })
    };

    const likeButtonClick = () => {
        if (user._id === car._ownerId) {
            return;
        }

        if (car.likes.includes(user._id)) {  
            return;
        }

        carService.like(user._id, carId)
            .then(() => {
                setCar(state => ({...state, likes: [...state.likes, user._id]}));
            });
    };

    return (
        
        <div className="about">
                <div className="starsdetails">
                    <div className="glyphicon glyphicon-star"></div>
                    <div className="glyphicon glyphicon-star"></div>
                    <div className="glyphicon glyphicon-star"></div>
                </div>
                <h1>{car.brand} {car.model}</h1>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-img">
                                <img src={car.imageUrl} alt="Image" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-header text-left">
                                <h1>Price</h1>
                                <h1>{car.price} &euro;</h1>
                            </div>
                            <div className="about-content">
                                <p>
                                    {car.description}
                                </p>
                                <ul>
                                    <li><i>&bull;</i>{car.category} Car</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        {user._id && (user._id == car._ownerId
                            ? ownerButtons
                            : userButtons
                        )}

                        <img className="hearts" src="/image/heart.png" />
                        <div className="likes">
                            <span id="total-likes">Likes: {car.likes?.length || 0}</span>
                        </div>
                    </div>
                </div>
                <div className="stars2details">
                    <div className="glyphicon glyphicon-star"></div>
                    <div className="glyphicon glyphicon-star"></div>
                    <div className="glyphicon glyphicon-star"></div>
                </div>
            </div>

    )

}

export default Details;
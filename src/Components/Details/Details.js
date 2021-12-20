import { useParams } from "react-router";
import { useAuthContext } from "../../contexts/AuthContext.js";
import useCarState from "../../hooks/useCarState.js";
import { Link } from "react-router-dom";


const Details = () => {
    const { user } = useAuthContext();
    const { carId } = useParams();
    const [car, setCar] = useCarState(carId);

    const ownerButtons = (
        <>
            <Link className="button" to={`/edit/${car._id}`}>Edit</Link>
            <a className="button" >Delete</a>
        </>
    );

    const userButtons = <button disabled={car.likes?.includes(user._id)}>Like</button>;


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
            <a className="btn btn-custom" href="">Edit</a>
            <a className="btn btn-custom" href="">Delete</a>
            <a className="btn btn-custom" href="">Like</a>
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
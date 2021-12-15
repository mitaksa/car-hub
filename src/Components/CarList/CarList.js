import { useEffect, useState } from "react";
import CarCard from "./CarCard/CarCard.js";
import * as carService from '../../services/carService.js';

const CarList = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll()
        .then(result => {
            console.log(result);
            setCars(result);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    return(
        <>
        {cars.length > 0
            ? (
                <div className="row">
                    {cars.map(x => <CarCard key={x.id} car={x} />)}
                </div>
            )
            : <p className="no-pets">No cars in database!</p>
        }
        </>
    );

}

export default CarList;
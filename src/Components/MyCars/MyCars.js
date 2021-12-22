import CarList from "../CarList/CarList.js";
import { useEffect, useState } from "react";
import * as carService from '../../services/carService.js';
import { useAuthContext } from "../../contexts/AuthContext.js";


const MyCars = () => {
    const [cars, setCars] = useState([]);

    const { user } = useAuthContext();

    useEffect(() => {
        carService.getMyCars(user._id)
            .then(result => {
                setCars(result);
            });
    }, []);

    return (
        <div>
            <div className="feturedsection">
                <h1 className="text-center">My Cars</h1>
            </div>

            <CarList cars={cars} />

        </div>
    )
}

export default MyCars;
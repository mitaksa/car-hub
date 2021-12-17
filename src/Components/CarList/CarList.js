import CarCard from "./CarCard/CarCard.js";

const CarList = ({
    cars
}) => {

    return(
        <>
        {cars.length > 0
            ? (
                <div className="row">
                    {cars.map(x => <CarCard key={x._id} car={x} />)}
                </div>
            )
            : <p className="no-pets">No cars in database!</p>
        }
        </>
    );

}

export default CarList;
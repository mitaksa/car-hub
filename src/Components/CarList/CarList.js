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
            : <h3 className="nocars">No cars in database!</h3>
        }
        </>
    );

}

export default CarList;
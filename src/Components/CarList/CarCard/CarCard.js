

const CarCard = ({
    car
}) => {
    return (
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="txthover">
                <img src={car.imageUrl} alt="car4" />
                <div className="txtcontent">
                    <div className="stars">
                        <div className="glyphicon glyphicon-star"></div>
                        <div className="glyphicon glyphicon-star"></div>
                        <div className="glyphicon glyphicon-star"></div>
                    </div>
                    <div className="simpletxt">
                        <h3 className="name">{car.brand}</h3>
                        <p>{car.model}</p>
                        <h4 className="price">{car.price} &euro;</h4>
                        <button>READ MORE</button><br />
                        <div className="wishtxt">
                            <p className="paragraph1"> Add to Wishlist <span className="glyphicon glyphicon-heart"></span> </p>
                            <p className="paragraph2">Compare <span className="icon"><img src="image/compicon.png" alt="compicon" /></span></p>
                        </div>
                    </div>
                    <div className="stars2">
                        <div className="glyphicon glyphicon-star"></div>
                        <div className="glyphicon glyphicon-star"></div>
                        <div className="glyphicon glyphicon-star"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarCard;
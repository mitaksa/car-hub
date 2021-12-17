import { useEffect, useState } from "react";
import * as carService from '../../services/carService.js';
import CarList from "../CarList/CarList.js";

const Main = () => {
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

	return (
		// <div className="allcontain"> 
		<div>
			<div id="carousel-up" className="carousel slide" data-ride="carousel">
				<div className="carousel-inner " role="listbox">
					<div className="item active">
						<img src="image/oldcar.jpg" alt="oldcar" />
						<div className="carousel-caption">
							<h2>Porsche 356</h2>
							<p>Lorem ipsum dolor sit amet, consectetur ,<br />
								sed do eiusmod tempor incididunt ut labore </p>
						</div>
					</div>
					<div className="item">
						<img src="image/porche.jpg" alt="porche" />
						<div className="carousel-caption">
							<h2>Porche</h2>
							<p>Lorem ipsum dolor sit amet, consectetur ,<br />
								sed do eiusmod tempor incididunt ut labore </p>
						</div>
					</div>
					<div className="item">
						<img src="image/benz.jpg" alt="benz" />
						<div className="carousel-caption">
							<h2>Car</h2>
							<p>Lorem ipsum dolor sit amet, consectetur ,<br />
								sed do eiusmod tempor incididunt ut labore </p>
						</div>
					</div>
				</div>
				{/* <nav className="navbar navbar-default midle-nav">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed textcostume" data-toggle="collapse" data-target="#navbarmidle" aria-expanded="false">
                            <h1>SEARCH TEXT</h1>
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarmidle">
                        <div className="searchtxt">
                            <h1>SEARCH TEXT</h1>
                        </div>
                        <form className="navbar-form navbar-left searchformmargin" role="search">
                            <div className="form-group">
                                <input type="text" className="form-control searchform" placeholder="Enter Keyword" />
                            </div>
                        </form>
                        <ul className="nav navbar-nav navbarborder">
                            <li className="li-category">
                                <a className="btn  dropdown-toggle btn-costume" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Category<span className="glyphicon glyphicon-chevron-down downicon"></span></a>
                                <ul className="dropdown-menu" id="mydd">
                                    <li><a href="#">Epic</a></li>
                                    <li><a href="#">Old</a></li>
                                    <li><a href="#">New</a></li>
                                </ul>
                            </li>
                            <li className="li-minyear"><a className="btn  dropdown-toggle btn-costume" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Min Year <span className="glyphicon glyphicon-chevron-down downicon"></span></a>
                                <ul className="dropdown-menu" id="mydd2">
                                    <li><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                </ul>
                            </li>
                            <li className="li-maxyear"><a className="btn dropdown-toggle btn-costume" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Max Year <span className="glyphicon glyphicon-chevron-down downicon"></span></a>
                                <ul className="dropdown-menu" id="mydd3">
                                    <li><a href="#">1900</a></li>
                                    <li><a href="#">2000</a></li>
                                    <li><a href="#">2016</a></li>
                                </ul>
                            </li>
                            <li className="li-slideprice">
                                <p> <label className="slidertxt" for="amount">Price </label>
                                    <input className="priceslider" type="text" id="amount" readonly="readonly" />
                                </p>
                                <div id="slider-range"></div>

                            </li>
                            <li className="li-search"> <button className="searchbutton"><span className="glyphicon glyphicon-search "></span></button></li>
                        </ul>

                    </div>
                </nav> */}

				<div className="latestcars">
					<h1 className="text-center">&bullet; LATEST   CARS &bullet;</h1>
					<ul className="nav nav-tabs navbar-left latest-navleft">
						<li role="presentation" className="li-sortby"><span className="sortby">SORT BY: </span></li>
						<li data-filter=".RECENT" role="presentation"><a href="#mostrecent" className="prcBtnR">MOST RECENT </a></li>
						<li data-filter=".POPULAR" role="presentation"><a href="#mostpopular" className="prcBtnR">MOST POPULAR </a></li>
						<li role="presentation"><a href="#" className="alphSort">ALPHABETICAL </a></li>
						<li data-filter=".HPRICE" role="presentation"><a href="#" className="prcBtnH">HIGHEST PRICE </a></li>
						<li data-filter=".LPRICE" role="presentation"><a href="#" className="prcBtnL">LOWEST  PRICE </a></li>
						<li id="hideonmobile" />
					</ul>
				</div>
				<br />
				<br />
				{/* <!-- ________________________Latest Cars Image Thumbnail________________--> */}
				<div className="grid">
					<div className="row">
						<CarList cars={cars}/>
					</div>
					{/* <div className="row">
						<div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
							<div className="txthover">
								<img src="image/car1.jpg" alt="car1" />
								<div className="txtcontent">
									<div className="stars">
										<div className="glyphicon glyphicon-star"></div>
										<div className="glyphicon glyphicon-star"></div>
										<div className="glyphicon glyphicon-star"></div>
									</div>
									<div className="simpletxt">
										<h3 className="name">Rolls Royce</h3>
										<p>"Lorem ipsum dolor sit amet, consectetur,<br />
											sed do eiusmod tempor incididunt" </p>
										<h4 className="price"> 1000&euro;</h4>
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
						<div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 ">
							<div className="txthover">
								<img src="image/car2.jpg" alt="car2" />
								<div className="txtcontent">
									<div className="stars">
										<div className="glyphicon glyphicon-star"></div>
										<div className="glyphicon glyphicon-star"></div>
										<div className="glyphicon glyphicon-star"></div>
									</div>
									<div className="simpletxt">
										<h3 className="name">Renault</h3>
										<p>"Lorem ipsum dolor sit amet, consectetur,<br />
											sed do eiusmod tempor incididunt" </p>
										<h4 className="price">900 &euro;</h4>
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
						<div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
							<div className="txthover">
								<img src="image/car3.jpg" alt="car3" />
								<div className="txtcontent">
									<div className="stars">
										<div className="glyphicon glyphicon-star"></div>
										<div className="glyphicon glyphicon-star"></div>
										<div className="glyphicon glyphicon-star"></div>
									</div>
									<div className="simpletxt">
										<h3 className="name">Ford Mustang</h3>
										<p>"Lorem ipsum dolor sit amet, consectetur,<br />
											sed do eiusmod tempor incididunt" </p>
										<h4 className="price">3000 &euro;</h4>
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
						<div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
							<div className="txthover">
								<img src="image/car4.jpg" alt="car4" />
								<div className="txtcontent">
									<div className="stars">
										<div className="glyphicon glyphicon-star"></div>
										<div className="glyphicon glyphicon-star"></div>
										<div className="glyphicon glyphicon-star"></div>
									</div>
									<div className="simpletxt">
										<h3 className="name">Rover</h3>
										<p>"Lorem ipsum dolor sit amet, consectetur,<br />
											sed do eiusmod tempor incididunt" </p>
										<h4 className="price">1000 &euro;</h4>
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
						<div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
							<div className="txthover">
								<img src="image/car5.jpg" alt="car5" />
								<div className="txtcontent">
									<div className="stars">
										<div className="glyphicon glyphicon-star"></div>
										<div className="glyphicon glyphicon-star"></div>
										<div className="glyphicon glyphicon-star"></div>
									</div>
									<div className="simpletxt">
										<h3 className="name">Porche</h3>
										<p>"Lorem ipsum dolor sit amet, consectetur,<br />
											sed do eiusmod tempor incididunt" </p>
										<h4 className="price">1200 &euro;</h4>
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
						<div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
							<div className="txthover">
								<img src="image/car6.jpg" alt="car6" />
								<div className="txtcontent">
									<div className="stars">
										<div className="glyphicon glyphicon-star"></div>
										<div className="glyphicon glyphicon-star"></div>
										<div className="glyphicon glyphicon-star"></div>
									</div>
									<div className="simpletxt">
										<h3 className="name">Porche 911</h3>
										<p>"Lorem ipsum dolor sit amet, consectetur,<br />
											sed do eiusmod tempor incididunt" </p>
										<h4 className="price">4000 &euro;</h4>
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
						<div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
							<div className="txthover">
								<img src="image/car7.jpg" alt="car7" />
								<div className="txtcontent">
									<div className="stars">
										<div className="glyphicon glyphicon-star"></div>
										<div className="glyphicon glyphicon-star"></div>
										<div className="glyphicon glyphicon-star"></div>
									</div>
									<div className="simpletxt">
										<h3 className="name">Chevrolet SS</h3>
										<p>"Lorem ipsum dolor sit amet, consectetur,<br />
											sed do eiusmod tempor incididunt" </p>
										<h4 className="price">3000 &euro;</h4>
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
						<div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
							<div className="txthover">
								<img src="image/car8.jpg" alt="car8" />
								<div className="txtcontent">
									<div className="stars">
										<div className="glyphicon glyphicon-star"></div>
										<div className="glyphicon glyphicon-star"></div>
										<div className="glyphicon glyphicon-star"></div>
									</div>
									<div className="simpletxt">
										<h3 className="name">Meclaren</h3>
										<p>"Lorem ipsum dolor sit amet, consectetur,<br />
											sed do eiusmod tempor incididunt" </p>
										<h4 className="price">2500 &euro;</h4>
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
					</div> */}
				</div>
			</div>

			<div className="newslettercontent">
				<div className="leftside">
					<img src="image/border.png" alt="border" />
					<h1>NEWSLETTER</h1>
					<p>Subscribe to the COLLECTIONCARS mailing list to <br />
						receive updates on new arrivals, special offers <br />
						and other discount information.</p>
				</div>
				<div className="rightside">
					<img className="newsimage" src="image/newsletter.jpg" alt="newsletter" />
					<input type="text" className="form-control" id="subemail" placeholder="EMAIL" />
					<button>SUBSCRIBE</button>
				</div>
			</div>
			{/* <div className="bottomlogo">
				<img src="image/collectionlogo1.png" alt="logo1" />
			</div> */}
		</div>
	)
}

export default Main;
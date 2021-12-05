import { Link } from "react-router-dom";

const Header = () => {

	return (

		<header>
			<nav className="topnavbar navbar-default topnav">
				{/* <div className="container">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed toggle-costume" data-toggle="collapse" data-target="#upmenu" aria-expanded="false">
							<span className="sr-only"> Toggle navigaion</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
					</div>
				</div> */}
						<Link className="navbar-br/and logo" to="/"><img src="image/logomy.png" alt="logo" /></Link>
				<div className="collapse navbar-collapse" id="upmenu">
					<ul className="nav navbar-nav" id="navbarontop">
						<li className="active">
							<Link to="/">HOME</Link>
						</li>
						<li className="dropdown">
							<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">CATEGORIES <span className="caret"></span></a>
							<ul className="dropdown-menu dropdowncostume">
								<li><a href="#">Sport</a></li>
								<li><a href="#">Old</a></li>
								<li><a href="#">New</a></li>
							</ul>
						</li>
						{/* <li className="dropdown">
						<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">DEALERS <span className="caret"></span></a>
						<ul className="dropdown-menu dropdowncostume">
							<li><a href="#">1</a></li>
							<li><a href="#">2</a></li>
							<li><a href="3">3</a></li>
						</ul>
				</li> */}
						<li>
							{/* <a href="contact.html">CONTACT</a> */}

							<Link to="/my-cars">My Cars</Link>

						</li>

						<button><Link to='/create-page' className="postnewcar">POST NEW CAR</Link></button>


						<li><Link to="/login">Login </Link> </li>
						<li><Link to="/register"><span className="register">Register</span></Link></li>
						<button><span className="logout">Logout</span></button>

					</ul>
				</div>
			</nav>
		</header>

	);
};

export default Header;
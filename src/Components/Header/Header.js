import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext.js";

const Header = () => {
	const { user } = useAuthContext();

	let guestNavigation = (
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

			<li><Link to="/login">Login </Link> </li>
			<li><Link to="/register"><span className="register">Register</span></Link></li>
		</ul>
	);

	let userNavigation = (
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

			<li>
				{/* <a href="contact.html">CONTACT</a> */}

				<Link to="/my-cars">My Cars</Link>

			</li>
			<button><Link className="linknav" to='/create'>POST NEW CAR</Link></button>
			<button><Link className="linknav" to='/logout'>Logout</Link></button>
			<label className="useremail">Hi, {user.email}</label>
		</ul>
	);

	return (

		<header>
			<nav className="topnavbar navbar-default topnav">
				<Link className="navbar-br/and logo" to="/"><img src="/image/logomy.png" alt="logo" /></Link>
				<div className="collapse navbar-collapse" id="upmenu">
					{user.email
						? userNavigation
						: guestNavigation
					}
				</div>
			</nav>
		</header>

	);
};

export default Header;
import { Routes, Route } from 'react-router';

import Header from './Components/Header/Header.js';
import Main from './Components/Main/Main.js';
import MyCars from './Components/MyCars/MyCars.js';
import Footer from './Components/Footer/Footer.js';
import Login from './Components/Login/Login.js';
import Register from './Components/Register/Register.js';
import Create from './Components/Create/Create.js';
import Logout from './Components/Logout/Logout.js';
import { AuthProvider } from './contexts/AuthContext.js';
import Details from './Components/Details/Details.js';
import Edit from './Components/Edit/Edit.js';
import Categories from './Components/Categories/Categories.js';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage.js';
import GuardedRoute from './Components/Common/ConfirmDialog/GuardedRoute.js';

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<AuthProvider>
			<div className="allcontain">
				<Header />

				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/my-cars' element={<MyCars />} />
					<Route path='/login' element={<Login />} />
					<Route path="/logout" element={<Logout />} />
					<Route path='/register' element={<Register />} />
					<Route path='/details/:carId' element={<Details />} />
					<Route path="/categories/:category" element={<Categories />} />
					<Route path="/*" element={<NotFoundPage />} />

					<Route element={<GuardedRoute />}>
					<Route path='/create' element={<Create />} />
					<Route path="/edit/:carId" element={<Edit />} />
					</Route>
				</Routes>


				<Footer />
			</div>

		</AuthProvider>

	)
}
export default App;

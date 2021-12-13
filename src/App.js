import './App.css';
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
					<Route path='/create' element={<Create />} />
				</Routes>


				<Footer />
			</div>

		</AuthProvider>

	)
}
export default App;

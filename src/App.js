import './App.css';
import { Routes, Route } from 'react-router';

import Header from './Components/Header/Header.js';
import Main from './Components/Main/Main.js';
import MyCars from './Components/MyCars/MyCars.js';
import Footer from './Components/Footer/Footer.js';
import Login from './Components/Login/Login.js';
import Register from './Components/Register/Register.js';
import CreatePage from './Components/CreatePage/CreatePage.js';

function App() {
	return (

		<div className="allcontain">
			<Header />
			
			<Routes>
			<Route path='/' element={<Main />} />
			<Route path='/my-cars' element={<MyCars />} />
			<Route path='/login' element={<Login/>} />
			<Route path='/register' element={<Register/>} />
			<Route path='/create-page' element={<CreatePage/>} />
			</Routes>
		

			<Footer/>
		</div>



	)
}
export default App;

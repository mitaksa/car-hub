import { useNavigate } from 'react-router';
import { useAuthContext } from '../../contexts/AuthContext.js';
import * as authService from '../../services/authService.js'

const Register = () => {
        const navigate = useNavigate();
        const {login} = useAuthContext();

    const registerSubmitHandler = (e) => {
        e.preventDefault();

        let {email, password} = Object.fromEntries(new FormData(e.currentTarget));

        authService.register(email, password)   
            .then(authData => {
                login(authData);
                
                navigate('/');
            });
    }

    return (
        <form onSubmit={registerSubmitHandler}>
            <link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css' />
            <div class="login-block">
                <h1>Register</h1>
                <input type="text" defaultValue="" placeholder="Email" id="email" name="email" />
                <input type="password" defaultValue="" placeholder="Password" id="password" name="password" />
                <input type="password" defaultValue="" placeholder="Repeat Password" id="repeat-pass" name="confirm-pass" />
                <button>Register</button>
            </div>
        </form>
    )
}

export default Register;
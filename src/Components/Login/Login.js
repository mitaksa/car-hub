import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext.js';

import * as authService from '../../services/authService.js';

const Login = () => {
    const { login } = useAuthContext();
    const navigate = useNavigate();

    const onLoginHandler = (e) => {
        e.preventDefault();
        
        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let password = formData.get('password');

        authService.login(email, password)
            .then((authData) => {
                login(authData);

                navigate('/');
            })
            .catch(err => {
                // TODO: show notification
                console.log(err);
            });

    }

    return (
        <form onSubmit={onLoginHandler} method="POST">
            <link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css' />
            <div class="login-block">
                <h1>Login</h1>
                <input type="text" defaultValue="" placeholder="Email" id="email" name="email" />
                <input type="password" defaultValue="" placeholder="Password" id="password" name="password" />
                <button>Login</button>
            </div>
        </form>
    )
}

export default Login;
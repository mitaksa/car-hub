
const Register = () => {

    return (
        <form>
            <link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css' />
            <div class="logo"></div>
            <div class="login-block">
                <h1>Register</h1>
                <input type="text" value="" placeholder="Username" id="username" />
                <input type="password" value="" placeholder="Password" id="password" />
                <input type="password" value="" placeholder="Repeat Password" id="password" />
                <button>Register</button>
            </div>
        </form>
    )
}

export default Register;
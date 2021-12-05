

const CreatePage = () => {

    return (
        
        <form>
            <link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css' />
            <div class="logo"></div>
            <div class="login-block">
                <h1>Create Car Post</h1>
                <input type="text" defaultValue="" placeholder="Username" id="username" />
                <input type="text" defaultValue="" placeholder="Password" id="password" />
                <input type="text" defaultValue="" placeholder="Repeat Password" id="password" />
                <button>Post</button>
            </div>
        </form>
        
    )
}

export default CreatePage;
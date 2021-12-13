

const Footer = () => {

    return (
        <div className="bottommenu">
				{/* <img src="image/collectionlogo1.png" alt="logo1" /> */}
            
            <p>"Lorem ipsum dolor sit amet, consectetur,  sed do eiusmod tempor incididunt <br />
						eiusmod tempor incididunt </p>
					<div className="bottomsocial">
						<a href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a>
						<a href="https://twitter.com/i/flow/login"><i className="fa fa-twitter"></i></a>
						<a href="https://accounts.google.com/ServiceLogin/identifier?hl=bg&passive=true&continue=https%3A%2F%2Fwww.google.bg%2F&ec=GAZAmgQ&flowName=GlifWebSignIn&flowEntry=ServiceLogin"><i className="fa fa-google-plus"></i></a>
						<a href="https://www.pinterest.com/login/"><i className="fa fa-pinterest"></i></a>
					</div>
            <div className="footer">
                <div className="copyright">
                    &copy; Copy right 2016 | <a href="https://">Privacy </a>| <a href="https://">Policy</a>
                </div>
                <div className="atisda">
                    Designed by <a href="http://www.webdomus.net/">Web Domus Italia - Web Agency </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;
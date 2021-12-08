

const MyCars = () => {

    return (
        <div>
            <div className="feturedsection">
                <h1 className="text-center">My Cars</h1>
            </div>
            <div className="feturedimage">
                <div className="row firstrow">
                    <div className="col-lg-6 costumcol colborder1">
                        <div className="row costumrow">
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 img1colon">
                                <img src="image/featurporch.jpg" alt="porsche" />
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 txt1colon ">
                                <div className="featurecontant">
                                    <h1>LOREM IPSUM</h1>
                                    <p>"Lorem ipsum dolor sit amet, consectetur ,<br />
                                        sed do eiusmod tempor incididunt </p>
                                    <h2>Price &euro;</h2>
                                    <button id="btnRM" onclick="rmtxt()">READ MORE</button>
                                    <div id="readmore">
                                        <h1>Car Name</h1>
                                        <p>"Lorem ipsum dolor sit amet, consectetur ,<br />
                                            sed do eiusmod tempor incididunt <br />"Lorem ipsum dolor sit amet, consectetur ,<br />
                                            sed do eiusmod tempor incididunt"Lorem ipsum dolor sit amet, consectetur1 ,
                                            sed do eiusmod tempor incididunt"Lorem ipsum dolor sit amet, consectetur1
                                            sed do eiusmod tempor incididunt"Lorem ipsum dolor sit amet, consectetur1<br />
                                        </p>
                                        <button id="btnRL">READ LESS</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 costumcol colborder2">
                        <div className="row costumrow">
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 img2colon">
                                <img src="image/featurporch1.jpg" alt="porsche1" />
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 txt1colon ">
                                <div className="featurecontant">
                                    <h1>LOREM IPSUM</h1>
                                    <p>"Lorem ipsum dolor sit amet, consectetur ,<br />
                                        sed do eiusmod tempor incididunt </p>
                                    <h2>Price &euro;</h2>
                                    <button id="btnRM2">READ MORE</button>
                                    <div id="readmore2">
                                        <h1>Car Name</h1>
                                        <p>"Lorem ipsum dolor sit amet, consectetur ,<br />
                                            sed do eiusmod tempor incididunt <br />"Lorem ipsum dolor sit amet, consectetur ,<br />
                                            sed do eiusmod tempor incididunt"Lorem ipsum dolor sit amet, consectetur1 ,
                                            sed do eiusmod tempor incididunt"Lorem ipsum dolor sit amet, consectetur1
                                            sed do eiusmod tempor incididunt"Lorem ipsum dolor sit amet, consectetur1<br /></p>
                                        <button id="btnRL2">READ LESS</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyCars;
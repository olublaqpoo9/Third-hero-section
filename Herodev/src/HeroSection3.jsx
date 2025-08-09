import "./HeroStyle.css";

function HeroSection () {

    return(
            <body>
                <div className="landing-page" >
                    <div className="nav-bar">
                        <div className="logo" > BLAQTEK </div>
                        <div className="nav-links" >
                            <ul>
                                <li><a href="#">Models</a></li>
                                <li><a href="#">Build & Order</a></li>
                                <li><a href="#">Track Products</a></li>
                                <li><a href="#">Technology</a></li>
                            </ul>
                        </div>
                        <div className="button" >
                            <button>Build Your Order</button>
                        </div>
                    </div>
                    <div className="hero-content">
                        <h1>Where Technology Meets <br /> Real <i>Elegance</i> </h1>
                        <p>discover cutting edge smartphones designed for speed style and seamless connection .<br /> elevate your everyday  with technology crafted to keep your ahead.</p>
                        <div className="btn" > 
                            <button id="left">Explore</button>
                            <button id="right">Buy Now </button>
                        </div>
                    </div>
                </div>
            </body>
    );
}

export default HeroSection;
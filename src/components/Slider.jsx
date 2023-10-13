const Sliders = () => {

    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active banner">
                        <img className="d-block w-100" src="Images/slider/1.png" alt="First slide" />
                    </div>
                    <div className="carousel-item banner">
                        <img className="d-block w-100" src="Images/slider/2.png" alt="Second slide" />
                    </div>
                    <div className="carousel-item banner">
                        <img className="d-block w-100" src="Images/slider/3.png" alt="Third slide" />
                    </div>
                    <div className="carousel-item banner">
                        <img className="d-block w-100" src="Images/slider/4.png" alt="Fourth slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </>
    )
}

export default Sliders
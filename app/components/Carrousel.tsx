import styles from './Carrousel.module.css'
export function Carrousel() {
    return (
     
            <div id="carouselExampleFade" className=" carousel slide carousel-fade carousel-dark" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active d-flex justify-content-center ">
                        <img src="mandarina.jpg" className=" d-flex align-items-stretch " alt="mandarina" />
                    </div>
                    <div className="carousel-item d-flex justify-content-center ">
                        <img src="MANDARINA.png" className="d-flex align-items-stretch" alt="mandarina2" />
                    </div>
                    <div className="carousel-item d-flex justify-content-center ">
                        <img src="juicy-mandarine-on-a-white-background-fruit-contour-drawing-icon-illustration-vector.jpg" className="d-flex align-items-stretch" alt="mandarina3" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
  

    );
}
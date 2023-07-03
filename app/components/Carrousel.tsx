import styles from './Carrousel.module.css'
import Image from 'next/image'
export function Carrousel() {
    const imageStyle = {
       
        width: "100%",
        height: "100%",

    }
    return (

        <div id="carouselExampleFade" className=" carousel slide carousel-fade carousel-dark h-100" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner h-100">
                <div className="carousel-item active h-100 w-100 d-flex justify-content-center">
                    <div className={styles.carousel_image_container}>
                        <Image
                            src="/mandarina.jpg"
                            className="d-block w-100"
                            alt="mandarina"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            fill
                        />
                    </div>
                </div>
                <div className="carousel-item  h-100 w-100 d-flex justify-content-center">
                    <div className={styles.carousel_image_container}>
                        <Image
                            src="/MANDARINA.png"
                            className="d-block w-100"
                            alt="mandarina"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            fill
                        />
                    </div>
                </div><div className="carousel-item  h-100 w-100 d-flex justify-content-center">
                    <div className={styles.carousel_image_container}>
                        <Image
                            src="/juicy-mandarine-on-a-white-background-fruit-contour-drawing-icon-illustration-vector.jpg"
                            className="d-block w-100"
                            alt="mandarina"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            fill
                        />
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
        </div>


    );
}
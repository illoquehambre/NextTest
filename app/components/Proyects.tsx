import styles from './Pro.module.css'
export function Proyects() {
  return (
    <div className='container text-center mt-3'>
      <p className='h1'>Proyectos</p>
      <div className='row justify-content-between'>

        <div className="col-sm-5 col-12 col-lg-3 card mt-5" >
          <img src="mandarina.jpg" className="card-img-top" alt="mandarina.jpg" />
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div className=" col-sm-5 col-12 col-lg-3 card mt-5" >
          <img src="mandarina.jpg" className="card-img-top" alt="mandarina.jpg" />
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div className="col-sm-5 col-12 col-lg-3 card mt-5" >
          <img src="mandarina.jpg" className="card-img-top" alt="mandarina.jpg" />
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    </div>


  );
}
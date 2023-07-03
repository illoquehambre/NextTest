import styles from './Proyect.module.css'
import Image from 'next/image'
export function Proyects() {
  return (
    <div className='container text-center mt-3'>
      <p className='h1'>Proyectos</p>
      <div className='row justify-content-between'>

        <div className="col-sm-5 col-12 col-lg-3 card mt-5" >
          <Image src="/mandarina.jpg" width={225} height={200} className="card-Image-top" alt="mandarina.jpg" />
          <div className="card-body">
            <p className="card-text">Content</p>
          </div>
        </div>
        <div className=" col-sm-5 col-12 col-lg-3 card mt-5 d-flex justify-content-center" >
          <Image
            src="/mandarina.jpg"
            className="card-Image-top "
            alt="mandarina"
            width={225} height={200}
          />
          <div className="card-body">
            <p className="card-text">Content</p>
          </div>
        </div>
        <div className="col-sm-5 col-12 col-lg-3 card mt-5" >
          <Image src="/mandarina.jpg" width={225} height={200} className="card-Image-top" alt="mandarina.jpg" />
          <div className="card-body">
            <p className="card-text">Content</p>
          </div>
        </div>
      </div>
    </div>


  );
}
import styles from './Form.module.css'
export function Form() {
  return (
    <div className='container w-50 mt-5 '>
      <form className="row g-3 justify-content-center  ">
        <div className="col-md-6 form-floating">
          <input type="text" className="form-control" id="inputName" />
          
          <label htmlFor="inputName" className="form-label">Nombre Completo</label>
        </div>
        <div className="col-md-6 form-floating">
          
          <input type="email" className="form-control" id="inputEmail4" />
          <label htmlFor="inputEmail4" className="form-label">Email</label>
        </div>

        
        
        <div className="col-md-10 text-center form-floating">
         
          <textarea  className="form-control" id="inputContent" ></textarea>
          <label htmlFor="inputContent"className="form-label">Contenido</label>
        </div>
        
        <div className="col-12 d-flex justify-content-center">
          <button type="submit" className="btn btn-primary">Send Email</button>
        </div>
      </form>
    </div>



  );
}
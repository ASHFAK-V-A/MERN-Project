import React from 'react'

function edituser() {
  return (
    <div>
      <section className="vh-100">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong" >
          <div className="card-body p-5 text-center">

            <h3 className="mb-5">Edit Users</h3>

            <div className="form-outline mb-4">
            <label className="form-label float-start" for="typeEmailX-2">Email</label>
              <input type="email" id="typeEmailX-2" className="form-control form-control-lg" />
            </div>

            <div className="form-outline mb-4">
            <label className="form-label float-start" for="typePasswordX-2">Password</label>
              <input type="password" id="typePasswordX-2" className="form-control form-control-lg" />
            </div>

        
            <div className="form-check d-flex justify-content-start mb-4">
              <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
              <label className="form-check-label" for="form1Example3"> <span className='ms-2'> Remember password  </span></label>
            </div>

            <button className="btn btn-primary btn-lg btn-block mb-3" type="submit">Login</button>

    <p >Don't have an account?<Link className='ms-1' to='/signup'>Click Here</Link> </p>
      

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default edituser

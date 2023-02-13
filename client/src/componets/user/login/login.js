import React from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom';
import axios from '../../../axios/axios'






function Login() {

  const [errors,setErrors] = useState({});
  const [loginform,setloginform]= useState({
    email:"",
    password:""
  })

  const onChangeHandle = (e) => {
    const { name, value } = e.target;
    setloginform({...loginform,[name]:value})
};

console.log(loginform);

const handleSubmit =async (event) => {
  event.preventDefault();

 await axios.post('/login',{
    email:loginform.email,
    password:loginform.password
  }).then((response)=>{
console.log(response);
  }).catch((error)=>{
    console.log(error.response.data);
    setErrors(error.response.data);
    
  })
}
  return (
<section className="vh-100">
  <form onSubmit={handleSubmit}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong" >
          <div className="card-body p-5 text-center">

            <h3 className="mb-5">login</h3>

            <div className="form-outline mb-4">
            <label className="form-label float-start">Email</label>
              <input type="email"
               id="typeEmailX-2" 
               className="form-control form-control-lg" 
                 onChange={onChangeHandle}
                 value={loginform.email} 
                  name="email"/>
                   {errors && <p style={{color:"red"}}>{errors.email}</p>}
            </div>

            <div className="form-outline mb-4">
            <label className="form-label float-start">Password</label>
              <input
               type="password" 
               id="typePasswordX-2"
              className="form-control form-control-lg"
              onChange={onChangeHandle}
              value={loginform.password}
                name="password" />
           {errors && <p style={{color:"red"}}>{errors.password}</p>}
            </div>

        
            <div className="form-check d-flex justify-content-start mb-4">
              <input
               className="form-check-input"
                type="checkbox"
                id="form1Example3" />
              <label className="form-check-label" > <span className='ms-2'> Remember password  </span></label>
            </div>

            <button className="btn btn-primary btn-lg btn-block mb-3" type="submit">Login</button>

    <p >Don't have an account?<Link className='ms-1' to='/signup'>Click Here</Link> </p>
      

          </div>
        </div>
      </div>
    </div>
  </div>
  </form>
</section>
  )
}

export default Login

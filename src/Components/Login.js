import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate();
  return (
    
    <div className='w-50 m-auto loginedit'> <form>
  <div class="mb-3">
    <label class="form-label fs-5 fw-semibold">Email address</label>
    <input type="email" class="form-control"  aria-describedby="emailHelp"/>
    <div  class="form-text ">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label  class="form-label fs-5 fw-semibold ">Password</label>
    <input type="password" class="form-control" />
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" />
    <label class="form-check-label fw-semibold" >Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary btnedit"onClick={()=>navigate('/studentslist')}>Submit</button>
</form>   </div>
 
  )
 
}

export default Login
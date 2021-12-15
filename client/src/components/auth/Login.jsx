import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../actions/auth'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [formData, setformData] = useState({
        email:'',
        password:''
    })

    const {email, password} = formData

    const formDataHandler = (e) => {
        setformData({...formData, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) =>{

        e.preventDefault()
        
        dispatch(login(formData, navigate))

    }

    return (
       <section className='container'>
           <h1 className='large text-primary'>Login In</h1>
           <p className='lead'>
               <i className='fas fa-user'/> Login Into Your Account
           </p>
           <form className='form' onSubmit={submitHandler}>
               <div className='form-group'>
                   <input
                   type='email'
                   placeholder='Email Address'
                   name='email'
                   required
                   value={email}
                   onChange={formDataHandler}
                   />
               </div>
               <div className='form-group'>
                   <input
                   type='password'
                   placeholder='Password'
                   name='password'
                   required
                   minLength='6'
                   value={password}
                   onChange={formDataHandler}
                   />
               </div>
               <button type='submit' className='btn btn-primary'>Login</button>
               <p className='my-1'>
                   Don't have an account? <Link to='/register'>Register here!</Link>
               </p>
           </form>
       </section>
    )
}

export default Login

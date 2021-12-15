import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { register } from '../../actions/auth'

const Register = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:''
    })

    const {name, email, password, confirmPassword} = formData

    const formDataHandler = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        if (confirmPassword !== password) {
            console.log('Password does not match')
        }
        else{
            dispatch(register(formData, navigate))
        }
    }

    return (
        <section className='container'>
        <h1 className='large text-primary'>Register</h1>
        <p className='lead'>
            <i className='fas fa-user'/> Register Your Account
        </p>
        <form className='form' onSubmit={submitHandler}>
            <div className="form-group">
            <input
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={formDataHandler}
            />
            </div>
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
            <div className='form-group'>
                <input
                type='password'
                placeholder='Confirm Password'
                name='confirmPassword'
                required
                minLength='6'
                value={confirmPassword}
                onChange={formDataHandler}
                />
            </div>
            <button type='submit' className='btn btn-primary'>Register</button>
            <p className='my-1'>
                Already have an account? <Link to='/login'>Login Here!</Link>
            </p>
        </form>
    </section>
    )
}

export default Register

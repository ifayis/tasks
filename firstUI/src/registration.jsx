import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    })
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('registration data', formData);
        alert('registration successfull !')
        setFormData({ name: '', email: '', password: '' })
        navigate('/login')
    }

    return (
        <div className='container mt-5'>
            <h2 className='mb-4'>REGISTRATION PAGE</h2>
            <form onSubmit={handleSubmit} className='card p-4 shadow-sm'></form>

            <div className='mb-3'>
                <label className='form-label'>NAME </label>
                <input type='text' name='name' value={formData.name} onChange={handleChange} className='form-control' placeholder='enter your name' required />
            </div>

            <div className='mb-3'>
                <label className='form-label'>E-MAIL </label>
                <input type='email' name='email' value={formData.email} onChange={handleChange} className='form-control' placeholder='enter your e-mail' required />
            </div>

            <div className='mb-3'>
                <label className='form-label'>PASSWORD </label>
                <input type='password' name='password' value={formData.password} onChange={handleChange} className='form-control' placeholder='enter the password' required />
            </div>

            <button type='submit' className='btn btn-primary w-100' onClick={handleSubmit}>REGISTER</button>
        </div>
    )
}
export default Register;
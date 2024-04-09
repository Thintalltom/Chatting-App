import axios from 'axios'
import { useState } from 'react';
import {  useFormik } from 'formik';
const Login = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: async (values, {resetForm}) => {

            const formData = new FormData();
            formData.append('password', values.password);
            formData.append('email', values.email);
           

            try {
                const response = await axios.post(
                    "http://localhost:4001/signup/login/",
                    formData,
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                      }
                );
                console.log(response.data);
            } catch (error) {
                if (error.response && error.response.status === 404) {
                    setErrorMessage('User not found. Please check your email and password.');
                } else {
                    setErrorMessage('An error occurred. Please try again later.');
                }
                console.error('Error during login:', error);
            }
        
        }
    })
    return (
        <div>
             <div className='flex '>
                <div>
                    <img src='https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?w=740&t=st=1712648308~exp=1712648908~hmac=66b7fd8a2f0e5bd43c147c16bb433260622e886644e5a30595093d645c53c8ac' />
                </div>
                <div>
                <form onSubmit={formik.handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                /> <br />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                /> <br />
                <button type="submit">Login</button>
            </form>
                </div>
             </div>

            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
    )
}
export default Login;
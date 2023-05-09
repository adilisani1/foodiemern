import React, { useState } from 'react';


import './Form.css';
import { Link } from 'react-router-dom';

const Signup = () => {

    // const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value

        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <section className='form-bg'>
                <div className='f-wrapper mx-auto'>

                    <div className='formCard'>
                        <h1 className='mb-3 mt-5 text-center'>Sign up</h1>
                        <form className='form-sign' onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    className="form-control"
                                    id="username"
                                    aria-describedby="emailHelp"
                                    value={formData.username}
                                    onChange={handleChange} />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    id="email"
                                    aria-describedby="emailHelp"
                                    value={formData.email}
                                    onChange={handleChange} />
                                {/* <div id="email" className="form-text">We'll never share your email with anyone else.</div> */}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    id="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />


                            </div>

                            <button type="submit" className="">Sign up</button>
                            <div className='col-12 text-center  member'>
                                <span>Already a member?</span>
                                <Link to="/login" className='push-signin'>Sign In</Link>
                            </div>
                        </form>
                    </div>
                </div >
            </section >
        </>
    )
}

export default Signup
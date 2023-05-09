import React, { useState } from 'react';

import './Form.css';

const Login = () => {

    const [formData, setFormData] = useState({
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
                        <h1 className='mb-3 mt-5 text-center'>Sign In</h1>
                        <form className='form-wrap' onSubmit={handleSubmit}>

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

                            <button type="submit" className="">Sign In</button>

                        </form>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Login
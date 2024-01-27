import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Signup() {

    const navigate = useNavigate();

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    useEffect(() => {
        const auth = localStorage.getItem("user");
        if (auth) {
            navigate("/");
        }
    })

    const registerUser = async (e) => {
        e.preventDefault();
        if (name && email && password) {
            try {
                let user = await fetch("http://localhost:5000/register", {
                    method: "POST",
                    body: JSON.stringify({ name: name, email: email, password: password }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                user = await user.json();
                localStorage.setItem("user", JSON.stringify(user));
                navigate("/");
            } catch (error) {
                console.log(error);
            }
        } else {
            alert("Fields can't be left blanked");
        }
    }

    return (
        <section className='container-fluid formParent'>
            <div className='row justify-content-center align-items-center h100'>
                <div className='col-lg-8'>
                    <div className='card bg-form bg-dark py-3'>
                        <h1 className='text-white fw-600 text-center'>Signup</h1>
                        <form className='text-center'>
                            <div className='text-center'>
                                <input placeholder='Enter Your Name' className='formField text-white text-center my-3' type='text' value={name} onChange={(e) => setName(e.target.value)} required />
                            </div>
                            <div className='text-center'>
                                <input placeholder='Enter Your Email' className='formField text-white text-center my-3' type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div className='text-center'>
                                <input placeholder='Enter Your Password' className='formField text-white text-center my-3' type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                            <button className='btn btn-primary my-4 px-5' onClick={registerUser}>Signup</button>
                        </form>
                        <p className='text-white text-center my-3'>Or already have an account? <Link to="/login" className='routerLinks'>Login</Link></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup;
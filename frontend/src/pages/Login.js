import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    useEffect(() => {

        const auth = localStorage.getItem("user");
        if (auth) {
            navigate("/");
        }
    })

    const collectData = async (e) => {
        // e.preventDefault();

        if (email && password) {
            let user = await fetch("http://localhost:5000/login", {
                method: "POST",
                body: JSON.stringify({ email, password }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            user = await user.json();
            if (user.name) {
                localStorage.setItem("user", JSON.stringify(user));
                navigate("/");
            } else {
                alert("credentials didn't matched")
            }
        } else {
            alert("fields cant be left blanked");
        }
    }

    return (
        <section className='container-fluid formParent'>
            <div className='row justify-content-center align-items-center h100'>
                <div className='col-lg-8'>
                    <div className='card bg-form bg-dark py-3'>
                        <h1 className='text-white fw-600 text-center'>Login</h1>
                        <form className='text-center'>
                            <div className='text-center'>
                                <input placeholder='Enter Your Email' className='formField text-white text-center my-3' type='email' onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className='text-center'>
                                <input placeholder='Enter Your Password' className='formField text-white text-center my-3' type='password' onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <Link className='btn btn-primary my-4 px-5' onClick={collectData}>Login</Link>
                        </form>
                        <p className='text-white text-center my-3'>Don't have an account? <Link to="/signup" className='routerLinks'>Signup</Link></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;
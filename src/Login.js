import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import './Login.css'
import { auth } from './firebase'




function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    function login(e) {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/');
            })
            .catch(err => alert(err.message))
    }
    function register(e) {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => { history.push('/');
        }).catch(err => alert(err.message))
    }


    return (
        <div className='login'>
            <Link>
                <img
                    className='login__logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                    alt='s'
                />
            </Link>
            <div className='login__container'>
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input value={password} onChange={e => setPassword(e.target.value)} type='text' type='password' f />
                    <button
                        onClick={login}
                        type='submit'
                        className='login__signInButton'>Sign in
                     </button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button onClick={register}>Create your Amazon Account</button>
            </div>
        </div>
    );
}

export default Login;
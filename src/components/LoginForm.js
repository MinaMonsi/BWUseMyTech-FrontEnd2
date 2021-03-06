//LoginForm pulled from main. There are issues with the styling when the page renders on the screen
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function LoginForm({ Login, error }) {
    //initial login form
    const [details, setDetails] = useState({
        username: '',
        password:''
    })

    const submitHandler = e => {
        e.preventDefault();

        Login(details)
    }
    //error styles
    const errorStyle = {
        fontSize: 16,
        color: 'red',
        textAlign: "center",
    }
    

    return (
        <>
        <h1 className='login-title'>Use My Tech Stuff</h1>
        <img className='login-background' src='https://media.istockphoto.com/photos/designer-workplace-with-graphic-tablet-and-laptop-picture-id961759418?k=6&m=961759418&s=612x612&w=0&h=p9cwuXpJBhp2uPdwP0rfE-tuixKWdkihQN_bcK_q0yk=' alt='tech equipment'/>
        <div className='page-div'>
        <form onSubmit={submitHandler} className='login-page-form'>
            <div className='form-inner'>
                <h2>Login</h2>
                {(error !=='') ? ( <div className='error' style={errorStyle}>{error}</div> ) : ''}
                <div className='form-group'>
                    <label htmlFor='username' placeholder='Username or Email'>Username:</label>
                    <input type='username' name='username' id='username' onChange={e => setDetails({...details, username: e.target.value})} value={details.username} className='username-input'/>
                </div>
                <div className='form-group'>
                    <label htmlFor='password' placeholder='password'>Password:</label>
                    <input type='password' name='password' id='password' onChange={e => setDetails({...details, password: e.target.value})} value={details.password} className='password-input'/>
                </div>
                <input type='submit' value='LOGIN' className='login-button'/>
                <br/>
                <Link to='/signup'>
                    <button className='signUp'>SIGN UP</button>
                </Link>
            </div>
        </form>
        </div>
        </>
    )
}

export default LoginForm


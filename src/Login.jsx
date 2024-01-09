import React from 'react'
import {Link} from 'react-router-dom'
import './link.css';

const Login = () => {
  return (
    <div className='login'>
        <div className='one'>
                <img src='/image/logoN.png' alt='logo' className='logo1' />
            </div>
        <div className='form-element'>
            <form>
                <h3>Sign In</h3>
                <input type='email' placeholder='Email or Phone Number' />
                <input type='password' placeholder='Password' />
                <button>Sign In</button>
                <div className='form-div1'>
                    <div>
                        <input type='checkbox' />
                        <p>Remember Me</p>
                    </div>
                    <p>Need help?</p>
                </div>
                <div className='form-div2'>
                    <p>New to NetFlix?</p><Link to="/" className='link'>Sign Up Now.</Link>
                </div>
                
                <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href='#a'>Learn more.</a></p>
            </form>
        </div>
        <div className='footer'>
            <p>Questions? Contact us.</p>
            <div className='footer-div'>
                <p>FAQ</p>
                <p>Help Center</p>
                <p>Terms of Use</p>
                <p>Privacy</p>
                <p>Cookie Preferences</p>
                <p>Corporate Information</p>
            </div>
        </div>
    </div>
  )
}

export default Login
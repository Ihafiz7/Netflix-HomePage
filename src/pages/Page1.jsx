import React from 'react';
import "./page1.css";
import { Link } from 'react-router-dom';

const Page1 = () => {

    function handleGetStartedClick(){
        document.getElementById("emailInput").click()
    }
  return (
    <div className='page1'>
        <div className='one'>
            <img src='/image/logoN.png' alt='logo' className='logo1' />
            <button className='btn-red'><Link to="/login" className='btn-red'>Sign In</Link></button>
        </div>
        <div className='two'>
            <div className='title-div1'>
                <h1 className='title'>Unlimited movies, TV shows, and more</h1>
                <p>Watch anywhere. Cancel anytime.</p>
            </div>
            <div className='title-div2'>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                <div className='btn-2'>
                    <input type='email' placeholder='Email Address' className='input' id='emailInput'></input>                       
                    <label htmlFor="emailInput" className='btn-red' onClick={handleGetStartedClick}>Get started <i className='material-icons'>arrow_forward_ios</i> </label>
                </div>
            </div>   
        </div>
    </div>
  )
}

export default Page1
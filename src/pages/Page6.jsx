import React from 'react';
import './page6.css';
import './page1.css';
import faqData from '../faqData';

const Page6 = () => {
    const [expandedItemIndex, setExpandedItemIndex] = React.useState(null);

    const toggleAnswer = (index) => {
        setExpandedItemIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    function handleGetStartedClick(){
        document.getElementById("emailInput").click()
    }

    
  return (
    <div className='page6'>
            <div className='pg6-title'>
                <h1 className='title'>Frequently Asked Questions</h1>
                {faqData.map((item,index) => (
                    <div key={index}>
                    <div className='pg6-p' onClick={() =>toggleAnswer(index)}>{item.qus}{expandedItemIndex === index ? <i className='material-icons'>close</i> : <i className='material-icons'>add</i>}</div>
                    {expandedItemIndex === index && (
                        <div className='answer'>{item.answer}</div>
                    )}
                    </div>
                ))}
            </div>
            
            <div className='title-div2'>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                <div className='btn-2'>
                    <input type='email' placeholder='Email Address' className='input' id='emailInput'></input>                       
                    <label htmlFor="emailInput" className='btn-red' onClick={handleGetStartedClick}>Get started <i className='material-icons'>arrow_forward_ios</i> </label>
                </div>
            </div> 
        </div>
  )
}

export default Page6
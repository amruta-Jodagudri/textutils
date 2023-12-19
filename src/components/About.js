import React, { useState } from 'react';

export default function About() {
    const [mystyle , setMyStyle] = useState({
        color: 'white',
        backgroundColor: 'Black'
    })

    const [btntext, setbtntext] = useState('Enable Dark Mode');

    const toggleStyle=()=>{
        if(mystyle.color==='white'){
            setMyStyle({
                color: 'Black',
                backgroundColor: 'white'
            })
            setbtntext('Enable Light mode')
        }
        else{
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setbtntext('Enable Dark mode')
        }
    }

    return (
    <div className='Container mx-10 my-3' style={mystyle}>
        <h1 className='my-3 mx-3'>About us</h1>
            <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze your text</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            Analyzing a text involves breaking down its ideas and structure to understand it better, think critically about it, and draw conclusions. This unit covers different strategies for analyzing print and digital media, as well as how to create graphic organizers to help you analyze what you read.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
               <strong>Easy to use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            way of doing something is convenient, it is easy, or very useful or suitable for a particular purpose.
...a flexible and convenient way of paying for business expenses. 
The family thought it was more convenient to eat in the kitchen.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser compatible</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            Browser compatibility, often known as cross-browser compatibility, refers to whether or not a website or web application functions as intended in any particular browser version on different devices.
            </div>
            </div>
        </div>
        </div>
    </div>
    );
}

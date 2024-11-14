import React from 'react'


export default function Career() {
  return (
    <>

    <div className="contact-container">
            <div className="contact-header">
                <h1>Contact Us</h1>
                
            </div>
            
            <div className="contact-boxes">
                <div className="left-box">
                    <h2>For Business</h2>
                    <p>Combine strengths, achieve more! Collaborate with us to leverage our expertise and create something groundbreaking.</p>
                </div>
                <div className="right-box">
                    <h2>For Customers</h2>
                    <p>Your question and concerns matter we're commited to providing exception customer service.</p>
                </div>
            </div>

            <form className="contact-form">
                <h2>Get in Touch</h2>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="subject">Subject:</label>
                <input type="text" id="subject" name="subject" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="5" required></textarea>

                <button type="submit">Send Message</button>
            </form>

            <div className="contact-info">
                <div className="info-box">
                    <h3>Email:</h3>
                    <p>info@evidyut.com</p>
                </div>
                <div className="info-box">
                    <h3>Phone:</h3>
                    <p>+91 9272091200</p>
                </div>
            </div>
        </div>
    
    
    
    </>
  )
}
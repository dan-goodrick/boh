import React, { useState } from 'react';

function ContactUs() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, message }),
            });

            if (response.ok) {
                console.log('Email sent successfully!');
            } else {
                console.log('Failed to send email.');
            }
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    return (
        <div>
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <label>Message:</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />

                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default ContactUs;

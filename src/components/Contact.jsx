import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './all.css';

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage('');

    emailjs.sendForm(
      'service_kqqv75i',    // Replace with your actual Service ID
      'template_wzxenyr',   // Replace with your actual Template ID
      form.current,
      '1spqZISP8LcHRU6Qz'     // Replace with your actual Public Key
    ).then(
      () => {
        setLoading(false);
        setStatusMessage('✅ Message sent successfully!');
        form.current.reset();
      },
      (error) => {
        setLoading(false);
        setStatusMessage('❌ Failed to send message. Try again later.');
        console.error(error.text);
      }
    );
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Get in Touch</h2>
      <div className="contact-container">
        <div className="contact-text">
          Have a question, project, <br />
          <span style={{ color: "#00ffff" }}>or just want to say hi?</span> <br />
          Feel free to reach out using<br />
          <span style={{ color: "#00ffff" }}>the form on the right.</span>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
          </div>
          <div className="form-group1">
            <textarea name="message" placeholder="Your Message" rows="15" required></textarea>
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          {statusMessage && (
            <p className="status-message">{statusMessage}</p>
          )}
        </form>
      </div>
    </section>
  );
}

 
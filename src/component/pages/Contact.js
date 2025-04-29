import '../../styles/contact.css';
import emailjs from "emailjs-com";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    ).then(
      (result) => {
        alert("Message sent successfully!");
        console.log(result.text);
      },
      (error) => {
        alert("Failed to send message. Try again!");
        console.log(error.text);
      }
    );

    e.target.reset();
  }

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Us</h2>
      <p>Need expert electrical services? Reach out to us today!</p>
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;

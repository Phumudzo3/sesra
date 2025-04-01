function Contact() {
    return (
      <div className="p-10">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p className="mt-4">Get in touch with us for a free consultation.</p>
        <form className="mt-6">
          <input type="text" placeholder="Your Name" className="border p-2 w-full" />
          <input type="email" placeholder="Your Email" className="border p-2 w-full mt-2" />
          <textarea placeholder="Your Message" className="border p-2 w-full mt-2"></textarea>
          <button className="mt-4 bg-yellow-500 text-white px-6 py-2 rounded-lg">Send Message</button>
        </form>
      </div>
    );
  }
  
  export default Contact;
  
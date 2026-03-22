function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-intro">
          <p className="section-label">Contact</p>
          <h2 className="contact-heading">Let’s create something meaningful.</h2>
          <p className="contact-text">
            Whether you’re looking to book a session, collaborate on a creative
            concept, or inquire about availability, I’d love to hear from you.
          </p>
        </div>

        <form className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your email" />

          <label htmlFor="service">Type of session</label>
          <input
            type="text"
            id="service"
            name="service"
            placeholder="Portraits, events, creative shoot..."
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Tell me a little about what you’re looking for..."
          ></textarea>

          <button type="submit" className="contact-button">
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
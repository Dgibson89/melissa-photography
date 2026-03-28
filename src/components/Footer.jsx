import Reveal from './Reveal'

function Footer() {
  return (
    <footer className="footer">
      <Reveal className="footer-container">
        <div className="footer-brand">
          <h3>Melissa Rodas Photography</h3>
          <p>California-based photography focused on light, form, and expression.</p>
        </div>

        <div className="footer-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-social">
          <a href="/">Instagram</a>
          <a href="mailto:hello@example.com">Email</a>
        </div>
      </Reveal>

      <div className="footer-bottom">
        <p>© 2026 Melissa Rodas Photography. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
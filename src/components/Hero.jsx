function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <nav className="hero-nav">
          <h2 className="logo">Melissa Rodas Photography</h2>

          <div className="nav-links">
            <a href="#work">Portfolio</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-content">
          <p className="hero-kicker hero-animate hero-delay-1">California Photographer</p>

          <h1 className="hero-animate hero-delay-2">Photography rooted in light, form, and expression.</h1>

          <p className="hero-text hero-animate hero-delay-3">
            A curated visual space for portraits, still life, conceptual work,
            and experimental imagery.
          </p>

          <div className="hero-buttons hero-animate hero-delay-4">
            <a href="#work" className="btn btn-primary">
              View Portfolio
            </a>

            <a href="#contact" className="btn btn-secondary">
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
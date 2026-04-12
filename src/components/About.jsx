import Reveal from './Reveal'

function About() {
  return (
    <section id="about" className="about">
      <Reveal className="about-container">
        <div className="about-image">
          <img
            src="https://plus.unsplash.com/premium_photo-1717572269305-65d5f9cf8a0d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Photographer portrait"
          />
        </div>

        <div className="about-text">
          <p className="section-label">About</p>
          <h2>Behind the lens</h2>

          <p>
            I’m Melissa, a California-based photographer exploring light, form,
            and cultural identity through my work. My photography blends
            portraiture, still life, and experimental techniques to create
            imagery that feels both intentional and expressive.
          </p>

          <p>
            Each project is an opportunity to tell a story—whether through
            people, objects, or the subtle details that often go unnoticed.
          </p>
        </div>
      </Reveal>
    </section>
  )
}

export default About
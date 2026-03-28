import { useState } from 'react'
import Reveal from './Reveal'

const portfolioItems = [
  {
    id: 1,
    title: 'Portrait Study',
    category: 'Portraits',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
    size: 'large',
  },
  {
    id: 2,
    title: 'Still Life Composition',
    category: 'Still Life',
    image:
      'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=80',
    size: 'default',
  },
  {
    id: 3,
    title: 'City Fragments',
    category: 'City',
    image:
      'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=900&q=80',
    size: 'default',
  },
  {
    id: 4,
    title: 'Experimental Light',
    category: 'Conceptual',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    size: 'large',
  },
  {
    id: 5,
    title: 'Color and Form',
    category: 'Abstract',
    image:
      'https://images.unsplash.com/photo-1511300636408-a63a89df3482?auto=format&fit=crop&w=1200&q=80',
    size: 'wide',
  },
]

const filters = [
  'All',
  'Portraits',
  'Still Life',
  'City',
  'Conceptual',
  'Abstract',
]

function Portfolio() {
  const [selectedItem, setSelectedItem] = useState(null)
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredItems =
    activeFilter === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <section id="work" className="portfolio">
      <Reveal className="portfolio-container">
        <p className="section-label">Portfolio</p>
        <h2 className="portfolio-heading">Selected Work</h2>

        <div className="portfolio-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className={`grid-item ${item.size}`}
              onClick={() => setSelectedItem(item)}
            >
              <img src={item.image} alt={item.title} />

              <div className="grid-overlay">
                <p className="grid-category">{item.category}</p>
                <h3 className="grid-title">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </Reveal>

      {selectedItem && (
        <div className="lightbox" onClick={() => setSelectedItem(null)}>
          <div
            className="lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="lightbox-close"
              onClick={() => setSelectedItem(null)}
              aria-label="Close image preview"
            >
              ×
            </button>

            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="lightbox-image"
            />

            <div className="lightbox-text">
              <p className="lightbox-category">{selectedItem.category}</p>
              <h3>{selectedItem.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Portfolio
import React from 'react'
import PropTypes from 'prop-types'

const ProjectGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.image} className="column is-6">
        <section className="section">
          <p className="has-text-centered">
            <img alt="" src={item.image} />
          </p>
          <h4>{item.name}</h4>
          <p>{item.text}</p>
          {item.links && item.links.map(link => <a href={link.targetURL} > {link.name}</a>)}
        </section>
      </div>
    ))}
  </div>
)

ProjectGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default ProjectGrid

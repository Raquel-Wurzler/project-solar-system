import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    const altText = `Planeta ${planetName}`;
    return (
      <div className="onePlanet" data-testid="planet-card">
        <p className="namePlanet" data-testid="planet-name">{ planetName }</p>
        <img className={ planetName } src={ planetImage } alt={ altText } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;

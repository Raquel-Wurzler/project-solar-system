import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    const card = Planets.map((planet) => (
      <PlanetCard
        key={ planet.name }
        planetName={ planet.name }
        planetImage={ planet.image }
      />));
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {card}
      </div>
    );
  }
}

export default SolarSystem;

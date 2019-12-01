import React from 'react';
import pet from '@frontendmasters/pet';
import Carousel from './Carousel';
import ErrorBoundary from './ErrorBoundary';
import ThemeContext from './ThemeContext';
class Details extends React.Component {
  state = { loading: true };

  componentDidMount() {
    // throw new Error('low');
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false
      });
      // eslint-disable-next-line no-console
    }, console.error);
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading ...</h1>;
    }

    const { name, animal, location, description, breed, media } = this.state;
    return (
      <div className="details">
        <Carousel media={media} />

        <div>
          <h1>{`${name} THE DOG`}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button style={{ backgroundColor: theme }}>Adopt {name}</button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}

// Hello ooo, all I need right now is to get myself Rice, Plantain, and Chicken if possible Moi Moi too
// like I deserve it right?
// Yeeea Yoou doooooooooooooooooooooooooooooooooo!
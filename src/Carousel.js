import React from 'react';

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0
  };

  static getDerivedStateFromProps({ media }) {
    let photos = ['placecorgi.com/600/600'];
    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }

  handleClick = event => {
    this.setState({
      active: +event.target.dataset.index
    });
  };

  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        {/* {(console.log(photos), console.log(active))} */}
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={index}
              src={photo}
              data-index={index}
              onClick={this.handleClick}
              className={index === active ? 'active' : ''}
              alt="Animal Thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;

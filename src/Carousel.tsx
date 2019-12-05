import React from 'react';
import { Photo } from '@frontendmasters/pet';

interface IProps {
  media: Photo[];
}

interface IState {
  active: number;
  photos: string[];
}

class Carousel extends React.Component<IProps, IState> {
  public state = {
    photos: [],
    active: 0
  };

  public static getDerivedStateFromProps({ media }: IProps) {
    let photos = ['placecorgi.com/600/600'];
    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }

  public handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (!(event.target instanceof HTMLElement)) {
      return;
    }

    if (event.target.dataset.index) {
      this.setState({
        active: +event.target.dataset.index
      });
    }
  };

  public render() {
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

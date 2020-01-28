import React from 'react';
import PropTypes from 'prop-types';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from "reactstrap";

const propTypes = {
  activeIndex: PropTypes.number,
  next: PropTypes.func,
  previous: PropTypes.func,
  goToIndex: PropTypes.func,
  setAnimating: PropTypes.func,
  items: PropTypes.array.isRequired
};


const defaultProps = {
  activeIndex: 0,
  next: () => {},
  previous: () => {},
  goToIndex: () => {},
  setAnimating: () => {},
  items: []
};

class BootstrapCarousel extends React.Component {

  render() {

    const { items, activeIndex, goToIndex, next, previous, setAnimating } = this.props;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <img width="auto" src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    )
  }
}

BootstrapCarousel.propTypes = propTypes;
BootstrapCarousel.defaultProps = defaultProps;

export default BootstrapCarousel;

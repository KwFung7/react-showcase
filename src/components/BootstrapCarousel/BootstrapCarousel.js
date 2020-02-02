import React from 'react';
import PropTypes from 'prop-types';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from "reactstrap";

const propTypes = {
  activeIndex: PropTypes.number,
  keyboard: PropTypes.bool,
  interval: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.bool,
  ]),
  mouseEnter: PropTypes.func,
  mouseLeave: PropTypes.func,
  slide: PropTypes.bool,
  enableTouch: PropTypes.bool,
  items: PropTypes.array.isRequired
};

const defaultProps = {
  activeIndex: 0,
  keyboard: true,
  interval: 5000,
  mouseEnter: () => {},
  mouseLeave: () => {},
  slide: true,
  enableTouch: true
};

class BootstrapCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: props.activeIndex,
      animating: false
    };
  }

  next = () => {
    if (this.state.animating) return;
    const nextIndex = this.state.activeIndex === this.props.items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({
      activeIndex: nextIndex
    });
  };

  previous = () => {
    if (this.state.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.props.items.length - 1 : this.state.activeIndex - 1;
    this.setState({
      activeIndex: nextIndex
    });
  };

  goToIndex = (newIndex) => {
    if (this.state.animating) return;
    this.setState({
      activeIndex: newIndex
    });
  };

  setAnimating = (animating) => {
    this.setState({
      animating: animating
    });
  };

  slides = this.props.items.map((item, index) => {
    return (
      <CarouselItem
        onExiting={() => this.setAnimating(true)}
        onExited={() => this.setAnimating(false)}
        key={index}
      >
        <img width="auto" src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  render() {

    const { items, activeIndex, ...otherProps } = this.props;

    return (
      <Carousel
        activeIndex={this.state.activeIndex}
        next={this.next}
        previous={this.previous}
        {...otherProps}
      >
        <CarouselIndicators items={items} activeIndex={this.state.activeIndex} onClickHandler={this.goToIndex} />
        {this.slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    )
  }
}

BootstrapCarousel.propTypes = propTypes;
BootstrapCarousel.defaultProps = defaultProps;

export default BootstrapCarousel;

import React, {useState} from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Button,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../styles/PracticeIndex.css';
import carousel from '../assets/carousel.jpeg';

const carouselStyle = {
  backgroundImage: `url(${carousel})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  minHeight: '90vh',
  marginTop: '5vh',
};

const PracticeIndex = ({practice}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === practice.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? practice.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = practice.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.id}
        active={item.id === activeIndex}
      >
        <img className="carousel-image" src={item.image} alt={item.altText} />
        <CarouselCaption
          captionHeader={<div className="custom-header">{item.caption}</div>}
          captionText={<div className="custom-text">{`${item.age} ${item.gender}`}</div>}
        />
        <NavLink className="navBtn" to={`/practiceshow/${item.id}`}>
          <Button>More info</Button>
        </NavLink>
      </CarouselItem>
    );
  });

  return (
    <div>
      <Carousel activeIndex={activeIndex} next={next} previous={previous} style={carouselStyle}>
        <CarouselIndicators items={practice} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
      <NavLink className="navBtn2" to="/practicenew">
        <Button>Add a Character</Button>
      </NavLink>
    </div>
  );
};

PracticeIndex.propTypes = {
  practice: PropTypes.array.isRequired,
};

export default PracticeIndex;

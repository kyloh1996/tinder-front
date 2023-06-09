import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import practice from '../MockData';

import '../styles/PracticeIndex.css'; 

const items = practice.map((item) => {
  return {
    id: item.id,
    altText: item.name,
    caption: `${item.name}`, 
    image: item.image,
    age: item.age,
    gender: item.gender,
  };
});

const PracticeIndex = (args) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
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
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous} {...args}>
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
};

export default PracticeIndex;

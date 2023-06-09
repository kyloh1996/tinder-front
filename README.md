1. Create the app
2. PLAN 
    a. file/folder organization 
    b. mock data
    c. user interface(UI)
    d. user experience(UX) - user stories
    e. work flow with partner 


PLANNING:   

1. Directories:
- assets: images
- components: header/footer
- pages: API endpoints/restfulRoutes
*** files will be in PascalCase


*** Dont forget the imports and exports

minimum code: 

const App = () => {
    return(
        <> 
        </>
    )
};

export default App;


File/Folder Organization -----> COMPLETE

Routers: 

yarn add react-router-dom

to call upon router components -- Wrap App.js with BrowserRouter  JSX fragments 

## <Route path = "URL" element={your referencing JS} />

carousel:
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    id: 1,
    altText:"Person";
    caption: "Person
  },

];

function Example(args) {
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
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Example;
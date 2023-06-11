import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import PracticeIndex from './PracticeIndex';

const mockPracticeData = [
  {
    id: 1,
    image: 'image1.jpg',
    altText: 'Image 1',
    caption: 'Caption 1',
    age: 25,
    gender: 'Male',
  },
  {
    id: 2,
    image: 'image2.jpg',
    altText: 'Image 2',
    caption: 'Caption 2',
    age: 30,
    gender: 'Female',
  },
];

describe('PracticeIndex', () => {
  it('renders the carousel correctly', () => {
    const { getByText, getByAltText } = render(
      <Router>
        <PracticeIndex practice={mockPracticeData} />
      </Router>
    );

    const carouselCaption1 = getByText('Caption 1');
    const carouselCaption2 = getByText('Caption 2');
    const carouselImage1 = getByAltText('Image 1');
    const carouselImage2 = getByAltText('Image 2');
    const moreInfoButton1 = getByText('More info');
    const moreInfoButton2 = getByText('More info');

    expect(carouselCaption1).toBeInTheDocument();
    expect(carouselCaption2).toBeInTheDocument();
    expect(carouselImage1).toBeInTheDocument();
    expect(carouselImage2).toBeInTheDocument();
    expect(moreInfoButton1).toBeInTheDocument();
    expect(moreInfoButton2).toBeInTheDocument();
  });

  it('navigates to the practice show page on "More info" button click', () => {
    const { getByText, history } = render(
      <Router>
        <PracticeIndex practice={mockPracticeData} />
      </Router>
    );

    const moreInfoButton1 = getByText('More info');
    fireEvent.click(moreInfoButton1);
    expect(history.location.pathname).toBe('/practiceshow/1');

    const moreInfoButton2 = getByText('More info');
    fireEvent.click(moreInfoButton2);
    expect(history.location.pathname).toBe('/practiceshow/2');
  });

  it('navigates to the practice new page on "Add a Character" button click', () => {
    const { getByText, history } = render(
      <Router>
        <PracticeIndex practice={mockPracticeData} />
      </Router>
    );

    const addCharacterButton = getByText('Add a Character');
    fireEvent.click(addCharacterButton);
    expect(history.location.pathname).toBe('/practicenew');
  });
});

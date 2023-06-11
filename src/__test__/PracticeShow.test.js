import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import PracticeShow from './PracticeShow';

describe('PracticeShow', () => {
  it('renders the practice details correctly', () => {
    const practiceId = '1';
    const { getByText, getByAltText } = render(
      <MemoryRouter initialEntries={[`/practiceshow/${practiceId}`]}>
        <Route path="/practiceshow/:id">
          <PracticeShow />
        </Route>
      </MemoryRouter>
    );

    const practice = {
      id: 1,
      name: 'Character Name',
      age: '25',
      gender: 'Male',
      image: 'character.jpg',
      description: 'Character description',
    };

    const practiceTitle = getByText('Character Name');
    const practiceSubtitle = getByText('25 Male');
    const practiceImage = getByAltText('Character Name');
    const practiceDescription = getByText('Description: Character description');

    expect(practiceTitle).toBeInTheDocument();
    expect(practiceSubtitle).toBeInTheDocument();
    expect(practiceImage).toBeInTheDocument();
    expect(practiceImage.src).toContain('character.jpg');
    expect(practiceDescription).toBeInTheDocument();
  });

  it('renders "No practice found" when practice is not found', () => {
    const practiceId = '999'; // Non-existent practice ID
    const { getByText } = render(
      <MemoryRouter initialEntries={[`/practiceshow/${practiceId}`]}>
        <Route path="/practiceshow/:id">
          <PracticeShow />
        </Route>
      </MemoryRouter>
    );

    const noPracticeFound = getByText('No practice found');

    expect(noPracticeFound).toBeInTheDocument();
  });
});

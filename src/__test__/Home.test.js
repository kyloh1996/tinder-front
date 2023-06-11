import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter} from 'react-router-dom';
import Home from './Home';

describe('Home', () => {
  it('renders the home page correctly', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const titleElement = screen.getByText('Welcome to League of Legends Tinder');
    const buttonElement = screen.getByText('Meet the Champions');

    expect(titleElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });
});

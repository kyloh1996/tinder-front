import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

describe('Header Component', () => {
  it('renders the component', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const headerElement = screen.getByText('Practice');
    expect(headerElement).toBeInTheDocument();
  });

  it('has the correct classes and properties', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const navbarElement = screen.getByRole('navigation');
    expect(navbarElement).toHaveClass('me');
    expect(navbarElement).toHaveClass('fixed-top');
    expect(navbarElement).toHaveAttribute('color', 'secondary');
    expect(navbarElement).toHaveAttribute('dark');
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders the footer correctly', () => {
    const { getByText } = render(React.createElement(Footer));
    const footerElement = getByText('© Kyle | 2023');
    expect(footerElement).toBeInTheDocument();
  });

  it('has the correct classes and properties', () => {
    const { container } = render(React.createElement(Footer));
    const navbarElement = container.querySelector('.me-2');
    expect(navbarElement).toBeInTheDocument();
    expect(navbarElement).toHaveClass('fixed-bottom');
    expect(navbarElement).toHaveAttribute('color', 'dark');
    expect(navbarElement).toHaveAttribute('dark');
  });
});

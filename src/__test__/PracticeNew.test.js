import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import PracticeNew from './PracticeNew';

describe('PracticeNew', () => {
  it('renders the modal correctly', () => {
    const { getByText, getByLabelText } = render(
      <Router>
        <PracticeNew />
      </Router>
    );

    const modalTitle = getByText('Add Character');
    const nameLabel = getByLabelText('Name');
    const ageLabel = getByLabelText('Age');
    const genderLabel = getByLabelText('Gender');
    const imageLabel = getByLabelText('Image URL');
    const descriptionLabel = getByLabelText('Description');
    const addButton = getByText('Add');
    const cancelButton = getByText('Cancel');

    expect(modalTitle).toBeInTheDocument();
    expect(nameLabel).toBeInTheDocument();
    expect(ageLabel).toBeInTheDocument();
    expect(genderLabel).toBeInTheDocument();
    expect(imageLabel).toBeInTheDocument();
    expect(descriptionLabel).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
  });

  it('submits the form with correct values and closes the modal', () => {
    const { getByLabelText, getByText, queryByLabelText } = render(
      <Router>
        <PracticeNew />
      </Router>
    );

    const nameInput = getByLabelText('Name');
    const ageInput = getByLabelText('Age');
    const genderSelect = getByLabelText('Gender');
    const imageInput = getByLabelText('Image URL');
    const descriptionInput = getByLabelText('Description');
    const addButton = getByText('Add');
    const cancelButton = getByText('Cancel');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(ageInput, { target: { value: '25' } });
    fireEvent.change(genderSelect, { target: { value: 'male' } });
    fireEvent.change(imageInput, { target: { value: 'image.jpg' } });
    fireEvent.change(descriptionInput, { target: { value: 'Description text' } });

    fireEvent.click(addButton);

    // Check if the form values are reset and the modal is closed
    expect(nameInput.value).toBe('');
    expect(ageInput.value).toBe('');
    expect(genderSelect.value).toBe('');
    expect(imageInput.value).toBe('');
    expect(descriptionInput.value).toBe('');
    expect(queryByLabelText('Name')).toBeNull(); // Modal is closed
  });

  it('cancels the form and closes the modal', () => {
    const { getByText, queryByLabelText } = render(
      <Router>
        <PracticeNew />
      </Router>
    );

    const cancelButton = getByText('Cancel');

    fireEvent.click(cancelButton);

    // Check if the modal is closed
    expect(queryByLabelText('Name')).toBeNull();
  });
});

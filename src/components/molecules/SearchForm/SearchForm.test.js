import React from 'react';
import { render } from '@testing-library/react';

import SearchForm from './SearchForm';

describe('SearchForm component', () => {
  it('should render properly', () => {
    const { getByTestId } = render(<SearchForm />);

    expect(getByTestId('search-form')).toBeInTheDocument();
  });

  it('should render proper placeholder text', () => {
    const { getByPlaceholderText } = render(<SearchForm />);

    expect(
      getByPlaceholderText('Search high-resolution photos')
    ).toBeInTheDocument();
  });
});

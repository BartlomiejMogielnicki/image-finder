import React from 'react';
import { render } from '@testing-library/react';

import Button from './Button';

describe('Button component', () => {
  it('should render properly', () => {
    const { getByTestId } = render(<Button />);

    expect(getByTestId('button')).toBeInTheDocument();
  });

  it('should render proper children', () => {
    const children = '<i className="fas fa-angle-left" />';
    const { getByText } = render(<Button>{children}</Button>);

    expect(getByText(children)).toBeInTheDocument();
  });
});

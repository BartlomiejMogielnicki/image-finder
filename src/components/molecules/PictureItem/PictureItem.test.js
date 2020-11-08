import React from 'react';
import { render } from '@testing-library/react';

import PictureItem from './PictureItem';

describe('PictureItem component', () => {
  const clicked = jest.fn();
  const urlSmall = 'itShoulBeUrl';
  const id = '1';
  it('should render when pass proper props', () => {
    const { getByTestId } = render(
      <PictureItem clicked={clicked} urlSmall={urlSmall} id={id} />
    );

    expect(getByTestId('picture-item')).toBeInTheDocument();
  });
});

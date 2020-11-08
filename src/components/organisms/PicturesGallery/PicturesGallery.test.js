import React from 'react';
import { render } from '@testing-library/react';

import PicturesGallery from './PicturesGallery';

describe('PicturesGallery component', () => {
  const picturesArray = [
    {
      id: '1',
      url: {
        small: 'smallPictureUrl',
        regular: 'regularPictureUrl',
      },
      alt: 'altPictureDescription',
      likes: 100,
      owner: {
        name: 'ownerName',
        image: 'ownerImageUrl',
        twitter: 'ownerTwitterUrl',
      },
    },
    {
      id: '2',
      url: {
        small: 'smallPictureUrl',
        regular: 'regularPictureUrl',
      },
      alt: 'altPictureDescription',
      likes: 200,
      owner: {
        name: 'ownerName',
        image: 'ownerImageUrl',
        twitter: 'ownerTwitterUrl',
      },
    },
  ];
  it('should render with proper props', () => {
    const { getByTestId } = render(
      <PicturesGallery picturesArray={picturesArray} />
    );

    expect(getByTestId('pictures-gallery')).toBeInTheDocument();
  });

  it('should render proper number of images', () => {
    const { getAllByRole } = render(
      <PicturesGallery picturesArray={picturesArray} />
    );

    expect(getAllByRole('img')).toHaveLength(2);
  });

  it('should give elements proper alt description', () => {
    const { getAllByAltText } = render(
      <PicturesGallery picturesArray={picturesArray} />
    );

    expect(getAllByAltText('altPictureDescription')).toHaveLength(2);
  });
});

import React from 'react';
import { render } from '@testing-library/react';

import PictureModal from './PictureModal';

describe('PictureModal component', () => {
  const changePicture = jest.fn();
  const hideModal = jest.fn();
  const pictureIndex = 1;
  const lastIndex = 10;
  const picture = {
    id: '1',
    url: 'regularPictureUrl',
    alt: 'altPictureDescription',
    likes: 100,
    location: {
      country: 'pictureLocationCountry',
      city: 'pictureLocationCity',
    },
    owner: {
      name: 'ownerName',
      image: 'ownerImageUrl',
      twitter: 'ownerTwitterUrl',
    },
  };
  it('should render properly', () => {
    const { getByTestId } = render(
      <PictureModal
        picture={picture}
        changePicture={changePicture}
        hideModal={hideModal}
        lastIndex={lastIndex}
        pictureIndex={pictureIndex}
      />
    );

    expect(getByTestId('picture-modal')).toBeInTheDocument();
  });

  it('should render proper info elements', () => {
    const { getByText } = render(
      <PictureModal
        picture={picture}
        changePicture={changePicture}
        hideModal={hideModal}
        lastIndex={lastIndex}
        pictureIndex={pictureIndex}
      />
    );

    expect(getByText('pictureLocationCountry')).toBeInTheDocument();
    expect(getByText(', pictureLocationCity')).toBeInTheDocument();
    expect(getByText('ownerName')).toBeInTheDocument();
    expect(getByText('@ownerTwitterUrl')).toBeInTheDocument();
    expect(getByText('100')).toBeInTheDocument();
  });
});

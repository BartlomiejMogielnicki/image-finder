import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import PictureItem from '../../molecules/PictureItem/PictureItem';

const StyledListWrapper = styled.ul``;

const PicturesGallery = ({ picturesArray }) => {
  const pictures = picturesArray.map((picture) => (
    <PictureItem
      key={picture.id}
      id={picture.id}
      urlSmall={picture.url.small}
    />
  ));

  return <StyledListWrapper>{pictures}</StyledListWrapper>;
};

PicturesGallery.propTypes = {
  picturesArray: PropTypes.array.isRequired,
};

export default PicturesGallery;

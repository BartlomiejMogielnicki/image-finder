import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { fetchSinglePicture } from '../../../utils/index';

import PictureItem from '../../molecules/PictureItem/PictureItem';
import PictureModal from '../PictureModal/PictureModal';

const StyledListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
`;

const PicturesGallery = ({ picturesArray }) => {
  const [modalPicture, setModalPicture] = useState('');

  const handleGetPicture = async (id) => {
    const fetchedPicture = await fetchSinglePicture(id);
    setModalPicture(fetchedPicture);
  };

  const handleShowHideModal = () => {
    setModalPicture('');
  };

  const pictures = picturesArray.map((picture) => (
    <PictureItem
      key={picture.id}
      id={picture.id}
      urlSmall={picture.url.small}
      clicked={() => handleGetPicture(picture.id)}
    />
  ));

  return (
    <StyledListWrapper>
      {pictures}
      {modalPicture && (
        <PictureModal picture={modalPicture} hideModal={handleShowHideModal} />
      )}
    </StyledListWrapper>
  );
};

PicturesGallery.propTypes = {
  picturesArray: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PicturesGallery;

import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import PictureItem from '../../molecules/PictureItem/PictureItem';
import PictureModal from '../PictureModal/PictureModal';

const StyledListWrapper = styled.ul``;

const PicturesGallery = ({ picturesArray }) => {
  const [modalPicture, setModalPicture] = useState('');

  const handleShowHideModal = () => {
    setModalPicture('');
  };

  const pictures = picturesArray.map((picture) => (
    <PictureItem
      key={picture.id}
      id={picture.id}
      urlSmall={picture.url.small}
      clicked={() => setModalPicture(picture.url.regular)}
    />
  ));

  return (
    <StyledListWrapper>
      {pictures}
      {modalPicture && (
        <PictureModal
          pictureUrl={modalPicture}
          hideModal={handleShowHideModal}
        />
      )}
    </StyledListWrapper>
  );
};

PicturesGallery.propTypes = {
  picturesArray: PropTypes.array.isRequired,
};

export default PicturesGallery;

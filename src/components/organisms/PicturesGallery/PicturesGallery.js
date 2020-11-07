import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { fetchPictures, fetchSinglePicture } from '../../../utils/index';

import PictureItem from '../../molecules/PictureItem/PictureItem';
import PictureModal from '../PictureModal/PictureModal';

const StyledListWrapper = styled.ul`
  width: 100%;
  max-width: 1500px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-auto-rows: minmax(50px, auto);
  grid-gap: 20px 10px;
`;

const PicturesGallery = ({ picturesArray }) => {
  const [modalPicture, setModalPicture] = useState('');
  const [modalPictureIndex, setModalPictureIndex] = useState('');

  const handleGetPicture = async (id, index) => {
    const fetchedPicture = await fetchSinglePicture(id);
    setModalPicture(fetchedPicture);
    setModalPictureIndex(index);
  };

  const handleHideModal = () => {
    setModalPicture('');
  };

  const handleChangeModalPicture = (index) => {
    handleGetPicture(picturesArray[index].id, index);
  };

  const pictures = picturesArray.map((picture, index) => (
    <PictureItem
      key={picture.id}
      id={picture.id}
      urlSmall={picture.url.small}
      clicked={() => handleGetPicture(picture.id, index)}
    />
  ));

  return (
    <StyledListWrapper>
      {pictures}
      {modalPicture && (
        <PictureModal
          picture={modalPicture}
          pictureIndex={modalPictureIndex}
          lastIndex={picturesArray.length - 1}
          hideModal={handleHideModal}
          changePicture={handleChangeModalPicture}
        />
      )}
    </StyledListWrapper>
  );
};

PicturesGallery.propTypes = {
  picturesArray: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PicturesGallery;

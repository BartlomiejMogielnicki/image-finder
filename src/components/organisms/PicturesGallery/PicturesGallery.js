import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { fetchSinglePicture } from '../../../utils/index';

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

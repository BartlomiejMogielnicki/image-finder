import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';

import PictureItem from '../../molecules/PictureItem/PictureItem';
import PictureModal from '../PictureModal/PictureModal';

const StyledListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
`;

const PicturesGallery = ({ picturesArray }) => {
  const [modalPicture, setModalPicture] = useState('');

  const handleGetPicture = (id) => {
    axios
      .get(`https://api.unsplash.com/photos/${id}`, {
        params: {
          client_id: process.env.REACT_APP_API_KEY,
        },
      })
      .then((response) => {
        const item = response.data;
        const picture = {
          id: item.id,
          url: item.urls.regular,
          likes: item.likes,
          location: {
            country: item.location.country,
            city: item.location.city,
          },
          owner: {
            name: item.user.name,
            image: item.user.profile_image.small,
            twitter: item.user.twitter_username,
          },
        };
        setModalPicture(picture);
      })
      .catch((error) => console.log(error));
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

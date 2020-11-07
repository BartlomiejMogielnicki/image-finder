import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from '../../atoms/Button/Button';

const StyledModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #fff;
  z-index: 1;
`;

const StyledOwnerData = styled.div`
  position: absolute;
  top: 15px;
  left: 20px;
  display: flex;
  align-items: center;
`;

const StyledParagraph = styled.div`
  margin-left: 5px;
  font-weight: bold;
`;

const StyledOwnerImage = styled.img`
  margin-right: 10px;
  height: 35px;
  width: 35px;
  border-radius: 50%;
`;

const StyledOwnerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`;

const StyledLikesInfo = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLocationInfo = styled.div`
  position: absolute;
  left: 20px;
  bottom: 20px;
  display: flex;
  align-items: center;
`;

const StyledImage = styled.img`
  max-width: 900px;
  height: 80%;
  max-height: 90vh;
`;

const StyledIcon = styled.i`
  color: green;
`;

const StyledModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  cursor: zoom-out;
`;

const PictureModal = ({
  picture,
  pictureIndex,
  lastIndex,
  hideModal,
  changePicture,
}) => {
  const twitterUrl = `https://twitter.com/${picture.owner.twitter}`;
  return (
    <StyledModalWrapper>
      <StyledContainer>
        <StyledOwnerData>
          <StyledOwnerImage src={picture.owner.image} alt="" />
          <StyledOwnerInfo>
            <StyledParagraph>{picture.owner.name}</StyledParagraph>
            <a href={twitterUrl} target="_blank" rel="noreferrer">
              {picture.owner.twitter ? `@${picture.owner.twitter}` : null}
            </a>
          </StyledOwnerInfo>
        </StyledOwnerData>
        <StyledLikesInfo>
          <StyledIcon className="fas fa-thumbs-up" />
          <StyledParagraph>{picture.likes}</StyledParagraph>
        </StyledLikesInfo>
        {picture.location.country && (
          <StyledLocationInfo>
            <i className="fas fa-map-marker-alt" />
            <StyledParagraph>{picture.location.country}</StyledParagraph>,
            <StyledParagraph>{picture.location.city}</StyledParagraph>
          </StyledLocationInfo>
        )}
        <StyledImage src={picture.url} alt="" />
        {pictureIndex !== 0 && (
          <Button leftArrow clicked={() => changePicture(pictureIndex - 1)}>
            <i className="fas fa-angle-left" />
          </Button>
        )}
        {pictureIndex !== lastIndex && (
          <Button rightArrow clicked={() => changePicture(pictureIndex + 1)}>
            <i className="fas fa-angle-right" />
          </Button>
        )}
      </StyledContainer>
      <StyledModalBackdrop onClick={() => hideModal()} />
    </StyledModalWrapper>
  );
};

PictureModal.propTypes = {
  picture: PropTypes.shape({
    id: PropTypes.string,
    url: PropTypes.string,
    likes: PropTypes.number,
    location: PropTypes.shape({
      country: PropTypes.string,
      city: PropTypes.string,
    }),
    owner: PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      twitter: PropTypes.string,
    }),
  }).isRequired,
  pictureIndex: PropTypes.number.isRequired,
  lastIndex: PropTypes.number.isRequired,
  hideModal: PropTypes.func.isRequired,
  changePicture: PropTypes.func.isRequired,
};

export default PictureModal;

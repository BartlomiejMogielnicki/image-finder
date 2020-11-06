import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
`;

const StyledContainer = styled.div`
  width: 1100px;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #fff;
  z-index: 1;
`;

const StyledOwnerData = styled.div`
  position: absolute;
  top: 20px;
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

const StyledImage = styled.div`
  width: 80%;
  height: 80%;
  background-image: url(${(props) => props.pictureUrl});
  background-position: center;
  background-size: cover;
`;

const StyledModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;

const PictureModal = ({ picture, hideModal }) => {
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
          <i className="fas fa-thumbs-up" />
          <StyledParagraph>{picture.likes}</StyledParagraph>
        </StyledLikesInfo>
        {picture.location.country && (
          <StyledLocationInfo>
            <i className="fas fa-map-marker-alt" />
            <StyledParagraph>{picture.location.country}</StyledParagraph>,
            <StyledParagraph>{picture.location.city}</StyledParagraph>
          </StyledLocationInfo>
        )}
        <StyledImage pictureUrl={picture.url} />
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
  hideModal: PropTypes.func.isRequired,
};

export default PictureModal;

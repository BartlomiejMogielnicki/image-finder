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

const StyledImage = styled.div`
  width: 800px;
  height: 600px;
  background-image: url(${(props) => props.pictureUrl});
  z-index: 1;
`;

const StyledModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const PictureModal = ({ pictureUrl, hideModal }) => (
  <StyledModalWrapper>
    <StyledImage pictureUrl={pictureUrl} />
    <StyledModalBackdrop onClick={() => hideModal()} />
  </StyledModalWrapper>
);

PictureModal.propTypes = {
  pictureUrl: PropTypes.string.isRequired,
  hideModal: PropTypes.func.isRequired,
};

export default PictureModal;

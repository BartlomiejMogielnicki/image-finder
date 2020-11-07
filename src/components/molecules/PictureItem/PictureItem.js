import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledWrapper = styled.li`
  width: 425px;
  justify-self: center;
  cursor: zoom-in;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 400px;
  object-fit: cover;
  transition: 0.3s;

  :hover {
    transform: scale(1.05);
  }
`;

const PictureItem = ({ id, urlSmall, clicked }) => (
  <StyledWrapper id={id} onClick={clicked}>
    <StyledImage src={urlSmall} alt="" />
  </StyledWrapper>
);

PictureItem.propTypes = {
  id: PropTypes.string.isRequired,
  urlSmall: PropTypes.string.isRequired,
  clicked: PropTypes.func.isRequired,
};

export default PictureItem;

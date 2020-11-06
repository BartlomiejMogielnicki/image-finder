import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledWrapper = styled.li`
  width: 400px;
  height: 100%;
  min-height: 300px;
  background-image: url(${(props) => props.urlSmall});
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const PictureItem = ({ id, urlSmall, clicked }) => (
  <StyledWrapper id={id} urlSmall={urlSmall} onClick={clicked} />
);

PictureItem.propTypes = {
  id: PropTypes.string.isRequired,
  urlSmall: PropTypes.string.isRequired,
  clicked: PropTypes.func.isRequired,
};

export default PictureItem;

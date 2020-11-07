import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import PropTypes from 'prop-types';

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(360deg)
  }
`;

const StyledLoadingSpinner = styled.div`
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2.5rem;
  color: white;
  animation: ${rotate} 2s linear infinite;

  ${({ center }) =>
    center &&
    css`
      bottom: 50%;
      transform: translateX(-50%, -50%);
      font-size: 4rem;
    `}
`;

const LoadingSpinner = ({ center }) => (
  <StyledLoadingSpinner center={center}>
    <i className="fas fa-spinner" />
  </StyledLoadingSpinner>
);

LoadingSpinner.propTypes = {
  center: PropTypes.string,
};

LoadingSpinner.defaultProps = {
  center: null,
};

export default LoadingSpinner;

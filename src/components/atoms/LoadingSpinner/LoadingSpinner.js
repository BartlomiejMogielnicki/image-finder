import React from 'react';
import styled, { keyframes } from 'styled-components';

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
  font-size: 2rem;
  color: white;
  animation: ${rotate} 2s linear infinite;
`;

const LoadingSpinner = () => (
  <StyledLoadingSpinner>
    <i className="fas fa-spinner" />
  </StyledLoadingSpinner>
);

export default LoadingSpinner;

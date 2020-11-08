import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  position: absolute;
  bottom: 50%;
  transform: translateY(50%);
  font-size: 5rem;
  color: white;

  @media (max-width: 1400px) and (orientation: portrait) {
    bottom: -50px;
  }

  ${({ leftArrow }) =>
    leftArrow &&
    css`
      left: -100px;

      @media (max-width: 1400px) and (orientation: portrait) {
        left: 50%;
        transform: translate(-150%, 50%);
      }
    `}

  ${({ rightArrow }) =>
    rightArrow &&
    css`
      right: -100px;

      @media (max-width: 1400px) and (orientation: portrait) {
        right: 50%;
        transform: translate(150%, 50%);
      }
    `}
`;

const Button = ({ clicked, children, leftArrow, rightArrow }) => (
  <StyledButton
    onClick={clicked}
    leftArrow={leftArrow}
    rightArrow={rightArrow}
    data-testid="button"
  >
    {children}
  </StyledButton>
);

Button.propTypes = {
  clicked: PropTypes.func,
  children: PropTypes.node,
  leftArrow: PropTypes.bool,
  rightArrow: PropTypes.bool,
};

Button.defaultProps = {
  clicked: null,
  children: null,
  leftArrow: false,
  rightArrow: false,
};

export default Button;

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 5rem;
  color: white;

  ${({ leftArrow }) =>
    leftArrow &&
    css`
      left: -100px;
    `}

  ${({ rightArrow }) =>
    rightArrow &&
    css`
      right: -100px;
    `}
`;

const Button = ({ clicked, children, leftArrow, rightArrow }) => (
  <StyledButton onClick={clicked} leftArrow={leftArrow} rightArrow={rightArrow}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  clicked: PropTypes.func,
  children: PropTypes.any,
  leftArrow: PropTypes.string,
};

Button.defaultProps = {
  clicked: null,
  children: null,
  leftArrow: null,
};

export default Button;

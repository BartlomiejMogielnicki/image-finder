import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button``;

const Button = ({ clicked, children }) => (
  <StyledButton onClick={clicked}>{children}</StyledButton>
);

Button.propTypes = {
  clicked: PropTypes.func,
  chldren: PropTypes.any,
};

Button.defaultProps = {
  clicked: null,
  children: null,
};

export default Button;

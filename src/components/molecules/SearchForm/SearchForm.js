import React from 'react';
import styled from 'styled-components';

import Button from '../../atoms/Button/Button';

const StyledForm = styled.form``;

const SearchForm = () => (
  <StyledForm>
    <input type="text" />
    <Button />
  </StyledForm>
);

export default SearchForm;

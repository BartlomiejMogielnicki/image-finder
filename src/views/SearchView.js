import React from 'react';
import styled from 'styled-components';

import SearchForm from '../components/molecules/SearchForm/SearchForm';

const StyledWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ddd;
`;

const SearchView = () => {
  return (
    <StyledWrapper>
      <SearchForm />
    </StyledWrapper>
  );
};

export default SearchView;

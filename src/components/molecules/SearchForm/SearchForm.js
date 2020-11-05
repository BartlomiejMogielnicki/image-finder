import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

const StyledForm = styled.form`
  padding-left: 10px;
  width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
`;

const StyledIcon = styled.i`
  font-size: 1.3rem;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
`;

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [submittedTerm, setSubmittedTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedTerm(searchTerm);
  };

  return (
    <StyledForm onSubmit={(e) => handleSubmit(e)}>
      <StyledIcon className="fas fa-search" />
      <StyledInput
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {submittedTerm && (
        <Redirect to={{ pathname: '/results', state: submittedTerm }} />
      )}
    </StyledForm>
  );
};

export default SearchForm;

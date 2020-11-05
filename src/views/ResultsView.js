import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import SearchForm from '../components/molecules/SearchForm/SearchForm';

const StyledWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ddd;
`;

const StyledHeading = styled.h2``;

const ResultsView = ({ location }) => {
  const { state } = location;
  return (
    <StyledWrapper>
      <SearchForm />
      <StyledHeading>{state}</StyledHeading>
    </StyledWrapper>
  );
};

ResultsView.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
};

ResultsView.defaultProps = {
  location: {
    pathname: '',
  },
};

export default ResultsView;

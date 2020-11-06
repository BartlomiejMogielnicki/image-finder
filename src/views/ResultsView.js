import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

import { fetchPictures } from '../utils/index';

import SearchForm from '../components/molecules/SearchForm/SearchForm';
import PicturesGallery from '../components/organisms/PicturesGallery/PicturesGallery';

const StyledWrapper = styled.div`
  padding-bottom: 100px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ddd;
`;

const StyledHeading = styled.h2``;

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
  animation: ${rotate} 2s linear infinite;
`;

const ResultsView = ({ location }) => {
  const { state: searchTerm } = location;

  const [fetchedPictures, setFetchedPictures] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetPictures = async () => {
    const fetchedPicturesArray = await fetchPictures(searchTerm, pageNumber);
    setFetchedPictures(fetchedPicturesArray);
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };

  const handleGetMorePictures = async () => {
    const fetchedPicturesArray = await fetchPictures(searchTerm, pageNumber);
    setFetchedPictures([...fetchedPictures, ...fetchedPicturesArray]);
    setIsLoading(false);
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
      setIsLoading(true);
      handleGetMorePictures();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pageNumber]);

  useEffect(() => {
    handleGetPictures();
  }, [searchTerm]);

  return (
    <StyledWrapper>
      <SearchForm />
      <StyledHeading>{searchTerm}</StyledHeading>
      {fetchedPictures && <PicturesGallery picturesArray={fetchedPictures} />}
      {isLoading && (
        <StyledLoadingSpinner>
          <i className="fas fa-spinner" />
        </StyledLoadingSpinner>
      )}
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

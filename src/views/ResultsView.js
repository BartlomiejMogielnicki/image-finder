import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { fetchPictures } from '../utils/index';

import SearchForm from '../components/molecules/SearchForm/SearchForm';
import PicturesGallery from '../components/organisms/PicturesGallery/PicturesGallery';
import LoadingSpinner from '../components/atoms/LoadingSpinner/LoadingSpinner';

const StyledWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 100px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ddd;
`;

const StyledHeading = styled.h2`
  margin: 20px;
  font-size: 2rem;
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
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
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
      {isLoading && <LoadingSpinner />}
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

import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

import { fetchPictures } from '../utils/index';

import image1 from '../images/image1.jpg';
import SearchForm from '../components/molecules/SearchForm/SearchForm';
import PicturesGallery from '../components/organisms/PicturesGallery/PicturesGallery';
import LoadingSpinner from '../components/atoms/LoadingSpinner/LoadingSpinner';

const showIn = keyframes`
from {
  background-color: rgba(0, 0, 0, .7);
}

to {
  background-color: rgba(0, 0, 0, 0.8);
}
`;

const StyledWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 100px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  animation: ${showIn} 1s linear forwards;
`;

const StyledHeading = styled.h2`
  margin: 20px;
  text-transform: capitalize;
  color: white;
  font-size: 2rem;
`;

const StyledBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: url(${image1});
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

const ResultsView = ({ location }) => {
  const { state: searchTerm } = location;

  const [galleryPictures, setGalleryPictures] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetPictures = async () => {
    const fetchedPicturesArray = await fetchPictures(searchTerm, 1);
    setGalleryPictures(fetchedPicturesArray);
    setIsInitialLoading(false);
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };

  const handleGetMorePictures = async () => {
    const fetchedPicturesArray = await fetchPictures(searchTerm, pageNumber);
    setGalleryPictures([...galleryPictures, ...fetchedPicturesArray]);
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
    setPageNumber(1);
  }, [searchTerm]);

  return (
    <StyledWrapper>
      <SearchForm />
      <StyledHeading>{searchTerm}</StyledHeading>
      {galleryPictures && <PicturesGallery picturesArray={galleryPictures} />}
      {isInitialLoading && <LoadingSpinner center />}
      {isLoading && <LoadingSpinner />}
      <StyledBackground />
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

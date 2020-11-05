import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';

import SearchForm from '../components/molecules/SearchForm/SearchForm';
import PicturesGallery from '../components/organisms/PicturesGallery/PicturesGallery';

const StyledWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ddd;
`;

const StyledHeading = styled.h2``;

const ResultsView = ({ location }) => {
  const { state: searchTerm } = location;

  const [fetchedPictures, setFetchedPictures] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.unsplash.com/search/photos', {
        params: {
          client_id: process.env.REACT_APP_API_KEY,
          query: searchTerm,
        },
      })
      .then((response) => {
        const picturesArray = response.data.results.map((item) => ({
          id: item.id,
          url: {
            small: item.urls.small,
            regular: item.urls.regular,
          },
          likes: item.likes,
          owner: item.user.name,
        }));
        setFetchedPictures(picturesArray);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <StyledWrapper>
      <SearchForm />
      <StyledHeading>{searchTerm}</StyledHeading>
      {fetchedPictures && <PicturesGallery picturesArray={fetchedPictures} />}
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

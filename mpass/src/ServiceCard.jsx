import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';
import PropTypes from 'prop-types';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`;

const ExploreListingCard = ({
  id,
  title,
  city,
  country,
  price,
  thumbnail,
  beds,
  bedrooms,
  baths,
  review,
  rating,
}) => {
  useEffect(() => {
  }, []);
  return (
    <Card id={id} sx={{ width: 300, height: 360 }}>
      <StyledLink to={`/listing/${id}`}>
        <CardMedia
          name="listingImg"
          component="img"
          width="300"
          height="200"
          objectfit="cover"
          image={thumbnail}
        />
      </StyledLink>
      <CardContent>
        <StyledLink to={`/listing/${id}`}>
          <Grid container display="flex" direction="row" spacing={2}>
            <Grid item xs={8}>
              <Typography variant="body2">
                {title}
              </Typography>
              <Typography variant="body2">
                {city}, {country}
              </Typography>
              <Typography>
                <b>${price}/night</b>
              </Typography>
              <Grid item alignContent="center" sx={{ display: 'flex', direction: 'row' }}>
                <Rating sx={{ margin: 'auto' }} name="rating" readOnly value={rating} precision={0.5} />
                <p>({review})</p>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={1} alignItems="flex-end">
                <Chip label={`${beds} BEDS`} />
                <Chip label={`${bedrooms} BEDROOMS`} />
                <Chip label={`${baths} BATHS`} />
              </Stack>
            </Grid>
          </Grid>
        </StyledLink>
      </CardContent>
    </Card>
  );
};

ExploreListingCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  city: PropTypes.string,
  country: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
  beds: PropTypes.number,
  bedrooms: PropTypes.number,
  baths: PropTypes.number,
  review: PropTypes.number,
  rating: PropTypes.number,
};

export default ExploreListingCard;

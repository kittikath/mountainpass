import React, { useEffect } from 'react';
import { Typography, Card, CardContent, Grid } from '@mui/material';
import PropTypes from 'prop-types';


const ServiceCard = ({
  id,
  name,
  version,
  created,
}) => {
  useEffect(() => {
  }, []);
  return (
    <Card id={id} sx={{ width: 300, height: 360 }}>
      <CardContent>
        <Grid container display="flex" direction="row" spacing={2}>
          <Grid item xs={8}>
            <Typography variant="body2">
              {name}
            </Typography>
            <Grid item alignContent="center" sx={{ display: 'flex', direction: 'row' }}>
              <p>({version})</p>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

ServiceCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  version: PropTypes.string,
  created: PropTypes.string,
};

export default ServiceCard;

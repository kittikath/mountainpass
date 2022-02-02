import React from 'react';
import styled from 'styled-components';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export const getAPI = async () => {
    const response = await fetch('http://cgi.cse.unsw.edu.au/~cs6080/data/score.json', {
      method: 'GET',
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error);
    }
    return data;
}

const Dashboard = () => {
    return (
        <div className="App-header">
            <Container maxWidth="lg">
                <h5 style={{color: "#555555", fontSize: "20px", textAlign: "left"}}>
                Quick Actions
                </h5>
                <Stack spacing={2} display="flex" direction="row" flexWrap="wrap">
                    <Button variant="outlined">Add Service</Button>
                    <Button variant="outlined">Deploy Gatsby Website</Button>
                    <Button variant="contained">Deploy Node Project</Button>
                </Stack>
            </Container>
            <Container maxWidth="lg">
                <h5 style={{color: "#555555", fontSize: "20px", textAlign: "left"}}>
                Services
                </h5>
                <Stack spacing={2} display="flex" direction="row" flexWrap="wrap">
                    <Button variant="outlined">Add Service</Button>
                    <Button variant="outlined">Deploy Gatsby Website</Button>
                    <Button variant="contained">Deploy Node Project</Button>
                </Stack>
            </Container>
        </div>
    );
  };
  
  export default Dashboard;
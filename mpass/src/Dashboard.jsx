import React from 'react';
import styled from 'styled-components';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Services from './Services';

export const OutlinedButton = styled.button`
    color: #999999;
    border: 1px dashed #999999;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 1rem;
    margin: 1rem;
    padding: 1rem;
    width: 10rem;
    height: 6rem;
`;

export const SolidButton = styled.button`
    background: #FF3232;
    color: #FFFFFF;
    font-size: 1rem;
    margin: 1rem;
    border-radius: 5px;
    padding: 1rem;
    border: none;
    width: 10rem;
    height: 6rem;
`;

const Dashboard = () => {

    
    return (
        <div className="App-header">
            <Container maxWidth="lg">
                <h5 style={{color: "#555555", fontSize: "20px", textAlign: "left"}}>Quick Actions</h5>
                <Stack spacing={2} display="flex" direction="row" flexWrap="wrap" alignItems="Center">
                    <OutlinedButton>Add Service</OutlinedButton>
                    <OutlinedButton>Deploy Gatsby Website</OutlinedButton>
                    <SolidButton>Deploy Node Project</SolidButton>
                </Stack>
                <Services/>
            </Container>
            
        </div>
    );
  };
  
  export default Dashboard;
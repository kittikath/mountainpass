import React, { useEffect } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export const OutlinedButton = styled.button`
    background-color: transparent;
    color: #999999;
    border: 1px dashed #999999;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 1rem;
    margin: 1rem;
    padding: 1rem;
    width: 100%;
`;

export const SmallContainer = styled.div`
  border: 0.5px solid #999999;
  background: #FFFFFF;
  border-radius: 15px 15px 0px 0px;
  margin: 2rem;
  padding: 0rem 2rem;
  display: flex;
  flex-direction: column;
`;

const flexStyling = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'Center',
  };

export const getAPI = async () => {
    const base64 = require('base-64');
    const username = 'kath';
    const password = 'hbs4'
    const response = await fetch('https://interview-web-service.cloud1.zipdrop.xyz/api/v1/projects?page=1', {
      method: 'GET',
      headers: new Headers({
        "Authorization": `Basic ${base64.encode(`${username}:${password}`)}`
      }),

    });
    const data = await response.json();
    console.log(data);
    if (!response.ok) {
      throw new Error(data.error);
    }
    return data;
}


const Services = () => {
    useEffect(() => {
        getAPI();
    }, []);
        
    return (
        <SmallContainer>
            <h5 style={{color: "#555555", fontSize: "20px", textAlign: "left"}}>Services</h5>
            <div style={flexStyling}>
                <TextField id="standard-basic" label="Standard" variant="standard" />
                <Button variant="outlined">Add Service</Button>
            </div>
            <OutlinedButton>Add Service</OutlinedButton>
            
        </SmallContainer>
  );
};

export default Services;

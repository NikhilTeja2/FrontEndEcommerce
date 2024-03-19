import React from 'react';
import { Container, Typography, Grid, Box, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ContactPage = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '40px', border: '2px solid #ccc', padding: '20px', borderRadius: '10px' }}>
      <Typography variant="h4" gutterBottom style={{ color: 'white' }}>
        Contact Us
      </Typography>
      <Typography variant="body1" paragraph style={{ color: 'white' }}>
        We'd love to hear from you! Feel free to reach out using the following contact details.
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box display="flex" alignItems="center">
            <EmailIcon style={{ marginRight: '10px', color: '' }} />
            <Typography variant="body1" style={{ color: '' }}>crownsclothing@gmail.com</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box display="flex" alignItems="center">
            <PhoneIcon style={{ marginRight: '10px', color: '#28A745' }} />
            <Typography variant="body1" style={{ color: '' }}>7674934065</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" alignItems="center">
            <LocationOnIcon style={{ marginRight: '10px', color: '#DC3545' }} />
            <Typography variant="body1" style={{ color: '' }}>Sattva Knowledge City,Silpa Gram Craft Village , Hyderabad</Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactPage;

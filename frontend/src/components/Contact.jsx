import { Box, Container, Typography } from '@mui/material';

function Contact() {
  return (
    <Box sx={{ py: 8, bgcolor: '#171717', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ color: 'white', mb: 4 }}>
          Contact Us
        </Typography>
        {/* Add your contact form here */}
      </Container>
    </Box>
  );
}

export default Contact; 
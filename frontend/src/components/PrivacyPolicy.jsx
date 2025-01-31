import { Box, Container, Typography } from '@mui/material';

function PrivacyPolicy() {
  return (
    <Box sx={{ py: 8, backgroundColor: '#171717', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ mb: 4, color: 'white' }}>
          Privacy Policy
        </Typography>
        
        <Box sx={{ color: 'rgba(255,255,255,0.87)' }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Last updated: {new Date().toLocaleDateString()}
          </Typography>

          <Typography paragraph>
            This Privacy Policy describes how ShahKicks ("we," "us," or "our") collects, uses, and shares your information when you use our website and services.
          </Typography>

          <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>
            Information We Collect
          </Typography>
          <Typography paragraph>
            We collect information that you provide directly to us, including:
            • Instagram feed data through the Instagram Basic Display API
            • Contact information if you reach out to us
            • Any other information you choose to provide
          </Typography>

          <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>
            How We Use Your Information
          </Typography>
          <Typography paragraph>
            We use the information we collect to:
            • Display your Instagram posts on our website
            • Communicate with you
            • Improve our services
          </Typography>

          <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>
            Information Sharing
          </Typography>
          <Typography paragraph>
            We do not sell, trade, or otherwise transfer your information to third parties. We may share your information with Instagram/Meta as required by their API terms of service.
          </Typography>

          <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>
            Contact Us
          </Typography>
          <Typography paragraph>
            If you have any questions about this Privacy Policy, please contact us at:
            [Your Contact Information]
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default PrivacyPolicy; 
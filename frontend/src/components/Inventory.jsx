import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  Button, 
  MobileStepper,
  Modal,
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { 
  DirectionsCar, 
  LocalGasStation, 
  Speed, 
  CalendarToday, 
  KeyboardArrowLeft, 
  KeyboardArrowRight,
  Close,
  Phone,
  WhatsApp
} from '@mui/icons-material';
import { useState } from 'react';
// Import images
import bmw1 from '../images/bmw1.jpg';
import bmw2 from '../images/bmw2.jpg';
import bmw3 from '../images/bmw3.jpg';
import bmw4 from '../images/bmw4.jpg';

function Inventory() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const carImages = [bmw1, bmw2, bmw3, bmw4];
  const [activeStep, setActiveStep] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const maxSteps = carImages.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleImageClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Box sx={{ 
      py: { xs: 4, md: 8 }, 
      bgcolor: '#171717', 
      minHeight: '100vh', 
      color: 'white' 
    }}>
      <Container maxWidth="lg">
        <Typography 
          variant={isMobile ? "h3" : "h2"} 
          sx={{ 
            mb: { xs: 2, md: 4 }, 
            fontWeight: 700,
            px: { xs: 2, md: 0 }
          }}
        >
          Current Stock
        </Typography>

        <Card sx={{ 
          bgcolor: '#262626', 
          mb: 6,
          mx: { xs: 2, md: 0 }
        }}>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Box sx={{ 
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
              }}>
                <Box sx={{ 
                  position: 'relative',
                  width: '100%',
                  paddingTop: '75%',
                  cursor: 'pointer'
                }}>
                  <CardMedia
                    component="img"
                    image={carImages[activeStep]}
                    alt="BMW 1 Series"
                    onClick={handleImageClick}
                    sx={{ 
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      bgcolor: '#1a1a1a'
                    }}
                  />
                </Box>
                
                <MobileStepper
                  steps={maxSteps}
                  position="static"
                  activeStep={activeStep}
                  sx={{ 
                    bgcolor: '#1a1a1a',
                    py: 1,
                    '& .MuiMobileStepper-dot': {
                      backgroundColor: 'rgba(255, 255, 255, 0.3)',
                      mx: 0.5,
                    },
                    '& .MuiMobileStepper-dotActive': {
                      backgroundColor: '#dc2626',
                    }
                  }}
                  nextButton={
                    <Button 
                      size="small" 
                      onClick={handleNext} 
                      disabled={activeStep === maxSteps - 1}
                      sx={{ color: 'white' }}
                    >
                      {!isMobile && "Next"}
                      <KeyboardArrowRight />
                    </Button>
                  }
                  backButton={
                    <Button 
                      size="small" 
                      onClick={handleBack} 
                      disabled={activeStep === 0}
                      sx={{ color: 'white' }}
                    >
                      <KeyboardArrowLeft />
                      {!isMobile && "Back"}
                    </Button>
                  }
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <CardContent sx={{ p: { xs: 2, md: 4 }, color: 'white' }}>
                <Typography 
                  variant={isMobile ? "h4" : "h3"} 
                  gutterBottom 
                  sx={{ fontWeight: 700 }}
                >
                  BMW 1 Series 116i (2012)
                </Typography>
                <Typography variant="h4" sx={{ color: '#dc2626', mb: 3 }}>
                  £8,995
                </Typography>

                <Grid container spacing={2} sx={{ mb: 3 }}>
                  <Grid item xs={6} sm={3}>
                    <Box sx={{ textAlign: 'center' }}>
                      <DirectionsCar sx={{ fontSize: { xs: 30, md: 40 }, color: '#dc2626', mb: 1 }} />
                      <Typography variant="body2">Mileage</Typography>
                      <Typography variant="h6">75,000</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <Box sx={{ textAlign: 'center' }}>
                      <LocalGasStation sx={{ fontSize: { xs: 30, md: 40 }, color: '#dc2626', mb: 1 }} />
                      <Typography variant="body2">Fuel</Typography>
                      <Typography variant="h6">Petrol</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Speed sx={{ fontSize: { xs: 30, md: 40 }, color: '#dc2626', mb: 1 }} />
                      <Typography variant="body2">Engine</Typography>
                      <Typography variant="h6">1.6L</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <Box sx={{ textAlign: 'center' }}>
                      <CalendarToday sx={{ fontSize: { xs: 30, md: 40 }, color: '#dc2626', mb: 1 }} />
                      <Typography variant="body2">Year</Typography>
                      <Typography variant="h6">2012</Typography>
                    </Box>
                  </Grid>
                </Grid>

                <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                  Features:
                </Typography>
                <Typography variant="body1" paragraph>
                  • Air Conditioning
                  • Electric Windows
                  • Bluetooth Connectivity
                  • Parking Sensors
                  • Alloy Wheels
                  • Full Service History
                </Typography>

                {/* Mobile Contact Buttons */}
                {isMobile ? (
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Button 
                        variant="contained"
                        fullWidth
                        startIcon={<Phone />}
                        href="tel:+447123456789"
                        sx={{ 
                          bgcolor: '#dc2626',
                          '&:hover': {
                            bgcolor: '#b91c1c'
                          }
                        }}
                      >
                        Call
                      </Button>
                    </Grid>
                    <Grid item xs={6}>
                      <Button 
                        variant="contained"
                        fullWidth
                        startIcon={<WhatsApp />}
                        href="https://wa.me/447123456789"
                        sx={{ 
                          bgcolor: '#25D366',
                          '&:hover': {
                            bgcolor: '#128C7E'
                          }
                        }}
                      >
                        WhatsApp
                      </Button>
                    </Grid>
                  </Grid>
                ) : (
                  <Button 
                    variant="contained"
                    size="large"
                    sx={{ 
                      bgcolor: '#dc2626',
                      '&:hover': {
                        bgcolor: '#b91c1c'
                      },
                      mt: 2
                    }}
                  >
                    Enquire Now
                  </Button>
                )}
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Container>

      {/* Full Screen Modal */}
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'rgba(0, 0, 0, 0.9)'
        }}
      >
        <Box sx={{ 
          position: 'relative',
          width: '90vw',
          height: '90vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          {/* Close Button */}
          <IconButton
            onClick={handleCloseModal}
            sx={{ 
              position: 'absolute',
              right: 0,
              top: -40,
              color: 'white'
            }}
          >
            <Close />
          </IconButton>

          {/* Modal Image */}
          <Box sx={{ 
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img
              src={carImages[activeStep]}
              alt="BMW 1 Series"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain'
              }}
            />
          </Box>

          {/* Modal Navigation */}
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            sx={{ 
              bgcolor: 'transparent',
              width: '100%',
              '& .MuiMobileStepper-dot': {
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                mx: 0.5,
              },
              '& .MuiMobileStepper-dotActive': {
                backgroundColor: '#dc2626',
              }
            }}
            nextButton={
              <Button 
                size="large" 
                onClick={handleNext} 
                disabled={activeStep === maxSteps - 1}
                sx={{ color: 'white' }}
              >
                Next
                <KeyboardArrowRight />
              </Button>
            }
            backButton={
              <Button 
                size="large" 
                onClick={handleBack} 
                disabled={activeStep === 0}
                sx={{ color: 'white' }}
              >
                <KeyboardArrowLeft />
                Back
              </Button>
            }
          />
        </Box>
      </Modal>
    </Box>
  );
}

export default Inventory; 
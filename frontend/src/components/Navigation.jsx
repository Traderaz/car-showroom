import { AppBar, Toolbar, Button, Box, Container } from '@mui/material';
import { HomeRounded, PersonRounded, LoginRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <AppBar 
      position="fixed" 
      elevation={0}
      sx={{ 
        backgroundColor: 'rgba(23, 23, 23, 0.9)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar 
          disableGutters 
          sx={{ 
            minHeight: '70px',
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              component={Link}
              to="/"
              startIcon={<HomeRounded />}
              sx={{ 
                color: 'white',
                fontWeight: 600,
                '&:hover': { 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              Home
            </Button>

            <Button
              component={Link}
              to="/profile"
              startIcon={<PersonRounded />}
              sx={{ 
                color: 'white',
                fontWeight: 600,
                '&:hover': { 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              Profile
            </Button>
          </Box>

          <Button
            component={Link}
            to="/login"
            variant="contained"
            startIcon={<LoginRounded />}
            sx={{ 
              fontWeight: 600,
              backgroundColor: '#dc2626',
              '&:hover': {
                backgroundColor: '#b91c1c',
                boxShadow: '0 4px 12px rgba(220, 38, 38, 0.4)'
              }
            }}
          >
            Login
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navigation; 
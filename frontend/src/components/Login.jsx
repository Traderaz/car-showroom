import {
  Box,
  Container,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { useState } from 'react';
import { Person, Lock, Visibility, VisibilityOff } from '@mui/icons-material';

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        pt: 15,
        pb: 8,
        background: 'linear-gradient(to bottom, #171717 0%, #262626 100%)',
      }}
    >
      <Container maxWidth="sm">
        <Card
          sx={{
            backgroundColor: 'rgba(38, 38, 38, 0.8)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Typography 
              variant="h4" 
              component="h1" 
              align="center"
              sx={{ 
                mb: 4,
                fontWeight: 700,
                background: 'linear-gradient(45deg, #dc2626 30%, #ef4444 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Welcome Back
            </Typography>

            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person sx={{ color: 'rgba(255, 255, 255, 0.7)' }} />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                fullWidth
                label="Password"
                type={showPassword ? 'text' : 'password'}
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock sx={{ color: 'rgba(255, 255, 255, 0.7)' }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                        sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Button
                variant="contained"
                size="large"
                sx={{
                  mt: 2,
                  backgroundColor: '#dc2626',
                  '&:hover': {
                    backgroundColor: '#b91c1c',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(220, 38, 38, 0.4)',
                  },
                  transition: 'all 0.2s ease-in-out',
                }}
              >
                Sign In
              </Button>

              <Typography 
                variant="body2" 
                align="center" 
                sx={{ 
                  mt: 2,
                  color: 'rgba(255, 255, 255, 0.7)',
                }}
              >
                Don't have an account?{' '}
                <Button 
                  variant="text" 
                  sx={{ 
                    color: '#dc2626',
                    p: 0,
                    '&:hover': {
                      backgroundColor: 'transparent',
                      color: '#ef4444',
                    },
                  }}
                >
                  Sign Up
                </Button>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default Login; 
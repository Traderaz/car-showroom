import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
  Divider,
} from '@mui/material';
import { Edit, Favorite, DirectionsCar, Settings } from '@mui/icons-material';

function Profile() {
  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        pt: 15,
        pb: 8,
        background: 'linear-gradient(to bottom, #171717 0%, #262626 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Profile Info Card */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                backgroundColor: 'rgba(38, 38, 38, 0.8)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <CardContent sx={{ textAlign: 'center', p: 4 }}>
                <Avatar
                  sx={{
                    width: 120,
                    height: 120,
                    margin: '0 auto 20px',
                    border: '4px solid #dc2626',
                  }}
                  alt="Profile Picture"
                  src="https://source.unsplash.com/random/200x200/?portrait"
                />
                <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
                  John Doe
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 3 }}>
                  Premium Member
                </Typography>
                <Button
                  variant="contained"
                  startIcon={<Edit />}
                  fullWidth
                  sx={{ mb: 2 }}
                >
                  Edit Profile
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<Settings />}
                  fullWidth
                >
                  Settings
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Stats and Activity */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={3}>
              {/* Stats Cards */}
              {[
                { icon: <DirectionsCar />, title: 'Cars Viewed', value: '127' },
                { icon: <Favorite />, title: 'Favorites', value: '24' },
                { icon: <DirectionsCar />, title: 'Test Drives', value: '8' },
              ].map((stat, index) => (
                <Grid item xs={12} sm={4} key={index}>
                  <Card
                    sx={{
                      backgroundColor: 'rgba(38, 38, 38, 0.8)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      height: '100%',
                    }}
                  >
                    <CardContent sx={{ textAlign: 'center', p: 3 }}>
                      <Box sx={{ color: '#dc2626', mb: 2 }}>
                        {stat.icon}
                      </Box>
                      <Typography variant="h4" sx={{ mb: 1, fontWeight: 700 }}>
                        {stat.value}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        {stat.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}

              {/* Recent Activity */}
              <Grid item xs={12}>
                <Card
                  sx={{
                    backgroundColor: 'rgba(38, 38, 38, 0.8)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ mb: 3 }}>
                      Recent Activity
                    </Typography>
                    {[1, 2, 3].map((item, index) => (
                      <Box key={index}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <Avatar
                            sx={{ width: 40, height: 40, mr: 2 }}
                            src={`https://source.unsplash.com/random/100x100/?car&sig=${item}`}
                          />
                          <Box>
                            <Typography variant="body1">
                              Viewed Mercedes-Benz AMG GT
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                              2 hours ago
                            </Typography>
                          </Box>
                        </Box>
                        {index < 2 && <Divider sx={{ my: 2 }} />}
                      </Box>
                    ))}
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Profile; 
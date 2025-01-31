import { 
  Container, 
  Typography, 
  Box, 
  Button,
  Grid,
  Card,
  CardContent,
  Menu,
  MenuItem,
  IconButton,
  TextField,
  ImageList,
  ImageListItem,
  Link,
  CardMedia,
  CircularProgress
} from '@mui/material';
import { 
  KeyboardArrowRight, 
  Speed, 
  LocalGasStation, 
  Timer, 
  Star,
  KeyboardArrowDown,
  Facebook,
  Instagram,
  Twitter,
  YouTube,
  Phone,
  Email,
  LocationOn,
  DirectionsCar,
  Build,
  EmojiEvents,
  Security
} from '@mui/icons-material';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedMake, setSelectedMake] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const carMakes = {
    "BMW": ["1 Series", "2 Series", "3 Series", "4 Series", "5 Series"],
    "Audi": ["A1", "A3", "A4", "A5", "A6"],
    "Mercedes": ["A-Class", "B-Class", "C-Class", "E-Class", "S-Class"],
    "Ford": ["Fiesta", "Focus", "Puma", "Kuga", "Mondeo"],
    "Volkswagen": ["Polo", "Golf", "Tiguan", "Passat", "T-Roc"]
  };

  const bmw1Series = [
    {
      id: 1,
      image: "/images/bmw1.jpg",
      title: "BMW 1 Series 118i M Sport",
      price: "£21,995",
      year: "2020",
      mileage: "25,000 miles",
      fuel: "Petrol"
    },
    {
      id: 2,
      image: "/images/bmw2.jpg",
      title: "BMW 1 Series 120d Sport",
      price: "£19,995",
      year: "2019",
      mileage: "35,000 miles",
      fuel: "Diesel"
    }
  ];

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN}&limit=3`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch Instagram posts');
        }

        const data = await response.json();
        console.log('Instagram response:', data); // Debug log
        setPosts(data.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching Instagram posts:', err);
        setError('Failed to load Instagram posts');
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  const getMediaUrl = (post) => {
    // For VIDEO posts, use thumbnail_url instead of media_url
    if (post.media_type === 'VIDEO') {
      return post.thumbnail_url;
    }
    // For CAROUSEL_ALBUM and IMAGE, use media_url
    return post.media_url;
  };

  const handleMakeClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMakeSelect = (make) => {
    setSelectedMake(make);
    setSelectedModel(null);
    setAnchorEl(null);
  };

  const handleModelSelect = (model) => {
    setSelectedModel(model);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleInventoryClick = () => {
    navigate('/inventory');
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <>
      {/* Hero Section */}
      <Box 
        sx={{ 
          bgcolor: '#171717',
          color: 'white',
          pt: 12,
          pb: 12,
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Container maxWidth="lg">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            gutterBottom
            sx={{ 
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}
          >
            Revline Autos
          </Typography>
          <Typography
            variant="h5"
            align="center"
            paragraph
            sx={{ 
              color: 'rgba(255,255,255,0.9)',
              mb: 4,
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
            }}
          >
            Experience Automotive Excellence
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
            <Button 
              variant="contained" 
              size="large"
              onClick={handleInventoryClick}
              sx={{ 
                bgcolor: '#dc2626',
                '&:hover': {
                  bgcolor: '#b91c1c'
                },
                mr: 2
              }}
            >
              View Inventory
            </Button>
            <Button 
              variant="outlined" 
              size="large"
              onClick={handleContactClick}
              sx={{ 
                color: 'white',
                borderColor: 'white',
                '&:hover': {
                  borderColor: '#dc2626',
                  color: '#dc2626'
                }
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 8, bgcolor: '#262626' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%', bgcolor: '#171717', color: 'white', transition: '0.3s', '&:hover': { transform: 'translateY(-8px)' } }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <DirectionsCar sx={{ fontSize: 50, color: '#dc2626', mb: 2 }} />
                  <Typography variant="h5" gutterBottom>
                    Premium Selection
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                    Curated collection of luxury and performance vehicles
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%', bgcolor: '#171717', color: 'white', transition: '0.3s', '&:hover': { transform: 'translateY(-8px)' } }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Speed sx={{ fontSize: 50, color: '#dc2626', mb: 2 }} />
                  <Typography variant="h5" gutterBottom>
                    Performance First
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                    High-performance vehicles for enthusiasts
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%', bgcolor: '#171717', color: 'white', transition: '0.3s', '&:hover': { transform: 'translateY(-8px)' } }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Security sx={{ fontSize: 50, color: '#dc2626', mb: 2 }} />
                  <Typography variant="h5" gutterBottom>
                    Trusted Service
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                    Professional maintenance and support
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%', bgcolor: '#171717', color: 'white', transition: '0.3s', '&:hover': { transform: 'translateY(-8px)' } }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Star sx={{ fontSize: 50, color: '#dc2626', mb: 2 }} />
                  <Typography variant="h5" gutterBottom>
                    5-Star Experience
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                    Exceptional customer satisfaction
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Car Search Section - Now Second */}
      <Box sx={{ py: 8, backgroundColor: '#1a1a1a' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            sx={{ 
              textAlign: 'center', 
              mb: 4,
              fontWeight: 700
            }}
          >
            Find Your Perfect Car
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mb: 4 }}>
            <Button
              variant="outlined"
              onClick={handleMakeClick}
              endIcon={<KeyboardArrowDown />}
              sx={{ 
                minWidth: '200px',
                color: 'white',
                borderColor: 'rgba(255,255,255,0.3)'
              }}
            >
              {selectedMake || "Select Make"}
            </Button>
            
            {selectedMake && (
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {carMakes[selectedMake].map((model) => (
                  <Button
                    key={model}
                    variant={selectedModel === model ? "contained" : "outlined"}
                    onClick={() => handleModelSelect(model)}
                    sx={{ 
                      color: 'white',
                      borderColor: 'rgba(255,255,255,0.3)'
                    }}
                  >
                    {model}
                  </Button>
                ))}
              </Box>
            )}
          </Box>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
            PaperProps={{
              sx: {
                backgroundColor: '#262626',
                color: 'white',
                mt: 1
              }
            }}
          >
            {Object.keys(carMakes).map((make) => (
              <MenuItem 
                key={make} 
                onClick={() => handleMakeSelect(make)}
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.1)'
                  }
                }}
              >
                {make}
              </MenuItem>
            ))}
          </Menu>

          {/* Display BMW 1 Series Cars */}
          {selectedMake === "BMW" && selectedModel === "1 Series" && (
            <Grid container spacing={3}>
              {bmw1Series.map((car) => (
                <Grid item xs={12} md={4} key={car.id}>
                  <Card 
                    sx={{ 
                      backgroundColor: '#262626',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-8px)'
                      }
                    }}
                  >
                    <Box 
                      component="img"
                      src={car.image}
                      alt={car.title}
                      sx={{
                        width: '100%',
                        height: '200px',
                        objectFit: 'cover'
                      }}
                    />
                    <CardContent>
                      <Typography variant="h6" sx={{ mb: 1 }}>
                        {car.title}
                      </Typography>
                      <Typography variant="h5" sx={{ color: '#dc2626', mb: 2 }}>
                        {car.price}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                        {car.year} • {car.mileage} • {car.fuel}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      </Box>

      {/* Instagram Feed Section */}
      <Box sx={{ py: 8, backgroundColor: '#171717' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" sx={{ mb: 2, fontWeight: 700, color: 'white' }}>
              Latest From Instagram
            </Typography>
          </Box>
          
          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <CircularProgress sx={{ color: '#dc2626' }} />
            </Box>
          ) : error ? (
            <Typography color="error" align="center">{error}</Typography>
          ) : (
            <Grid container spacing={3}>
              {posts.slice(0, 3).map((post) => (
                <Grid item xs={12} md={4} key={post.id}>
                  <Card 
                    sx={{ 
                      backgroundColor: '#262626',
                      height: '100%',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-8px)'
                      }
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={getMediaUrl(post)}
                      alt={post.caption?.slice(0, 100) || 'Instagram post'}
                      sx={{
                        height: 300,
                        objectFit: 'cover'
                      }}
                      onError={(e) => {
                        console.error('Image failed to load:', e);
                        e.target.src = 'https://via.placeholder.com/300?text=Image+Not+Available';
                      }}
                    />
                    <CardContent>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: 'rgba(255,255,255,0.7)',
                          mb: 2,
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden'
                        }}
                      >
                        {post.caption}
                      </Typography>
                      <Button
                        variant="outlined"
                        size="small"
                        href={post.permalink}
                        target="_blank"
                        startIcon={<Instagram />}
                        sx={{ 
                          borderColor: '#dc2626',
                          color: 'white',
                          '&:hover': {
                            borderColor: '#b91c1c',
                            backgroundColor: 'rgba(220, 38, 38, 0.1)'
                          }
                        }}
                      >
                        View on Instagram
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      </Box>

      {/* About Us Section */}
      <Box sx={{ py: 8, bgcolor: '#262626' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" sx={{ color: 'white', fontWeight: 700, mb: 3 }}>
                About Us
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', mb: 3, lineHeight: 1.8 }}>
                At Revline Autos, we pride ourselves on delivering exceptional service and premium vehicles to our customers. With years of experience in the automotive industry, we carefully select and prepare each vehicle to meet our high standards.
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.8 }}>
                Our modern showroom and professional team ensure you have the best car buying experience possible. We're passionate about cars and committed to finding the perfect vehicle for you.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ 
                height: { xs: '300px', md: '400px' },
                width: '100%',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 2,
              }}>
                <CardMedia
                  component="img"
                  image="https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg"
                  alt="Revline Autos Showroom"
                  sx={{ 
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: '0.3s',
                    '&:hover': {
                      transform: 'scale(1.05)'
                    }
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Contact Us Section */}
      <Box sx={{ py: 8, backgroundColor: '#1a1a1a' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" sx={{ mb: 4, fontWeight: 700 }}>
                Contact Us
              </Typography>
              
              <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'rgba(255,255,255,0.3)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(255,255,255,0.5)',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'rgba(255,255,255,0.7)',
                    },
                    '& .MuiInputBase-input': {
                      color: 'white',
                    },
                  }}
                />
                
                <TextField
                  label="Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'rgba(255,255,255,0.3)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(255,255,255,0.5)',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'rgba(255,255,255,0.7)',
                    },
                    '& .MuiInputBase-input': {
                      color: 'white',
                    },
                  }}
                />
                
                <TextField
                  label="Message"
                  multiline
                  rows={4}
                  variant="outlined"
                  fullWidth
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'rgba(255,255,255,0.3)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(255,255,255,0.5)',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'rgba(255,255,255,0.7)',
                    },
                    '& .MuiInputBase-input': {
                      color: 'white',
                    },
                  }}
                />
                
                <Button 
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: '#dc2626',
                    '&:hover': {
                      backgroundColor: '#b91c1c',
                    },
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Box sx={{ pl: { md: 4 } }}>
                <Typography variant="h5" sx={{ mb: 4, fontWeight: 600 }}>
                  Get in Touch
                </Typography>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Phone sx={{ color: '#dc2626' }} />
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        Phone
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                        +44 (0) 123 456 7890
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Email sx={{ color: '#dc2626' }} />
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        Email
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                        info@carshowroom.com
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <LocationOn sx={{ color: '#dc2626' }} />
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        Address
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                        123 Car Street, Automobile City, AB12 3CD
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer with Social Media */}
      <Box sx={{ py: 4, backgroundColor: '#0a0a0a' }}>
        <Container maxWidth="lg">
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: 2,
            mb: 3
          }}>
            <IconButton 
              href="https://facebook.com" 
              target="_blank"
              sx={{ 
                color: 'white',
                '&:hover': { color: '#dc2626' }
              }}
            >
              <Facebook />
            </IconButton>
            <IconButton 
              href="https://instagram.com" 
              target="_blank"
              sx={{ 
                color: 'white',
                '&:hover': { color: '#dc2626' }
              }}
            >
              <Instagram />
            </IconButton>
            <IconButton 
              href="https://twitter.com" 
              target="_blank"
              sx={{ 
                color: 'white',
                '&:hover': { color: '#dc2626' }
              }}
            >
              <Twitter />
            </IconButton>
            <IconButton 
              href="https://youtube.com" 
              target="_blank"
              sx={{ 
                color: 'white',
                '&:hover': { color: '#dc2626' }
              }}
            >
              <YouTube />
            </IconButton>
          </Box>
          <Typography 
            variant="body2" 
            align="center"
            sx={{ color: 'rgba(255,255,255,0.7)' }}
          >
            © 2024 Car Showroom. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </>
  );
}

export default Home; 
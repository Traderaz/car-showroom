import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from './components/Navigation';
import { AppThemeProvider } from './theme/ThemeProvider';
import { Toaster } from 'react-hot-toast';
import { Box, CssBaseline } from '@mui/material';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import PrivacyPolicy from './components/PrivacyPolicy';
import Inventory from './components/Inventory';
import Contact from './components/Contact';

function App() {
  const location = useLocation();

  return (
    <AppThemeProvider>
      <CssBaseline />
      <Box 
        sx={{ 
          minHeight: '100vh',
          backgroundColor: '#171717',
          color: 'white'
        }}
      >
        <Navigation />
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
        <Toaster 
          position="top-right"
          toastOptions={{
            style: {
              background: '#262626',
              color: '#fff'
            }
          }}
        />
      </Box>
    </AppThemeProvider>
  );
}

export default App; 
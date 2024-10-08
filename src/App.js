import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header.component'; 
import Footer from './components/footer.component'; 
import Home from './components/home.component'; 
import SignIn from './components/login.component';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box'; 

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <Header />
        <Box>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<SignIn />} />
          </Routes>
        </Box>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
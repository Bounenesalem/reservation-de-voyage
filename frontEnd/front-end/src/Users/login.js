import React, { useState } from 'react';
import { Avatar, Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

const theme = createTheme();

const Login = ({ setAuthToken, setCurrentUser, setView }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newError = {};
    if (!email) newError.email = 'Email is required.';
    if (!password) newError.password = 'Password is required.';
    setError(newError);

    if (Object.keys(newError).length > 0) return;

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', { email, password });
      localStorage.setItem('token', response.data.token);
      setAuthToken(response.data.token);
      setCurrentUser(response.data.user);
      setError({});
      setView('selectAgency'); // توجيه المستخدم إلى صفحة "Select Agency"
    } catch (error) {
      setError({ general: 'Invalid email or password' });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!error.email}
              helperText={error.email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!error.password}
              helperText={error.password}
            />
            {error.general && <Typography color="error" sx={{ mt: 2 }}>{error.general}</Typography>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2" onClick={() => setView('register')}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;

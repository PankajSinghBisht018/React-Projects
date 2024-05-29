import React, { useState } from 'react';
import { Button, Grid, TextField, Paper, Typography, Box } from '@mui/material';
import bglogo from './bglogo.jpg'

function Calculator() {
  const [input, setInput] = useState('');

  const handleButtonClick = (e) => {
    const value = e.target.value;
    setInput((prev) => {
      if (/[\+\-\*\/]$/.test(prev) && /[\+\-\*\/]/.test(value)) {
        return prev.slice(0, -1) + value;
      } else {
        return prev + value;
      }
    });
  };

  const handleEvaluate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('');
    }
  };

  const handleClear = () => {
    setInput('');
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundImage: `url(${bglogo})`,
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat'}}>
      <Paper elevation={3} sx={{ p: 4, width: '300px', height: '400px', bgcolor: 'rgba(0, 0, 0, 0.5)', backdropFilter:'blur(10px)'}}>
        <Typography variant="h4" align="center" gutterBottom sx={{ color: 'white' }}>
          Calculator
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          value={input}
          readOnly
          sx={{ mb: 2, bgcolor: 'white' }}
        />
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Button fullWidth variant="contained" onClick={handleButtonClick} value={1} sx={{ height: '60px', bgcolor: 'maroon', '&:hover': { bgcolor: 'maroon' }, '&:active': { bgcolor: 'maroon' } }}>1</Button>
          </Grid>
          <Grid item xs={3}>
            <Button fullWidth variant="contained" onClick={handleButtonClick} value={2} sx={{ height: '60px', bgcolor: 'maroon', '&:hover': { bgcolor: 'maroon' }, '&:active': { bgcolor: 'maroon' } }}>2</Button>
          </Grid>
          <Grid item xs={3}>
            <Button fullWidth variant="contained" onClick={handleButtonClick} value={3} sx={{ height: '60px', bgcolor: 'maroon', '&:hover': { bgcolor: 'maroon' }, '&:active': { bgcolor: 'maroon' } }}>3</Button>
          </Grid>
          <Grid item xs={3}>
            <Button fullWidth variant="contained" onClick={handleButtonClick} value="+" sx={{ height: '60px', bgcolor: 'maroon', '&:hover': { bgcolor: 'maroon' }, '&:active': { bgcolor: 'maroon' } }}>+</Button>
          </Grid>
          <Grid item xs={3}>
            <Button fullWidth variant="contained" onClick={handleButtonClick} value={4} sx={{ height: '60px', bgcolor: 'maroon', '&:hover': { bgcolor: 'maroon' }, '&:active': { bgcolor: 'maroon' } }}>4</Button>
          </Grid>
          <Grid item xs={3}>
            <Button fullWidth variant="contained" onClick={handleButtonClick} value={5} sx={{ height: '60px', bgcolor: 'maroon', '&:hover': { bgcolor: 'maroon' }, '&:active': { bgcolor: 'maroon' } }}>5</Button>
          </Grid>
          <Grid item xs={3}>
            <Button fullWidth variant="contained" onClick={handleButtonClick} value={6} sx={{ height: '60px', bgcolor: 'maroon', '&:hover': { bgcolor: 'maroon' }, '&:active': { bgcolor: 'maroon' } }}>6</Button>
          </Grid>
          <Grid item xs={3}>
            <Button fullWidth variant="contained" onClick={handleButtonClick} value="-" sx={{ height: '60px', bgcolor: 'maroon', '&:hover': { bgcolor: 'maroon' }, '&:active': { bgcolor: 'maroon' } }}>-</Button>
          </Grid>
          <Grid item xs={3}>
            <Button fullWidth variant="contained" onClick={handleButtonClick} value={7} sx={{ height: '60px', bgcolor: 'maroon', '&:hover': { bgcolor: 'maroon' }, '&:active': { bgcolor: 'maroon' } }}>7</Button>
          </Grid>
          <Grid item xs={3}>
            <Button fullWidth variant="contained" onClick={handleButtonClick} value={8} sx={{ height: '60px', bgcolor: 'maroon', '&:hover': { bgcolor: 'maroon' }, '&:active': { bgcolor: 'maroon' } }}>8</Button>
          </Grid>
          <Grid item xs={3}>
            <Button fullWidth variant="contained" onClick={handleButtonClick} value={9} sx={{ height: '60px', bgcolor: 'maroon', '&:hover': { bgcolor: 'maroon' }, '&:active': { bgcolor: 'maroon' } }}>9</Button>
          </Grid>
          <Grid item xs={3}>
            <Button fullWidth variant="contained" onClick={handleButtonClick} value="*" sx={{ height: '60px', bgcolor: 'maroon', '&:hover': { bgcolor: 'maroon' }, '&:active': { bgcolor: 'maroon' } }}>*</Button>
          </Grid>
          <Grid item xs={3}>
            <Button fullWidth variant="contained" onClick={handleButtonClick} value="0" sx={{ height: '60px', bgcolor: 'maroon', '&:hover': { bgcolor: 'maroon' }, '&:active': { bgcolor: 'maroon' } }}>0</Button>
          </Grid>
          <Grid item xs={3}>
            <Button fullWidth variant="contained" onClick={handleClear} sx={{ height: '60px', bgcolor: 'maroon', '&:hover': { bgcolor: 'maroon' }, '&:active': { bgcolor: 'maroon' } }}>C</Button>
          </Grid>
          <Grid item xs={3}>
            <Button fullWidth variant="contained" onClick={handleButtonClick} value="/" sx={{ height: '60px', bgcolor: 'maroon', '&:hover': { bgcolor: 'maroon' }, '&:active': { bgcolor: 'maroon' } }}>/</Button>
          </Grid>
          <Grid item xs={3}>
            <Button fullWidth variant="contained" onClick={handleEvaluate} sx={{ height: '60px', bgcolor: 'maroon', '&:hover': { bgcolor: 'maroon' }, '&:active': { bgcolor: 'maroon' } }}>Result</Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default Calculator;

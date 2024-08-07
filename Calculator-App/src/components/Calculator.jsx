import React, { useState } from 'react';
import { Grid, TextField, Paper, Typography, Box } from '@mui/material';
import bglogo from './bglogo.jpg';
import ShinyButton from "@/components/magicui/shiny-button";

function Calculator() {
  const [input, setInput] = useState('');

  const handleButtonClick = (e) => {
    const value = e.currentTarget.getAttribute('data-value');
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
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: `url(${bglogo})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          width: '450px',
          height: '600px',
          bgcolor: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(10px)',
        }}
      >
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
            <ShinyButton text="1" onClick={handleButtonClick} data-value="1" className="h-16 w-full" />
          </Grid>
          <Grid item xs={3}>
            <ShinyButton text="2" onClick={handleButtonClick} data-value="2" className="h-16 w-full" />
          </Grid>
          <Grid item xs={3}>
            <ShinyButton text="3" onClick={handleButtonClick} data-value="3" className="h-16 w-full" />
          </Grid>
          <Grid item xs={3}>
            <ShinyButton text="+" onClick={handleButtonClick} data-value="+" className="h-16 w-full" />
          </Grid>
          <Grid item xs={3}>
            <ShinyButton text="4" onClick={handleButtonClick} data-value="4" className="h-16 w-full" />
          </Grid>
          <Grid item xs={3}>
            <ShinyButton text="5" onClick={handleButtonClick} data-value="5" className="h-16 w-full" />
          </Grid>
          <Grid item xs={3}>
            <ShinyButton text="6" onClick={handleButtonClick} data-value="6" className="h-16 w-full" />
          </Grid>
          <Grid item xs={3}>
            <ShinyButton text="-" onClick={handleButtonClick} data-value="-" className="h-16 w-full" />
          </Grid>
          <Grid item xs={3}>
            <ShinyButton text="7" onClick={handleButtonClick} data-value="7" className="h-16 w-full" />
          </Grid>
          <Grid item xs={3}>
            <ShinyButton text="8" onClick={handleButtonClick} data-value="8" className="h-16 w-full" />
          </Grid>
          <Grid item xs={3}>
            <ShinyButton text="9" onClick={handleButtonClick} data-value="9" className="h-16 w-full" />
          </Grid>
          <Grid item xs={3}>
            <ShinyButton text="*" onClick={handleButtonClick} data-value="*" className="h-16 w-full" />
          </Grid>
          <Grid item xs={3}>
            <ShinyButton text="0" onClick={handleButtonClick} data-value="0" className="h-16 w-full" />
          </Grid>
          <Grid item xs={3}>
            <ShinyButton text="C" onClick={handleClear} data-value="C" className="h-16 w-full" />
          </Grid>
          <Grid item xs={3}>
            <ShinyButton text="/" onClick={handleButtonClick} data-value="/" className="h-16 w-full" />
          </Grid>
          <Grid item xs={12}>
            <ShinyButton text="Result" onClick={handleEvaluate} data-value="=" className="h-16 w-full" />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default Calculator;

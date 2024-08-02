import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import WbSunnyRounded from '@mui/icons-material/WbSunnyRounded';
import ModeNightRounded from '@mui/icons-material/ModeNightRounded';
import { setTheme, selectTheme } from '../../../store';

const ThemeButton = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const toggleTheme = () => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Button onClick={toggleTheme}>
      {theme === 'light' ? <ModeNightRounded /> : <WbSunnyRounded />}
    </Button>
  );
};

export default ThemeButton;

import React from "react";
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';

import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';


const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(0),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 14,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      color: '#8C9192',
    fontFamily:'CeraProMedium',
      '&:focus': {
        borderRadius: 4,
        borderColor: '#22C870',
        boxShadow: '0 0 0 0.2rem #22C870',
      },
    },
  }));
  const CustomizedSelects= ()=> {
  
  
    return (
      <Grid container direction='row' display='flex'>
        <FormControl sx={{ m: 1 }} style={{width:'136px'}} variant="standard">
          <InputLabel htmlFor="demo-customized-textbox"></InputLabel>
          <BootstrapInput placeholder="email" id="demo-customized-textbox" />
        </FormControl>
        
        <FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="demo-customized-select-native"></InputLabel>
          <NativeSelect
            id="demo-customized-select-native" 
            
            input={<BootstrapInput />}
          >    
            <option  >@Kindle.com</option>
            <option >@gmail.com</option>
            <option >@hotmail.com</option>
          </NativeSelect>
        </FormControl>
      </Grid>
    );
  }

  export default CustomizedSelects;
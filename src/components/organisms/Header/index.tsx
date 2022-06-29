import React from 'react';
import Explore from '../Explore';
import Typography from '../../atoms/Typography';
import {Grid, Box, Paper, Button} from '@mui/material';
import { makeStyles,withStyles } from '@mui/styles'; 
import Image from '../../atoms/Image';
import SearchIcon from '@mui/icons-material/Search';
import {KeyboardArrowDown} from '@mui/icons-material';
import logo from '../../../images/Blinkist.png';

const useStyles = makeStyles({
	logo:{
    width: "120%",
    },
    icon:{
      marginTop: '5px'
    }
});


export type HeaderProps = {
    onCategoryClick: (category: string) => void;
}

const Header: React.FC<HeaderProps> = ((props) => {
    const classes = useStyles();
    return (
      <Grid container direction="row" columnSpacing={3} display='inline-flex' justifyContent='center' >
        <Grid item>
          <Image
            src={logo}
            className={classes.logo}
            alt="Blinkist logo"
          />
        </Grid>
        <Grid item alignItems='center' display='flex'>
          <SearchIcon className={classes.logo}/>
        </Grid>
        <Grid item >
          <Explore isExplore={true}  onCategoryClick={props.onCategoryClick} />
        </Grid>
        <Grid item justifyContent='center' display='flex'>
          <Typography className={classes.logo} variant="h6" children="My Library" color='#3D4D6B' fontFamily='CeraProMedium'/>
        </Grid>
        <Grid item>
          <Typography variant="h6" children="Highlights" color='#3D4D6B' fontFamily='CeraProMedium'/>
        </Grid>
        <Grid item xs={3} justifyContent='flex-end' display='flex' container direction='row'>
          <Typography variant="h6" children="Account" color='#3D4D6B' fontFamily='CeraProMedium'/>
          <KeyboardArrowDown className={classes.icon}/>
        </Grid>
      </Grid>
    );
});

export default Header;
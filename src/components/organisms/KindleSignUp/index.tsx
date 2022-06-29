import React from 'react';
import { makeStyles } from '@mui/styles'; 
import Typography from '../../atoms/Typography';
import {Grid} from '@mui/material';
import Button from '../../atoms/Button/Button';
import CustomizedSelects from '../../molecules/KindleButton';

const useStyles = makeStyles({
    root:{
        width:'415px',
    },
    filledButton:{
        width:'100%'
    },
    icon:{
        marginLeft:'20px',
    }
  });

export type KindleProps = {
    onClick: () => void;
}

const KindleSignUp: React.FC<KindleProps> = ((props) => {
    const classes = useStyles();
    return (
    <>
          <Typography
            children="1. Add Blinkist to your approved document senders"
            variant="subtitle1"
            fontFamily='CeraProBold'
          />
          <Grid direction="row">
            <Grid item>
              <Typography
                children="You must add kindle@blinkist.com to your"
                variant="body1"
                fontFamily='CeraProMedium'
                color='#8C9192'
              />
            </Grid>
            <Grid item display="flex">
              <Typography children="list of " variant="body1" fontFamily='CeraProMedium'
                color='#8C9192'/>
              <Typography
                children=" approved document senders"
                variant="body1"
                color="#2CE181"
                fontFamily='CeraProMedium'
              />
            </Grid>
            <Grid item>
              <Typography
                children="to receive documents sent from Blinkist"
                variant="body1"
                fontFamily='CeraProMedium'
                color='#8C9192'
              />
            </Grid>
          </Grid>
          <Typography children="2. Add your Kindle email"  variant="subtitle1"
            fontFamily='CeraProBold'/>
          <CustomizedSelects />
          <Button
            title="Add email"
            className={classes.filledButton}
            backgroundColor="#2CE181"
            color="#074453"
            onClick={props.onClick}
          />
          <Button
            title="Need help?"
            className={classes.filledButton}
            color="#2CE181"
          />
       </>
    );
});

export default KindleSignUp;

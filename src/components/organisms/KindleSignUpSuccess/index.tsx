import React from 'react';
import { makeStyles } from '@mui/styles'; 
import Typography from '../../atoms/Typography';
import {Grid} from '@mui/material';
import Button from '../../atoms/Button/Button';

const useStyles = makeStyles({
    filledButton:{
        width:'50%',
        marginRight:'auto',
        marginLeft:'75px',
        paddingTop:'5px'
    }
  });

export type KindleProps = {
    title: string;
    handleClose:()=>void;
}

const KindleSignUpSuccess: React.FC<KindleProps> = ((props) => {
    const classes = useStyles();
    return (
      <>
        <Grid>
          <div>
            <Typography children={props.title} variant="h6" color="#308DFD" fontFamily='CeraProBold'/>
            <Typography
              children={"was successfully sent to your Kindle"}
              variant="h6"
              fontFamily='CeraProBold'
            />
          </div>
        </Grid>
        <Typography
          children="Next time you sync your Kindle the blinks will be waiting for you. Please be patient -they can be slow travelers!"
          variant="body1"
          color='#8C9192'
          fontFamily='CeraProMedium'
        />
        <Button
          title="Continue reading"
          className={classes.filledButton}
          backgroundColor="#2CE181"
          color="#074453"
          onClick={props.handleClose}
        />
      </>
    );
});

export default KindleSignUpSuccess;

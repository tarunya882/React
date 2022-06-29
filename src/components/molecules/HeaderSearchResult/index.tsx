import React from 'react';
import { Grid } from "@mui/material";
import Typography from "../../atoms/Typography";
import { makeStyles } from '@mui/styles'; 

const useStyles = makeStyles({
    root:{
        borderBottom:'1px solid #F0F2F4',
        padding:'10px'
    }
});

export type HeaderSearchProps = {
    title: string,
    author: string,
}

const HeaderSearchResult: React.FC<HeaderSearchProps> = ((props) => {
    const classes = useStyles();
    return(
        <Grid container direction='row' columnSpacing={1} className={classes.root}>
            <Grid item>
                <Typography children={props.title} variant='subtitle1' fontFamily='CeraProBold' color='#30435D' />
            </Grid>
            <Grid item>
                <Typography children={`by ${props.author}`} variant='subtitle1' fontFamily='CeraProMedium' color='#A9B0B3' />
            </Grid>
        </Grid>
    );
});

export default HeaderSearchResult;
import React from 'react';
import Typography from "../../atoms/Typography/index";
import Image from '../../atoms/Image';
import { makeStyles } from '@mui/styles'; 
import Grid from '@mui/material/Grid';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const useStyles = makeStyles({
	root: {
		width: '40%',
        padding: '15px',
        borderBottom: '1px solid black',
	},
	img: {
		width: '55%',
        height: '100%',
	},
	content: {
		borderBottom: '1px solid black',
		marginBottom: '17px',
	},
	firstGrid: {
		rowGap: '8px',
		marginTop: '6px',
	},
    divider: {
        borderBottom: "1px solid black",
    },
    icon:{
       color:'#17E37C',
    }
});

export type BookDetailsProps = {
    image: string,
    title: string,
    author: string,
}

const BookDetails: React.FC<BookDetailsProps> = (props) => {
    const classes = useStyles();
    return(
        <Grid container direction='row' className={classes.root}>
             <Grid item direction='column' display='flex' justifyContent='center'>
                 <ArrowDropUpIcon className={classes.icon}/>
              <Typography children='1503' variant='h6' />
            </Grid>
            <Grid item>
                <Image src={props.image} className={classes.img} />
            </Grid>
            <Grid item direction='column' justifyContent='center' display='flex' alignItems='baseline'>
                <Typography variant={'h5'} children={props.title} />
                <Typography variant={'subtitle1'} children={props.author}  />
            </Grid>
            <Grid>
                <div className={classes.divider}></div>
            </Grid>
        </Grid>
    );
}

export default BookDetails;
import React, {useState} from 'react';
import Grid from '@mui/material/Grid';
import Typography from '../../components/atoms/Typography';
import MenuItem from '../../components/atoms/MenuItem';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import Button from '../../components/atoms/Button/Button';
import Tabs from '../../components/organisms/Tabs';
import { makeStyles } from '@mui/styles'; 
import Image from '../../components/atoms/Image';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import KindlePopUp from '../../components/organisms/KindlePopUp';
import  {bookSummary} from './constants';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HeadsetIcon from '@mui/icons-material/Headset';

const useStyles = makeStyles({
	root: {
        marginLeft: 'auto',
	},
	img: {
		height: '30%',
		width: '30%',
	},
  title:{
    fontWeight: 'bold'
  },
  firstgrid:{
    borderBottom: '1px solid #DBE1E5',
    width: '155%',
  },
  typo:{
    width:'20%'
  },
  icon:{
    color: '#566B6F'
  }
});

export type BookDetailsProps = {
    title: string,
    author: string,
    image: string,
}

const BookDetailsPage: React.FC<BookDetailsProps> = ((props) => {
    const classes = useStyles();
    
    const [isKindleOpen, setKindleOpen] = useState<boolean>(false);

    return (
      <Grid container direction='column' rowSpacing={4} className={classes.root} style={{width:'81%', marginTop: '35px'}}>
          <Grid item display='flex'>
              <Typography children='Get the key ideas from' variant='body1' fontFamily='CeraProMedium'/>
          </Grid>
        <Grid item container direction="row" columnSpacing={4}>
          <Grid
            item
            xs={4}
            container
            direction="column"
            alignItems="baseline"
            rowSpacing={3}
          >
            <Grid item>
              <Typography variant="h3" children={props.title} className={classes.title} fontFamily='CeraProBold' />
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                children="The Decision-Making Tool for Every Business (Including Yours)"
                fontFamily='CeraProRegular'
                color='#121C37'
              />
            </Grid>
            <Grid item>
              <Typography variant="body1" children={`By ${props.author}`} />
            </Grid>
            <Grid item display='flex' columnGap={4}>
            <Grid display='flex' columnGap={1} item xs={8} alignItems='flex-end'>
              <AccessTimeIcon className={classes.icon}/>
              <Typography children='15-minute read' variant ='subtitle2'/>
            </Grid>
            <Grid display='flex' alignItems='flex-end'>
              <HeadsetIcon className={classes.icon} />
              <Typography children='Audio available' variant ='subtitle2' className={classes.typo} color='#566B6F' fontFamily='CeraProMedium'/>
            </Grid>
            </Grid>
            <Grid item container direction="row" columnGap={3}>
              <Button title="Read now" backgroundColor='#2CE181' color='#074453' />
              <Button startIcon={<ShoppingCartOutlinedIcon />} title="Buy Book" border='1px solid black' color='#2CE181' />
              <Button title="Send to Kindle" color='#325164' endIcon={<ArrowRightAltOutlinedIcon/> } onClick={() => {setKindleOpen(true)}} />
              <KindlePopUp bookName={props.title} open={isKindleOpen} handleClose={() => {setKindleOpen(false)}} title={'Send blinks right to your Kindle from within the app'} />
            </Grid>
            <Grid item>
              <Tabs value="1" handleChange={() => {}} bookSummary={bookSummary} title={props.title} />
            </Grid>
            <Grid item className={classes.firstgrid}>
              <div ></div>
            </Grid>
          </Grid>
          <Grid item xs={3} justifyContent="flex-start" display="flex">
            <Image
              src={props.image}
              className={classes.img}
            />
          </Grid>
        </Grid>
      </Grid>
    );
});

export default BookDetailsPage;
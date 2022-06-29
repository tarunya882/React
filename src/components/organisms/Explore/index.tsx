import React, {useState} from 'react';
import Typography from '../../atoms/Typography';
import {KeyboardArrowDown, KeyboardArrowUp} from '@mui/icons-material';
import {Grid} from '@mui/material';
import { makeStyles } from '@mui/styles'; 
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import DeveloperBoardOffOutlinedIcon from '@mui/icons-material/DeveloperBoardOffOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';
import ManageHistoryOutlinedIcon from '@mui/icons-material/ManageHistoryOutlined';
import CorporateFareOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import MoneyOutlinedIcon from '@mui/icons-material/MoneyOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BiotechOutlinedIcon from '@mui/icons-material/BiotechOutlined';
import AnchorOutlinedIcon from '@mui/icons-material/AnchorOutlined';
import LiquorOutlinedIcon from '@mui/icons-material/LiquorOutlined';
import EmojiPeopleOutlinedIcon from '@mui/icons-material/EmojiPeopleOutlined';
import ForestOutlinedIcon from '@mui/icons-material/ForestOutlined';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import WifiTetheringErrorRoundedOutlinedIcon from '@mui/icons-material/WifiTetheringErrorRoundedOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

export type ExploreProps = {
  isExplore: boolean,
  onCategoryClick: (category: string) => void;
}

export type ModalProps = {
  onCategoryClick: (category: string) => void;
}

const useStyles = makeStyles({
	baseline: {
		width: 'max-content',
        borderBottom: '2px solid #0ADE72',
	},
    explore:{
        width: 'fit-content'
    },
    divider: {
        borderBottom: "1px solid #CAD5D8",
      },
      content:{
          marginRight:'10px',
      },
      root:{
        backgroundColor: '#F1F6F4',
      },
      typography: {
        color: '#347DF2',
      },
      icon:{
        marginTop:'5px',
        cursor: 'pointer'
      }

});

const style = {
    position: 'absolute' as 'absolute',
    top: '46%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export const Modal:React.FC<ModalProps> = ((props) => {
    const classes=useStyles();
    return (
      <Grid
        container
        direction="column"
        sx={style}
        display="flex"
        justifyContent="center"
        rowSpacing={3}
        style={{backgroundColor: '#F1F6F4', zIndex: '1', border: 'none'}}
      >
        <Grid item container direction="row" xs={8}>
          <Grid item xs={3} display="flex" justifyContent="flex-end" style={{marginLeft:'12px'}}>
            <Typography variant="body1" children="Explore by Category" className={classes.typography} fontFamily='CeraProBold'/>
          </Grid>
          <Grid item xs={3}>
            {" "}
            <Typography
              variant="body1"
              children="See recently added titles"
              color='#3C4866'
              fontFamily='CeraProBold'
            />
          </Grid>
          <Grid item>
            {" "}
            <Typography variant="body1" children="See popular titles" color='#3C4866' fontFamily='CeraProBold'/>
          </Grid>
        </Grid>
        <Grid item display="flex" justifyContent="center">
          <Grid item xs={8}>
            <div className={classes.divider}></div>{" "}
          </Grid>
        </Grid>
        <Grid item display="flex" justifyContent="center" className={classes.content}>
          <Grid item xs={8} container direction="column" rowGap={3}>
            <Grid
              container
              display="flex"
              direction='row'
              justifyContent="space-between"
              columnSpacing={9}
            >
                <Grid display='flex' style={{cursor:'pointer'}} columnGap={1} item xs={4}  onClick={() => props.onCategoryClick('Entreprenuership')}>
                <AccountBalanceIcon />
                  <Typography children='Entreprenurship' variant ='body1' fontFamily='CeraProMedium' color='#507181'/>
                </Grid>
                <Grid display='flex' columnGap={1} item xs={4} >
                <AccountBalanceIcon />
                  <Typography children='Politics' variant ='body1' fontFamily='CeraProMedium' color='#507181'/>
                </Grid>
                <Grid display='flex' columnGap={1} item xs={4} >
                <AccountBalanceIcon />
                  <Typography children='Marketing & sales' variant ='body1' fontFamily='CeraProMedium' color='#507181'/>
                </Grid>
            </Grid>
            <Grid
              container
              display="flex"
              direction='row'
              justifyContent="space-between"
              columnSpacing={9}
            >
              <Grid display='flex' columnGap={1} item xs={4} >
                  <ScienceOutlinedIcon />
                  <Typography children='Science' variant ='body1' fontFamily='CeraProMedium' color='#507181'/>
                </Grid>
                <Grid display='flex' columnGap={1} item xs={4} >
                  <HealthAndSafetyOutlinedIcon />
                  <Typography children='Health & Nutrition' variant ='body1' fontFamily='CeraProMedium' color='#507181'/>
                </Grid>
                <Grid display='flex' columnGap={1} item xs={4} >
                  <DeveloperBoardOffOutlinedIcon />
                  <Typography children='Personal Development' variant ='body1' fontFamily='CeraProMedium' color='#507181'/>
                </Grid>
            </Grid>
            <Grid
              container
              display="flex"
              direction='row'
              justifyContent="space-between"
              columnSpacing={9}
            >
               <Grid display='flex' columnGap={1} item xs={4} >
                  <LanguageOutlinedIcon />
                  <Typography children='Economics' variant ='body1' fontFamily='CeraProMedium' color='#507181'/>
                </Grid>
                <Grid display='flex' columnGap={1} item xs={4} >
                  <HistoryEduOutlinedIcon />
                  <Typography children='History' variant ='body1' fontFamily='CeraProMedium' color='#507181'/>
                </Grid>
                <Grid display='flex' columnGap={1} item xs={4} >
                  <SmsOutlinedIcon />
                  <Typography children="Communication skills" variant ='body1' fontFamily='CeraProMedium' color='#507181'/>
                </Grid>
            </Grid>
            <Grid
              container
              display="flex"
              direction='row'
              justifyContent="space-between"
              columnSpacing={9}
            >
               <Grid display='flex' columnGap={1} item xs={4} >
                  <CorporateFareOutlinedIcon />
                  <Typography children='Corporate Culture' variant ='body1' fontFamily='CeraProMedium' color='#507181'/>
                </Grid>
                <Grid display='flex' columnGap={1} item xs={4} >
                  <ManageHistoryOutlinedIcon />
                  <Typography children='Management' variant ='body1' fontFamily='CeraProMedium' color='#507181'/>
                </Grid>
                <Grid display='flex' columnGap={1} item xs={4} >
                  <LightbulbOutlinedIcon />
                  <Typography children="Motivation" variant ='body1' fontFamily='CeraProMedium' color='#507181'/>
                </Grid>
            </Grid>
            <Grid
              container
              display="flex"
              direction='row'
              justifyContent="space-between"
              columnSpacing={9}
            >
                 <Grid display='flex' columnGap={1} item xs={4} >
                  <MoneyOutlinedIcon />
                  <Typography children='Money & Invests' variant ='body1' fontFamily='CeraProMedium' color='#507181'/>
                </Grid>
                <Grid display='flex' columnGap={1} item xs={4} >
                  <PsychologyOutlinedIcon />
                  <Typography children='Psychology' variant ='body1' fontFamily='CeraProMedium' color='#507181'/>
                </Grid>
                <Grid display='flex' columnGap={1} item xs={4} >
                  <ProductionQuantityLimitsOutlinedIcon />
                  <Typography children="Productivity" variant ='body1' fontFamily='CeraProMedium' color='#507181'/>
                </Grid>
            </Grid>
            <Grid
              container
              display="flex"
              direction='row'
              justifyContent="space-between"
              columnSpacing={9}
            >
                 <Grid display='flex' columnGap={1} item xs={4} >
                  <FavoriteBorderOutlinedIcon />
                  <Typography children='Relationships' variant ='body1' fontFamily='CeraProMedium' color='#507181'/>
                </Grid>
                <Grid display='flex' columnGap={1} item xs={4} >
                  <BiotechOutlinedIcon />
                  <Typography children='Technology' variant ='body1' fontFamily='CeraProMedium' color='#507181'/>
                </Grid>
                <Grid display='flex' columnGap={1} item xs={4} >
                  <AnchorOutlinedIcon />
                  <Typography children="Mindfulness" variant ='body1' fontFamily='CeraProMedium' color='#507181'/>
                </Grid>
            </Grid>
            <Grid
              container
              display="flex"
              direction='row'
              justifyContent="space-between"
              columnSpacing={9}
            >
                 <Grid display='flex' columnGap={1} item xs={4} >
                  <LiquorOutlinedIcon />
                  <Typography children='Parenting' variant ='body1' fontFamily='CeraProMedium' color='#507181'/>
                </Grid>
                <Grid display='flex' columnGap={1} item xs={4} >
                  <EmojiPeopleOutlinedIcon />
                  <Typography children='Society & Culture' variant ='body1' fontFamily='CeraProMedium' color='#507181'/>
                </Grid>
                <Grid display='flex' columnGap={1} item xs={4} >
                  <ForestOutlinedIcon />
                  <Typography children="Environment" variant ='body1' fontFamily='CeraProMedium' color='#507181'/>
                </Grid>
            </Grid>
            <Grid
              container
              display="flex"
              direction='row'
              justifyContent="space-between"
              columnSpacing={9}
            >
                 <Grid display='flex' columnGap={1} item xs={4} >
                  <DriveFileRenameOutlineOutlinedIcon />
                  <Typography children='Biography' variant ='body1' fontFamily='CeraProMedium' color='#507181'/>
                </Grid>
                <Grid display='flex' columnGap={1} item xs={4} >
                  <WifiTetheringErrorRoundedOutlinedIcon />
                  <Typography children='Career' variant ='body1' fontFamily='CeraProMedium' color='#507181'/>
                </Grid>
                <Grid display='flex' columnGap={1} item xs={4} >
                  <SchoolOutlinedIcon />
                  <Typography children="Education" variant ='body1' fontFamily='CeraProMedium' color='#507181' />
                </Grid>
            </Grid>
            
          </Grid>
        </Grid>
      </Grid>
    );
});

const Explore : React.FC<ExploreProps>= ((props)=>{
    const classes = useStyles();
    const [arrowPosition, setArrowPosition] = useState<boolean>(false);
    const handleArrowClick = () => {
        setArrowPosition((prev)=>{
            return !prev;
        })
    }
   
    return(
        <>
        <Grid container direction='row' className={props.isExplore?classes.baseline: classes.explore}>
            <Typography variant="h6" children="Explore" fontFamily='CeraProMedium'color='#3D4D6B'/>
            {arrowPosition ? <KeyboardArrowUp className={classes.icon} onClick={handleArrowClick}/> : <KeyboardArrowDown className={classes.icon} onClick={handleArrowClick} />}
        </Grid>
       
        {arrowPosition ? <Modal onCategoryClick={(category)=> {props.onCategoryClick(category); handleArrowClick()}} />:""}
        </>
    )
});
export default Explore;





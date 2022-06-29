import React, {useState} from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { makeStyles,withStyles } from '@mui/styles'; 
import Typography from '../../atoms/Typography';
import DialogContent from '@mui/material/DialogContent';
import {Grid} from '@mui/material';
import Button from '../../atoms/Button/Button';
import CustomizedSelects from '../../molecules/KindleButton';
import CloseIcon from '@mui/icons-material/Close';
import KindleSignUp from '../KindleSignUp';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import KindleSignUpSuccess from '../KindleSignUpSuccess';

const useStyles = makeStyles({
    root:{
        width:'40%',
    },
    filledButton:{
        width:'100%'
    },
    icon:{
        marginLeft:'6px',
        color:'#AEAEAE',
        paddingTop:'4px'
    },
    icon1:{
        marginRight:'auto',
        marginLeft:'auto',
        color: '#2CE181',
    }
  });

export type KindleProps = {
    handleClose: () => void;
    open: boolean;
    title: string,
    bookName: string,
}

const KindlePopUp: React.FC<KindleProps> = ((props) => {
    const classes = useStyles();
    const [status, setStatus] = useState<boolean>(false);
    const handleSignUpKindle = () =>{
        setStatus(true);
    }
    return (
      <Dialog
        onClose={props.handleClose}
        open={props.open}
        className={classes.root}
        style={{ left:'38%'}}
      >
        <CloseIcon className={classes.icon} onClick={props.handleClose} />
        {status ? <CheckCircleOutlineIcon className={classes.icon1}/> : <><DialogTitle>
          Set up your Kindle
        </DialogTitle>
        <DialogTitle style={{ fontSize: "inherit" ,fontFamily:'CeraProMedium', color:'#8C9192'}}>
          {props.title}
        </DialogTitle></>}
        <DialogContent>
            {!status ? 
            <KindleSignUp onClick={handleSignUpKindle} /> : 
            <KindleSignUpSuccess title={props.bookName} handleClose={props.handleClose} />}
        </DialogContent>
      </Dialog>
    );
});

export default KindlePopUp;

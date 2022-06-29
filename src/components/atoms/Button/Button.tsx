import React from 'react';
import MuiButton from '@mui/material/Button';
import { makeStyles } from '@mui/styles'; 

const useStyles = makeStyles({
    root: {
        textTransform: 'none',
        height: '28px',
        backgroundColor: '#2CE181',
    },
	primary: {
        backgroundColor: '#2CE181',
        color: '#074453',
        '&:active':{
            backgroundColor: '#2CE181',
        },
    },
});

export type ButtonProps = {
    title: React.ReactNode,
    color?: string,
    backgroundColor?: string,
    border?: string,
    variant?: 'text'| 'outlined'| 'contained',
    startIcon?: React.ReactNode,
    endIcon?: React.ReactNode,
    disabled?: boolean,
    onClick?: () => void,
    className?: string,
}

const Button: React.FC<ButtonProps> = ((props) => {
    const classes = useStyles();
    return(
        <MuiButton
          variant={props.variant}
          disabled={props.disabled}
          startIcon={props.startIcon}
          endIcon={props.endIcon}
          onClick={props.onClick}
          className={props.className}
          disableElevation
          disableRipple
          style={{
            backgroundColor: props.backgroundColor,
            color: props.color,
            border: props.border,
            textTransform: 'none',
            fontWeight: 'bold',
          }}
        >{props.title}</MuiButton>
    );
})

export default Button;

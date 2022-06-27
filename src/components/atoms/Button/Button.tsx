import React from 'react';
import MuiButton from '@mui/material/Button';

export type ButtonProps = {
    title: React.ReactNode,
    color?: string,
    variant?: 'text'| 'outlined'| 'contained',
    startIcon?: React.ReactNode,
    endIcon?: React.ReactNode,
    disabled?: boolean,
    onClick?: () => void,
    className?: string,
}

const Button: React.FC<ButtonProps> = ((props) => {
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
        >{props.title}</MuiButton>
    );
})

export default Button;

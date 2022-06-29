import React from 'react';
import {Avatar as MuiAvatar} from '@mui/material';

export type AvatarProps={
    src?:string;
    children?:string;
    className?:string;
    variant:'rounded'|'square'|'circular';
};
  
const Avatar:React.FC<AvatarProps>= ((props) => {
    return (
        <MuiAvatar alt="User Avatar" src={props.src} variant={props.variant} className={props.className} children={props.children}/>
    );
});

export default Avatar;

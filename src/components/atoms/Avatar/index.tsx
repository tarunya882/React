import React from 'react';
import {Avatar as MuiAvatar} from '@mui/material';

export type AvatarProps={
};
  
const Avatar:React.FC<AvatarProps>= () => {
    return (
        <MuiAvatar alt="User Avatar"/>
    );
}

export default Avatar;
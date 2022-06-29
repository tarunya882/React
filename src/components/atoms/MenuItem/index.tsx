import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemText';

export type MenuItemProps = {
    icon?: React.ReactNode,
    title: string,
}
 
 const Menu : React.FC<MenuItemProps>= ((props)=>{
    return(
        <div>
       <MenuItem>
       <ListItemIcon>
           {props.icon}
       </ListItemIcon>
       <ListItemText>{props.title}</ListItemText>
       </MenuItem>
      </div>
    );
 });
 export default Menu;

import React from "react";
import { Typography } from "@mui/material";

export type TypographyProps = {
  variant?: 
  | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline' | 'inherit'
  children?: React.ReactNode,
  className?: string,
  noWrap?: boolean,
  color?: string,
  fontFamily?: string,
}

const TypographyComponent:React.FC<TypographyProps> = ((props) => {

  return <Typography fontFamily={props.fontFamily} variant={props.variant} className={props.className} noWrap={props.noWrap} color={props.color}>{props.children}</Typography>
});


export default TypographyComponent;


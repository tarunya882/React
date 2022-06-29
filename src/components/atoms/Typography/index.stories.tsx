import React from "react";
import TypographyComponent from "./index";


const TypographyComponentStory = {
  title: "Atoms/Typography",
  component: TypographyComponent,
};

const Template = (args) => (
    <TypographyComponent {...args} />
);

export const alphaValue= Template.bind({});
alphaValue.args = {
  variant:'h1',
  children:'Header1',
  fontFamily: 'CeraProBlackItalic'
};

export const alphaHeader1= Template.bind({});
alphaHeader1.args = {
  variant:'h2',
  children:'Header2',
  fontFamily: 'CeraProBlackItalic'

};

export const alphaHeader2= Template.bind({});
alphaHeader2.args = {
  variant:'h3',
  children:'Header3',
  fontFamily: 'CeraProBlackItalic'

};

export const alphaHeader3= Template.bind({});
alphaHeader3.args = {
  variant:'h3',
  children:'Header3',
  fontFamily: 'CeraProBlackItalic'

};

export const alphaHeader4= Template.bind({});
alphaHeader4.args = {
  variant:'h4',
  children:'Header4',
  fontFamily: 'CeraProBlackItalic'

};
export const alphaHeader5= Template.bind({});
alphaHeader5.args = {
  variant:'h5',
  children:'Header5',
  fontFamily: 'CeraProBlackItalic'

};
export const alphaHeader6= Template.bind({});
alphaHeader6.args = {
  variant:'h6',
  children:'Header6',
  fontFamily: 'CeraProBlackItalic'

};
export const subtitle1= Template.bind({});
subtitle1.args = {
  variant:'subtitle1',
  children:'subtitle1',
  fontFamily: 'CeraProBlackItalic'

};

export const subtitle2= Template.bind({});
subtitle2.args = {
  variant:'subtitle2',
  children:'subtitle2',
  fontFamily: 'CeraProBlackItalic'

};
export const caption= Template.bind({});
caption.args = {
  variant:'caption',
  children:'caption',
};
export const body1= Template.bind({});
body1.args = {
  variant:'body1',
  children:'body1',
};
export default TypographyComponentStory;
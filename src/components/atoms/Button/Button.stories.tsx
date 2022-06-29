import React, {ComponentProps} from 'react';
import { Story } from '@storybook/react';
import Button from './Button';
import {ButtonProps} from './Button';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const ButtonStory = {
    title: 'Atoms/Button',
    component: Button,
}

const Template: Story<ComponentProps<typeof Button>> = (args:ButtonProps) => <Button {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
    title: 'Primary Button',
    color: '#325164',
};

export const FilledButton = Template.bind({});
FilledButton.args = {
    title : 'Read Now',
    backgroundColor : '#2CE181'
};

export const OutlinedButtonIcon = Template.bind({});
OutlinedButtonIcon.args={
    border:'1px solid black',
    color:'#2CE181',
    startIcon: <ShoppingCartOutlinedIcon />,
    title: 'Shop now'
}

export default ButtonStory;


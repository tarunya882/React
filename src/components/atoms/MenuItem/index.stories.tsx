import React, {ComponentProps} from 'react';
import { Story } from '@storybook/react';
import Menu, {MenuItemProps} from './index';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';

const MenuStory = {
    title: 'Atoms/Menu',
    component: Menu,
}

const Template: Story<ComponentProps<typeof Menu>> = (args:MenuItemProps) => <Menu {...args} />;

export const IconText = Template.bind({});
IconText.args = {
    title: 'Science',
    icon: <ScienceOutlinedIcon />
};

export default MenuStory;


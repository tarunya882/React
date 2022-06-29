import React, {ComponentProps} from 'react';
import { Story } from '@storybook/react';
import Header,{HeaderProps} from './index';

const HeaderStory = {
    title: 'Organisms/Header',
    component: Header,
}

const Template: Story<ComponentProps<typeof Header>> = (args: HeaderProps) => <Header {...args} />;

export const HeaderBase = Template.bind({});
HeaderBase.args = {
    onCategoryClick:{}
};
export default HeaderStory;

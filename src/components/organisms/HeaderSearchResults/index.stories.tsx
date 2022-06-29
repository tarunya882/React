import React, {ComponentProps} from 'react';
import { Story } from '@storybook/react';
import HeaderSearchResults,{HeaderSearchProps} from './index';

const HeaderSearchResultsStory = {
    title: 'Organisms/HeaderSearchResults',
    component: HeaderSearchResults,
}

const Template: Story<ComponentProps<typeof HeaderSearchResults>> = (args: HeaderSearchProps) => <HeaderSearchResults {...args} />;

export const HeaderSearchResultsBase = Template.bind({});
HeaderSearchResultsBase.args = {
    open: true,
    handleClose: {}
};
export default HeaderSearchResultsStory;

import React, {ComponentProps} from 'react';
import { Story } from '@storybook/react';
import HeaderSearchResult,{HeaderSearchProps} from './index';

const HeaderSearchResultsStory = {
    title: 'Molecules/HeaderSearchResult',
    component: HeaderSearchResult,
}

const Template: Story<ComponentProps<typeof HeaderSearchResult>> = (args: HeaderSearchProps) => <HeaderSearchResult {...args} />;

export const HeaderSearchResultsBase = Template.bind({});
HeaderSearchResultsBase.args = {
    title: 'The Grid',
    author: 'Mark Wilknson'
};
export default HeaderSearchResultsStory;

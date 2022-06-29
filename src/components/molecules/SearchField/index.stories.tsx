import React, {ComponentProps} from 'react';
import { Story } from '@storybook/react';
import SearchBar, {SearchBarProps} from './index';

const SearchBarStory = {
    title: 'Molecules/SearchBar',
    component: SearchBar,
}

const Template: Story<ComponentProps<typeof SearchBar>> = (args: SearchBarProps) => <SearchBar {...args} />;

export const Search = Template.bind({});
Search.args = {
    searchValue: '',
    onchange: {},
};
export default SearchBarStory;

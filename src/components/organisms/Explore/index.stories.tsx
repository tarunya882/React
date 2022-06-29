import React, {ComponentProps} from 'react';
import { Story } from '@storybook/react';
import Explore, {ExploreProps} from './index';

const ExploreStory = {
    title: 'Organisms/Explore',
    component: Explore,
}

const Template: Story<ComponentProps<typeof Explore>> = (args: ExploreProps) => <Explore {...args} />;

export const ExploreTab = Template.bind({});
ExploreTab.args = {
    isExplore: true,
    onCategoryClick: {},
};
export default ExploreStory;

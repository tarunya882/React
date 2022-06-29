import React, {ComponentProps} from 'react';
import { Story } from '@storybook/react';
import Tabs,{TabProps} from './index';
import { bookSummary } from '../../../pages/BookDetailsPage/constants';

const TabsStory = {
    title: 'Organisms/Tabs',
    component: Tabs,
}

const Template: Story<ComponentProps<typeof Tabs>> = (args: TabProps) => <Tabs {...args} />;

export const TabsBase = Template.bind({});
TabsBase.args = {
   value:'1',
   handleChange:{},
   bookSummary:bookSummary
};
export default TabsStory;

import React, {ComponentProps} from 'react';
import { Story } from '@storybook/react';
import KindlePopUp,{KindleProps} from './index';

const KindlePopUpStory = {
    title: 'Organisms/KindlePopUp',
    component: KindlePopUp,
}

const Template: Story<ComponentProps<typeof KindlePopUp>> = (args: KindleProps) => <KindlePopUp {...args} />;

export const KindlePopUpBase = Template.bind({});
KindlePopUpBase.args = {
    open: true,
    handleClose: {},
    bookName: 'The Grid',
    title: 'Send blinks right to your Kindle from within the app'
};
export default KindlePopUpStory;

import React, {ComponentProps} from 'react';
import { Story } from '@storybook/react';
import KindleSignUpSuccess,{KindleProps} from './index';

const KindleSignUpSuccessStory = {
    title: 'Organisms/KindleSignUpSuccess',
    component: KindleSignUpSuccess,
}

const Template: Story<ComponentProps<typeof KindleSignUpSuccess>> = (args: KindleProps) => <KindleSignUpSuccess {...args} />;

export const KindleSignUpSuccessBase = Template.bind({});
KindleSignUpSuccessBase.args = {
    handleClose: {},
    title: 'The Grid',
};
export default KindleSignUpSuccessStory;

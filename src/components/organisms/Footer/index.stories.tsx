import React, {ComponentProps} from 'react';
import { Story } from '@storybook/react';
import Footer from './index';

const FooterStory = {
    title: 'Organisms/Footer',
    component: Footer,
}

const Template: Story<ComponentProps<typeof Footer>> = () => <Footer />;

export const FooterBase = Template.bind({});
FooterBase.args = {
};
export default FooterStory;

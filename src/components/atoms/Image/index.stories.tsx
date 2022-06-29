import React, {ComponentProps} from 'react';
import { Story } from '@storybook/react';
import Image, {ImageProps} from './index';

const ImageStory = {
    title: 'Atoms/Image',
    component: Image,
}

const Template: Story<ComponentProps<typeof Image>> = (args:ImageProps) => <Image {...args} />;

export const BookImage = Template.bind({});
BookImage.args = {
    src: "https://images.blinkist.io/images/books/610d2ea66cee070007427619/1_1/470.jpg",
};

export default ImageStory;


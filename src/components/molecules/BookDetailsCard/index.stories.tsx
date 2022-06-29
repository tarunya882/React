import React, {ComponentProps} from 'react';
import { Story } from '@storybook/react';
import BookDetails, {BookDetailsProps} from './index';

const BookCardStory = {
    title: 'Molecules/BookDetailsCard',
    component: BookDetails,
}

const Template: Story<ComponentProps<typeof BookDetails>> = (args: BookDetailsProps) => <BookDetails {...args} />;

export const BookDetail = Template.bind({});
BookDetail.args = {
   title: "The Atheist Delusion",
   author: "Ahmed Al-Hasan",
   image:
   'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1516629031i/38121569.jpg'
};
export default BookCardStory;

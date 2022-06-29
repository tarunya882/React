import React, {ComponentProps} from 'react';
import { Story } from '@storybook/react';
import BookCard, {BookCardProps} from './index';

const BookCardStory = {
    title: 'Molecules/BookCard',
    component: BookCard,
}

const Template: Story<ComponentProps<typeof BookCard>> = (args: BookCardProps) => <BookCard {...args} />;

export const Card = Template.bind({});
Card.args = {
   id: 4,
   title: "Rare Breed",
   author: "Sunny Bonnell and Ashleigh Hansberger",
   time: "13",
   category: "Entrepreneurship",
   image:
     "https://images.blinkist.io/images/books/5f359f7e6cee0700065032a6/1_1/470.jpg",
};
export default BookCardStory;

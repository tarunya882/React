import React, {ComponentProps} from 'react';
import { Story } from '@storybook/react';
import BookCards, {BookCardsProps} from './index';

const BookCardsStory = {
    title: 'Organisms/BookCards',
    component: BookCards,
}

const Template: Story<ComponentProps<typeof BookCards>> = (args: BookCardsProps) => <BookCards {...args} />;

const data = [
  {
    id: 7,
    title: "Financial Freedom",
    author: "Grant Sabatier",
    time: "15",
    category: "Finance",
    image:
      "https://images.blinkist.io/images/books/5ef5f7f06cee0700068b1fe8/1_1/470.jpg",
  },
  {
    id: 8,
    title: "The Last Safe Investment",
    author: "Michael Ellsberg and Bryan Franklin",
    time: "15",
    category: "Finance",
    image:
      "https://images.blinkist.io/images/books/5f10c8936cee0700066c458c/1_1/470.jpg",
  },
  {
    id: 9,
    title: "The New Breed",
    author: "Kate Darling",
    time: "12",
    category: "Technology",
    image:
      "https://images.blinkist.io/images/books/610d2aa76cee0700074275e9/1_1/470.jpg",
  }
];

export const BookCardsOrganism = Template.bind({});
BookCardsOrganism.args = {
    booksData : data,
    onBookCardClick: {},
};
export default BookCardsStory;

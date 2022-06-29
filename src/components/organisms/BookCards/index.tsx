import React from "react";
import { makeStyles } from '@mui/styles'; 
import Grid from '@mui/material/Grid';
import BookCard from '../../molecules/BookCard';

const useStyles = makeStyles({
	root: {
		width: '19%',
	},
	img: {
		height: '100%',
		width: '100%',
	},
	content: {
		borderBottom: '1px solid black',
		marginBottom: '17px',
	},
	firstGrid: {
		rowGap: '8px',
		marginTop: '6px',
	}
});

export type BookDetails = {
    id: number,
    title: string,
    author: string,
    time: string,
    category: string,
    image:string,
}
export type BookCardsProps = {
    onBookCardClick : (bookDetails: BookDetails) => void;
	booksData: BookDetails[];
}

const BookCards: React.FC<BookCardsProps> = ((props) => {
	const classes = useStyles();
	return (
        <>
        <Grid container direction='row' xs={7}  style={{margin:'auto', marginTop:'40px'}}>
            {props.booksData.map((book: BookDetails) => {
                return(
                    <Grid item xs={4}>
                        <BookCard image={book.image} title={book.title} author={book.author} time={book.time} onClick={() => props.onBookCardClick(book)} id={String(book.id)} />
                    </Grid>
                )
            })}
        </Grid>
        </>
	);
});

export default BookCards;

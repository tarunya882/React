import React, {useState} from 'react';
import Header from '../../components/organisms/Header';
import {Grid, Box, Paper, Button} from '@mui/material';
import Image from '../../components/atoms/Image';
import { makeStyles,withStyles } from '@mui/styles'; 
import BookDetailsCard from '../../components/molecules/BookDetailsCard';
import SearchBar from '../../components/molecules/SearchField';
import Typography from '../../components/atoms/Typography';
import HomePage from '../HomePage';
import BookCards from '../../components/organisms/BookCards';
import BookDetailsPage from '../BookDetailsPage';
import { BookDetails } from '../../components/organisms/BookCards';
import Footer from '../../components/organisms/Footer';
import { booksData } from '../../mockdata/booksData';

const useStyles = makeStyles({
    main:{
        overflowX:'hidden'
    },
	content:{
        width:'51%',
    },
    img:{
        width:'51%',
        height:'fit-content',
    },
    root:{
        marginTop:'15px',
    },
    search:{
        width: '82%',
    },
    typography:{
        width:'78%',
    }
});

const LandingPage = () => {
    const classes = useStyles();
    const [category, setCategory] = useState<string>('');
    const book= {id:0, title: '', author: '', category: '', time: '',image: ''}
    const [bookDetails, setBookDetails] = useState<BookDetails>(book);

    const handleCategoryClick = (category: string) => {
        setCategory(category);
    }

    const handleBookCardClick = (bookDetails: BookDetails) => {
        setBookDetails(bookDetails);
        setCategory('');
    }

    return (
      <Grid container direction="column" className={classes.main}>
        <Grid xs={12} className={classes.root}>
          <Header onCategoryClick={handleCategoryClick} />
        </Grid>
        {category === "" ? (
            bookDetails.title==='' ? <HomePage /> : <BookDetailsPage title={bookDetails.title} author={bookDetails.author} image={bookDetails.image} />
        ) : (
          <BookCards onBookCardClick={handleBookCardClick} booksData={booksData} />
        )}
        <Footer />
      </Grid>
    );
}

export default LandingPage;


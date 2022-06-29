import React from "react";
import Header from "../../components/organisms/Header";
import { Grid, Box, Paper, Button } from "@mui/material";
import Image from "../../components/atoms/Image";
import { makeStyles, withStyles } from "@mui/styles";
import BookDetailsCard from "../../components/molecules/BookDetailsCard";
import SearchBar from "../../components/molecules/SearchField";
import Typography from "../../components/atoms/Typography";

const useStyles = makeStyles({
  content: {
    width: "51%",
  },
  img: {
    width: "51%",
    height: "fit-content",
  },
  root: {
    marginTop: "15px",
  },
  search: {
    width: "82%",
  },
  typography: {
    width: "78%",
  },
});

const HomePage = () => {
  const classes = useStyles();
  return (
    <Grid xs={12}>
      <Grid>
        <Image
          src={
            "https://prabidhi.info/en/wp-content/uploads/2018/12/Blinkist-Review-2019-How-to-Get-Blinkist-Premium-for-free-1024x319.png"
          }
          className={classes.img}
        />
      </Grid>
      <Grid xs={12} className={classes.typography}>
        <Typography
          children="Upvote your favourites below or search to add a new book"
          variant="h6"
          color="#485457"
          fontFamily="CeraProMedium"
        />
      </Grid>
      <Grid className={classes.search}>
        <SearchBar searchValue="" onChange={() => {}} />
      </Grid>
      <Grid xs={12} className={classes.root}>
        <Grid
          xs={8}
          justify-content="center"
          display="inline-block"
          className={classes.content}
        >
          <BookDetailsCard
            title="Das Kapital"
            author="Karl Marx"
            image={
              "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1516629031i/38121569.jpg"
            }
          />
          <BookDetailsCard
            title="The Atheist Delusion"
            author="Ahmed Al-Hasan"
            image={
              "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1516629031i/38121569.jpg"
            }
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomePage;

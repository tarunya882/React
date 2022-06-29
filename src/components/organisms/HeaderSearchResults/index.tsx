import React from "react";
import { Grid } from "@mui/material";
import HeaderSearchResult from "../../molecules/HeaderSearchResult";
import { booksData } from "../../../mockdata/booksData";
import { makeStyles } from "@mui/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

const useStyles = makeStyles({
  root: {
    borderBottom: "1px solid #F0F2F4",
  },
  mainroot: {
    width: "50%",
  },
});

export type HeaderSearchProps = {
  open: boolean;
  handleClose: () => void;
};

const HeaderSearchResults: React.FC<HeaderSearchProps> = (props) => {
  const classes = useStyles();
  return (
    <Dialog
      onClose={props.handleClose}
      open={props.open}
      className={classes.mainroot}
    >
      <DialogContent>
        <Grid container direction="row" columnSpacing={1}>
          {booksData.map((book) => {
            return (
              <HeaderSearchResult title={book.title} author={book.author} />
            );
          })}
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default HeaderSearchResults;

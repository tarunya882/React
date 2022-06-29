import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "../../atoms/Typography/index";
import Image from '../../atoms/Image';
import { makeStyles } from '@mui/styles'; 
import Grid from '@mui/material/Grid';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const useStyles = makeStyles({
	root: {
		width: '40%',
		zIndex: '-1',
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
	},
	icon:{

	}
});

export type BookCardProps = {
	id: string,
	image: string,
	title: string,
	author: string,
	time: string,
    onClick : () => void;
}

const BookCard: React.FC<BookCardProps> = ((props) => {
	const classes = useStyles();
	return (
    <Grid className={classes.root} onClick={props.onClick} id={props.id}>
      <Image src={props.image} className={classes.img} />
      <Card>
        <CardActionArea>
          <CardContent className={classes.content}>
            <Grid container direction="column" rowSpacing={3}>
              <Grid
                item
                container
                direction="column"
                alignItems="baseline"
                className={classes.firstGrid}
                textAlign="initial"
              >
                <Typography
                  variant="h5"
                  children={props.title}
                  color="#002F4C"
                />
                <Typography
                  variant="subtitle1"
                  children={props.author}
                  color="#8D969B"
                />
                <Grid
                  display="flex"
                  columnGap={1}
                  item
                  xs={8}
                  alignItems="flex-end"
                >
                  <AccessTimeIcon className={classes.icon} />
                  <Typography
                    variant="subtitle2"
					children={`${props.time}-min read`}
					color="#505B5E"
                    fontFamily="CeraProMedium"
                  />
                </Grid>
              </Grid>
              <Grid item display="flex" justifyContent="flex-end">
                <MoreHorizIcon />
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
});

export default BookCard;

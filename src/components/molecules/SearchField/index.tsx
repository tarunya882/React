import React from 'react';
import InputAdornment from "@mui/material/InputAdornment";
import { Input } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles'; 

const useStyles = makeStyles({
	root: {
		width: '51%'
	}
});

export type SearchBarProps = {
    searchValue: string,
    onChange: () => void,
}

const SearchBar: React.FC<SearchBarProps> = ((props) => {
    const classes = useStyles();
    return(
        <div>
        <Input style={{width:'40%', zIndex:'-1'}}
        placeholder='Search by title or author'
        value={props.searchValue}
        startAdornment={
          <InputAdornment position="start">
              <SearchIcon />
          </InputAdornment>
        }
        onChange={props.onChange}
      />
       </div>
    );
});

export default SearchBar;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import SearchICon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginBottom: theme.spacing(1)
    },
    input: {
      backgroundColor: 'white'
    }
  },

}));

export default function SearchInput(props) {
  const classes = useStyles();

  const { handleSearch ,handleChangeSearch} = props

  return (
    <TextField
      id="search"
      label="Search"
      className={classes.root}
      variant="outlined"
      size="small"
      autoComplete='off'
      onKeyDown={handleSearch}
      onChange={handleChangeSearch}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle search "
              onClick={handleSearch}
              edge="end"
            >
              <SearchICon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

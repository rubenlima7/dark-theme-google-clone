import React, { useState } from 'react';
import './Search.css';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import MicRoundedIcon from '@material-ui/icons/MicRounded';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Search({ hideButtons = false }) {

  const [, dispatch] = useStateValue();

  const [input, setInput] = useState(""); // input search text
  const history = useHistory(); // browser history

  const search = (e) => {
    e.preventDefault(); // prevent page refresh

    console.log("Searching for >> ", input);

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input
    })

    history.push('/search');
  };

  return (
    <form className='search'>
      <div className="search__input">
        <SearchRoundedIcon className="search__inputIcon" />
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder='Search Google or type a URL' />
        <MicRoundedIcon />
      </div>

      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
          <div className="search__buttonsHidden">
            <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
            <Button variant="outlined">I'm Feeling Lucky</Button>
          </div>
        )}

    </form>
  )
}

export default Search

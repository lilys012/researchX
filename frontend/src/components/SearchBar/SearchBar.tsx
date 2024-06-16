import React, { useEffect, useMemo, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

interface searchProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setCurKeyword: React.Dispatch<React.SetStateAction<string>> | null;
}

const SearchBar = (props: searchProps) => {
  const { searchQuery, setSearchQuery, setCurKeyword } = props;

  const onClickClose = () => {
      setSearchQuery("");
  };

  const onSubmitSearchBox = () => {
      setSearchQuery("");
      if (setCurKeyword != null) setCurKeyword(searchQuery);
  };

  return (
      <div className="search-container">
          <div className="search-input-cancel">
              <input
                  type="text"
                  className="search-input"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e)=>{setSearchQuery(e.target.value)}}
                  onKeyDown={(e)=>{
                    if(e.key==='Enter' && searchQuery) onSubmitSearchBox();
                  }}
                  // ref={inputRef}
              />
              <button
                  className={searchQuery ? "cancel-btn" : "hidden cancel-btn"}
                  onClick={onClickClose}
              >
                  <CloseIcon />
              </button>
          </div>
          <button className="search-btn" onClick={onSubmitSearchBox}>
              <SearchIcon />
          </button>
      </div>
  );
};

export default SearchBar;
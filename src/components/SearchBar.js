import axios from 'axios';
import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';

import { Link } from 'react-router-dom';

const SearchBar = () => {
  const [searchChar, setSearchChar]= useState([]);
  const [characterName, setCharacterName]= useState('');

/* https://gateway.marvel.com/v1/public/characters?ts=1&apikey=89c5bb6f000ff89c6b3bfd1804a55184&hash=d8e15a485cc807f99e27672c604d81c5&nameStartsWith= */
    const { t } = useTranslation();

    const handleChar = (charName) => {
      setCharacterName(charName);
            
      if (charName.length >= 1) {
        axios
          .get("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=89c5bb6f000ff89c6b3bfd1804a55184&hash=d8e15a485cc807f99e27672c604d81c5&nameStartsWith=" + charName)
          .then((response) => {
            setSearchChar(response.data.data.results);
          });
        
      }
    }

    console.log(searchChar);
    
    return (
     <>
        <div className="searchBar">
          <label htmlFor="">{t('searchCharacter')}</label>
          <input type="text" name="characterSearch" id="" placeholder={t('searchCharacterName')} onChange={(e) => handleChar(e.target.value)} autoComplete='off'/>
          {
            characterName.length > 0 && 
            <>
              {
                searchChar.length > 0 
                ? 
                <div className='searchedChars'>
                  {
                    searchChar.map((char, key) => (
                      <div key={key}>
                        <div className='searchedCharsName'>
                          <Link to={`character/${char.id}`}>{t('characterName')} : {char.name}</Link>
                        </div>
                      </div>
                    ))
                  }
                </div>  
                : <div className='searchedChars'>{t('notfound')}</div>
              }
            </>
          }
        </div>
     </>
    )
}

export default SearchBar
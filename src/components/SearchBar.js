import React from 'react';

import { useTranslation } from 'react-i18next';

const SearchBar = () => {
/* https://gateway.marvel.com/v1/public/characters?ts=1&apikey=89c5bb6f000ff89c6b3bfd1804a55184&hash=d8e15a485cc807f99e27672c604d81c5&nameStartsWith= */
    const { t } = useTranslation();

    const handleChar = (charName) => {
        console.log(charName.target.value);
    }

  return (
    <div className="searchBar">
        <label htmlFor="">{t('searchCharacter')}</label>
        <input type="text" name="characterSearch" id="" placeholder={t('searchCharacterName')} onChange={handleChar}/>
    </div>
  )
}

export default SearchBar
import React from 'react';

import { useTranslation } from 'react-i18next';

const SearchBar = () => {

    const { t } = useTranslation();

  return (
    <div className="searchBar">
        <label htmlFor="">{t('searchCharacter')}</label>
        <input type="search" name="characterSearch" id="" placeholder={t('searchCharacterName')} />
    </div>
  )
}

export default SearchBar
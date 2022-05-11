import React, { useState } from 'react';
import i18n from '../i18next';


const LanguagesButtons = () => {

  const [activeLang, setActiveLang] = useState('tr');

  const changeLang = lang => {
    i18n.changeLanguage(lang);
    setActiveLang(lang);
  }

  return (
    <div className='LangButtons'>
      <button className={activeLang === 'fr' ? 'langButton langButtonsActive' : 'langButton'} onClick={() => changeLang('fr')}>FR</button>
      <button className={activeLang === 'en' ? 'langButton langButtonsActive' : 'langButton'} onClick={() => changeLang('en')}>EN</button>
      <button className={activeLang === 'tr' ? 'langButton langButtonsActive' : 'langButton'} onClick={() => changeLang('tr')}>TR</button>
    </div>
  )
}

export default LanguagesButtons
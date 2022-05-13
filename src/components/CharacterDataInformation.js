import React from 'react';

import { useTranslation } from 'react-i18next';

const CharacterDataInformation = ({characterInfo, type, notExist}) => {
    const { t } = useTranslation();
  return (
    <>
        <span className='charName'>{t(type)}</span>
        <span className="underline"></span>
        <div className="DataList">
            {
                characterInfo[type].items.length === 0 
                ? <div>{t(notExist)}</div>
                : characterInfo[type].items.map((element, key) => (
                <div key={key}>
                    <div>{element.name}</div>
                </div>
                ))
            }
        </div>      
    </>
  )
}

export default CharacterDataInformation
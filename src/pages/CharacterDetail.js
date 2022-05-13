import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguagesButtons from '../components/LanguagesButtons';
import CharacterDataInformation from '../components/CharacterDataInformation';

const CharacterDetail = () => {
    const [character, setCharacter] = useState([]);
    const { id } = useParams();
    const { t } = useTranslation();

    useEffect(() => {
      getCharacter();          
    }, [])
    

    const getCharacter = () => {    
        axios
            .get(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=89c5bb6f000ff89c6b3bfd1804a55184&hash=d8e15a485cc807f99e27672c604d81c5`)
            .then((response) => {
                setCharacter(response.data.data.results);
            });
    }

    
    return (
        <div className="CharacterDetail">
            <Header />
            <div className="searchAndLang">
                <LanguagesButtons />
            </div>        
            <Link to="/">Ana Sayfaya Dön</Link>
            {
                character.length === 0 
                ? <div>Yükleniyor...</div>
                : 
                (
                    <div className="character">
                       <div className="charHeader">                           
                            <img className='characterImage' src={`${character[0].thumbnail.path}/landscape_incredible.${character[0].thumbnail.extension}`} alt="" />
                            <span className='charName'>
                                {character[0].name}
                                <div className='charDescription'>{character[0].description}</div>
                            </span>
                            
                       </div>
                       <div className="charContainer">
                           <div className="dataHeader">                                   
                               <CharacterDataInformation characterInfo={character[0]} type={'comics'} notExist={'noComics'}/>             
                           </div>
                           <div className="dataHeader">
                                <CharacterDataInformation characterInfo={character[0]} type={'series'} notExist={'noSeries'}/>                                   
                           </div>
                           <div className="dataHeader">
                                <CharacterDataInformation characterInfo={character[0]} type={'stories'} notExist={'noStories'}/>                              
                           </div>
                           <div className="dataHeader">
                                <CharacterDataInformation characterInfo={character[0]} type={'events'} notExist={'noEvents'}/>                              
                           </div>
                       </div>
                       <div className='charDetailButton'>
                        <a href={character[0].urls[0].url} target="_blank" rel='noreferrer'>{t('details')}</a>
                       </div>
                    </div>
                )
            }
            
        </div>
    )
}

export default CharacterDetail
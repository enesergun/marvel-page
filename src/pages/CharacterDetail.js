import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const CharacterDetail = () => {
    const [character, setCharacter] = useState([]);
    const { id } = useParams();

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

    console.log(character);

    return (
        <div className="CharacterDetail">
            <Header />
            <Link to="/">Ana Sayfaya Dön</Link>
            {
                character.length === 0 
                ? <div>Yükleniyor...</div>
                : <div>{character[0].name}</div>
            }
            
        </div>
    )
}

export default CharacterDetail
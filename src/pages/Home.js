import {useState, useEffect} from 'react'

import '../App.css';

import axios from 'axios'

import Pagination from '../components/Pagination';
import Header from '../components/Header'
import CharactersCard from '../components/CharactersCard'
import SearchBar from "../components/SearchBar";
import LanguagesButtons from '../components/LanguagesButtons';
import { Link } from 'react-router-dom';

function Home() {
    const [list, setList] = useState([]);
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(78)
    const [total] = useState(78);
    const [loading, setLoading] = useState();
  
    
    useEffect(() => {
      getData();
    }, [currentPage])
  
  
  const setPage = (value) => {

    if (value.type === "next" && currentPage < total) {
      setCurrentPage((x) => x + 1);
      setOffset(offset + 20);
    } else if (value.type === "prev" && currentPage > 0) {
      setCurrentPage((x) => x - 1);
      setOffset(offset - 20);
    } else if (value.type === "add") {
      setOffset((currentPage - 1) * 20);
      setCurrentPage(value.number);
      
    }
  };
  
  // request to marvel.api
    const getData = () => {
      setLoading(true);
      const characters = JSON.parse(localStorage.getItem(currentPage));
  
      if (characters) {
        setList(characters);
        setPageCount(1560 / 20);
        setLoading(false);
        
        
      } else {
        axios.get(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=89c5bb6f000ff89c6b3bfd1804a55184&hash=d8e15a485cc807f99e27672c604d81c5&offset=${(currentPage - 1) * 20}`)
      .then(function (response) {
        // handle success
        localStorage.setItem(currentPage, JSON.stringify(response.data.data.results));
        setList(response.data.data.results);
        setPageCount(response.data.data.total / 20);
        setLoading(false);
  
    })
      .catch(function (error) {
        // handle error
        console.log(error);
    })
      .then(function () {
      // always executed
    });
    }
  }
  
  console.log(currentPage);
  
    return (
      
      <div className="main">
          <Header />
          
          <div className='searchAndLang'> 
          <SearchBar />
            <LanguagesButtons />
          </div>
  
          {/* CONTENT START */}
          
          <div className="container">          
            {
              loading 
              ? 
              (<div>
                Yükleniyor...
              </div>
              )
              : 
              <>
                {            
                  list.length > 0 &&
                  list.map((item, index) => (
                    <Link to={`character/${item.id}`}><CharactersCard item={item} key={index} /></Link>
                    
                  )) 
                }
              </>
            }
  
          </div>
            {/* CONTENT END */}
  
          {/* PAGINATION START */}
          <Pagination total={total} currentPage={currentPage} click={setPage}/>        
          {/* PAGINATION END */}
      </div>
    );
}

export default Home
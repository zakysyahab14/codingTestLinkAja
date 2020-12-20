import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css'
import moment from 'moment';

import ListMovie from './components/ListMovie'
import SearchBox from './components/SearchBox';
import { Modal, Button } from 'antd';


const App = () => {

  const[movies, setMovies] = useState([]);
  const[moviesSort, setMoviesSort] = useState([]);
  const[moviesSortOld, setMoviesSortOld] = useState([]);
  const[detail, setDetail] = useState({});
  const[searchValue, setSearchValue] = useState('');


  const getMovies = async(searchValue) => {
    const url = `https://5f50ca542b5a260016e8bfb0.mockapi.io/api/v1/movies?title=${searchValue}`;

    const response = await fetch(url);
    const data = await response.json();
      setMovies(data);
    // const dataSort = 

  }
  useEffect(() => {
		getMovies(searchValue);
  }, [searchValue]);

  const getDetail = async(movie) => {
    const url = `https://5f50ca542b5a260016e8bfb0.mockapi.io/api/v1/movies/${movie}`;
    const response = await fetch(url)
    const dataDetail = await response.json();
    setDetail(dataDetail)

  }
  useEffect((movie) => {
    getDetail(movie);
  }, {});
  const handleSort = () => {
    movies.sort(function(a, b) {
      var aDate = moment(a.showTime).format('DD-MMM-YYYY HH:mm')
      var bDate = moment(b.showTime).format('DD-MMM-YYYY HH:mm')

      return new Date(bDate) - new Date(aDate);
    });
      setMoviesSort(movies)
      setMoviesSortOld([])
  }
  const handleSortOld = () => {
    movies.sort(function(a, b) {
      var aDate = moment(a.showTime).format('DD-MMM-YYYY HH:mm')
      var bDate = moment(b.showTime).format('DD-MMM-YYYY HH:mm')

      return new Date(aDate) - new Date(bDate);
    });
    setMoviesSortOld(movies)
    setMoviesSort([])
  }
  return (
    <div className="container">
      <div className="row">
        <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12'>
          <h1 className="mb-0">Coding Test</h1>
          <p>2020 Abdullah Zaky. Coding Test Link Aja</p>
        </div>
        <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 align-self-center mb-3'>
          <Button className="mr-4" type="primary"
          onClick={handleSort}
          >
            <strong>Sort Latest</strong>
          </Button>
          <Button type="primary"
          onClick={handleSortOld}
          >
            <strong>Sort Oldest</strong>
          </Button>
        </div>
        <SearchBox searchValue={searchValue} movies={movies} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <ListMovie 
        movies={movies}
        handleDetail={getDetail}
        detail={detail}
        searchValue={searchValue}
        />
      </div>
    </div>
  );
}

export default App;

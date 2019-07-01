import React, { Component } from 'react';
import Searchbar from './SearchBar';
import omdb from '../apis/omdb';
import MovieList from './MovieList'

class App extends Component{
 
state = { movies : [], term : '' }

onTermSubmit = async term => {
    const response = await omdb.get(`https://www.omdbapi.com/?i=tt3896198&apikey=${54132569}&s=${this.state.term}&r=json`,{
      params : {
        s: term
        
      }
    });
    console.log(response);
    this.setState({
        movies : response.data.Search
    });
  };
  
    render(){
        return(
            <div className="">
                <Searchbar onFormSubmit={this.onTermSubmit}/>
                <div className="">
                <MovieList
                   movies={this.state.movies}
                />
            </div>
            </div>
        )
    }
}

export default App;


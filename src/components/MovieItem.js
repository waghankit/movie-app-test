import React, {Component} from 'react';
import './MovieItem.css';
import StarRating from './StarRating';

class MovieItem extends Component {
    render() {
      return (
        <div className="container">
            <img src={this.props.movie.Poster} alt="Avatar" className="image" />
            <div className="overlay">
             <div className="text">
               <h1>{this.props.movie.Title}</h1>
               <br/>
                {this.props.movie.Year}
                <br/><br/>
                <br/>
                Your Rating
                <StarRating />
              </div>
           </div>
          </div>
      );
    }
  }

  export default MovieItem;
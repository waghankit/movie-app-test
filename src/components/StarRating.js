import React, { Component } from 'react';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

class StarRating extends Component{
    render(){
        return (<Rater total={5} rating={2} />)
    }
}


export default StarRating;

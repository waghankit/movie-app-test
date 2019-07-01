import axios from 'axios';

const KEY = '54132569';

export default axios.create({
  baseURL: 'http://www.omdbapi.com/?i=tt3896198&apikey=54132569&r=json',
  params: {
    key: KEY
  }
});

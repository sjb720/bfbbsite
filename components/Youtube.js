import axios from 'axios';
const KEY = 'AIzaSyB_Viw1L-bRdhRKizRpIyEvud4RWU2zsWs';

export default axios.create({

    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }

})

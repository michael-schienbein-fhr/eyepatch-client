import axios from 'axios';

// const YOUTUBE_API_KEY = "AIzaSyCENEV9BsJUyuWII1H2JVZVSHt_yXpkUgo";
const YOUTUBE_API_KEY = "AIzaSyCgK0bx8zklqHXGOzVS8oINI8tOkrielyE";

// axios request for youtube search results
export default axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 10,
    type: 'video',
    key: YOUTUBE_API_KEY
  }
});

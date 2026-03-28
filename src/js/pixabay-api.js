import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = 'PASTE_YOUR_PIXABAY_KEY_HERE';

export function getImagesByQuery(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY = '55217481-c9b20e60bb4f0a7ff60eb70d3',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data);
}
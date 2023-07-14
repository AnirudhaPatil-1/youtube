import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    // method: 'GET',
    // url: 'https://youtube138.p.rapidapi.com/auto-complete/',
    params: {
    //   q: 'desp',
      hl: 'en',
      gl: 'US'
    },
    headers: {
    //   'X-RapidAPI-Key': '2eb2ec6cbbmshee092279a28f90bp111262jsn97720875bb6a',
      'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

export const fetchDataFromApi = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options)
    return data;
};
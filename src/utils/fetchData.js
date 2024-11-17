export const LIMIT = 500;

export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY, // <-- Trailing comma added
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY, // <-- Trailing comma added
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};

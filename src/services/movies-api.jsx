import axios from 'axios';

const movieDbApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '0bb2f17198bc606087f9a8f8273748b1',
  },
});

export async function fetchTrendMovies(page) {
  const params = {
    page,
  };

  const respons = await movieDbApi.get(`/trending/movie/day`, { params });

  return respons.data.results;
}

export async function fetchMovieById(movieId) {
  const respons = await movieDbApi.get(`/movie/${movieId}`);

  return respons.data;
}

export async function fetchMovieByQuery(query) {
  if (!query) {
    return;
  }

  const params = {
    query,
  };

  const respons = await movieDbApi.get('search/movie', { params });

  return respons.data.results;
}

export async function fetchMovieCast(movieId) {
  const respons = await movieDbApi(`/movie/${movieId}/credits`);

  return respons.data;
}

export async function fetchMovieRewiews(movieId) {
  const respons = await movieDbApi(`/movie/${movieId}/reviews`);

  return respons.data.results;
}


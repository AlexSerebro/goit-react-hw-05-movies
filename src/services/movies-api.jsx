const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '0bb2f17198bc606087f9a8f8273748b1';

async function fetchWithErrorHandling(url = '', config = {}) {
  const responce = await fetch(url, config);
  return responce.ok
    ? await responce.json()
    : Promise.reject(new Error('Not found'));
};

export function fetchTrendMovies() {
  return fetchWithErrorHandling(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`)
}

export function fetchSearchMovies(query) {
  if (!query.trim()) {
    return
  }
  const searchParams = new URLSearchParams({
      api_key: "0bb2f17198bc606087f9a8f8273748b1",
      query: query,
      language: "en-US",
      include_adult: false,
    });
  return fetchWithErrorHandling(`${BASE_URL}/search/movie?${searchParams}`)
}

export function fetchReviewsMovies(id) {
  return fetchWithErrorHandling(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`)
}

export function fetchCastMovies(id) {
  return fetchWithErrorHandling(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`)
}

export function fetchDetailMovie(id) {
  return fetchWithErrorHandling(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
}


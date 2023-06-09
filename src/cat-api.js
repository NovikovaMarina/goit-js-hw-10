const API_KEY = 'live_f4kW01wjI3QWEbyLOlfF2scMW5JQ6JYtayXWSLoi6qWxvLfjraNlQsP0Em1FoOlF';

function fetchBreeds() {
  const url = `https://api.thecatapi.com/v1/breeds?api_key=${API_KEY}`;
  return fetch(url).then((res) => res.json());
}

function fetchCatByBreed(breedId){
  const url = `https://api.thecatapi.com/v1/images/search?api_key=${API_KEY}&breed_ids=${breedId}`;
  return fetch(url).then((res) => res.json());
}
export { fetchBreeds, fetchCatByBreed };
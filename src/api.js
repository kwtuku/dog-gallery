export async function fetchImageUrls(breed) {
  const response = await fetch(
    `https://dog.ceo/api/breed/${breed}/images/random/12`
  );
  const data = await response.json();
  return data.message;
}

export async function fetchBreeds() {
  const response = await fetch(
    'https://dog.ceo/api/breeds/list/all'
  );
  const data = await response.json();
  return Object.keys(data.message);
}

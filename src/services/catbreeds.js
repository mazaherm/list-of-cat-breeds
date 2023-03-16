export const catbreeds = () => {
  const data = fetch("https://api.thecatapi.com/v1/breeds").then((response) =>
    response.json()
  );
  return data;
};

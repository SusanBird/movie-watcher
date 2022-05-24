export async function searchMovies(someString) {
  const response = await fetch(`/.netlify/functions/movies-endpoint?searchQuery=${someString}`);
               
  const data = await response.json();
  
  return data;
}

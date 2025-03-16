
// export const getImageUrl = (path) => {
  // Construct the absolute path to the assets_ folder

  // Get the base URL (e.g., http://localhost:5173)
  // const baseUrl = window.location.origin; 
  // const url = `${baseUrl}/assets_/${path}`;
  // console.log("Path Argument:", path); 
  // console.log("Resolved URL:", url); 
  // return url;

// };

// export const getImageUrl = (path) => {
//   // return new URL(`../assets_/${path}`, import.meta.url).href;
//   return new URL(`../assets_/${path}`, import.meta.url).href;
// };

export const getImageUrl = (path) => {
  // Construct the path relative to the public folder
  const url = `/assets_/${path}`;
  console.log("Path Argument:", path); // Debugging
  console.log("Resolved URL:", url); // Debugging
  return url;
};
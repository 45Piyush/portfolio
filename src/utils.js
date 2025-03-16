
export const getImageUrl = (path) => {
  // Construct the absolute path to the assets_ folder

  // Get the base URL (e.g., http://localhost:5173)
  const baseUrl = window.location.origin; 
  const url = `${baseUrl}/assets_/${path}`;
  console.log("Path Argument:", path); 
  console.log("Resolved URL:", url); 
  return url;

  // return `/assets_/${path}`;

};
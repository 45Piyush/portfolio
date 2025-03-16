
export const getImageUrl = (path) => {
  // Construct the absolute path to the assets_ folder
  const baseUrl = window.location.origin; // Get the base URL (e.g., http://localhost:5173)
  const url = `${baseUrl}/assets_/${path}`;
  console.log("Path Argument:", path); // Debugging
  console.log("Resolved URL:", url); // Debugging
  return url;

  // return `/assets_/${path}`;

};
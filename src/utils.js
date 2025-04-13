
export const getImageUrl = (path) => {
  // Construct the path relative to the public folder
  const url = `/assets_/${path}`;
  console.log("Path Argument:", path); // Debugging
  console.log("Resolved URL:", url); // Debugging
  return url;
};

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


/**
git init 
git add .
git conmmit -m ""
git push origin main

git show 

git diff
git diff --staged 
git diff "path"

git log
git log commit_id
git log filename
git log -2
git log -p
git log --follow "path"

git log flags
--oneline
--decorator
--graph
--grep=<pattern>

HEAD 
Symbols -> ~ ^ 

commit and delete commit
view history commit 

intilizing repo, pushing, pulling, clone repo
commiting, undo commit, viewing commits history
creating, merging, viewing and handling conflict in branches

 */
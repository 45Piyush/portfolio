export const getImageUrl = (path) => {
    return new URL(`/assets_/${path}`, import.meta.url).href;
  };
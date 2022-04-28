const STORAGE_LABEL = "__CITY_BIKES__";

const getStoreFavorites: () => Array<string> = () => {
  const stored = localStorage.getItem(STORAGE_LABEL);
  return stored ? JSON.parse(stored) : [];
};

const setStoreFavorites: (favorites: Array<string>) => void = (favorites) => {
  localStorage.setItem(STORAGE_LABEL, JSON.stringify(favorites));
};

export { getStoreFavorites, setStoreFavorites };

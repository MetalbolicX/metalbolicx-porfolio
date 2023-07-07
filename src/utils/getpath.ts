/**
 * Get the hash from  window current url and parse it.
 */
const getPath = (): string =>
  location.hash.slice(1, -1).toLocaleLowerCase() || "/";

export default getPath;

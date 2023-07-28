/**
 * Get the hash from  window current url and parse it.
 * @returns {string} The hash path of current url.
 */
function getPath(): string {
  const urlHash: string = window.location.hash;
  return urlHash.at(-1) === "/" ? urlHash.slice(1, -1) : urlHash.slice(1) || "/";
}

export default getPath;

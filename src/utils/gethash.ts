const getHash = (): string =>
  location.hash.slice(1).toLocaleLowerCase().split("/").at(1) || "/";

export default getHash;

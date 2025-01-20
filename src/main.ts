//import './style.scss';

import {
  fetchFromAPI,
  getArtistID,
  getReleaseByID,
  getReleases,
} from "./API/FetchFromAPI";

console.log(await getArtistID("lisa+nilsson"));
console.log(await getReleases("85499"));
console.log(await getReleaseByID("3595153"));

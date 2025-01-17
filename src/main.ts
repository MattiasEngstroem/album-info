//import './style.scss';

import { fetchFromAPI, getArtistID, getReleases } from "./API/FetchFromAPI";

console.log(await getArtistID("lasse+wellander"));
console.log(await getReleases("322349"));

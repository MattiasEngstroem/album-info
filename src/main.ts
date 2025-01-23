//import './style.scss';

import { artistObject } from "./types/types";

import {
  fetchFromAPI,
  getArtistID,
  getReleaseByID,
  getReleases,
} from "./API/FetchFromAPI";

import { createSearchForm } from "./components/search-form/search-form";

//console.log(await getArtistID("chino+mariano"));
//console.log(await fetchFromAPI("artists/677732/releases"));
//console.log(await getReleaseByID("1404933"));
createSearchForm();

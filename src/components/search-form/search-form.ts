import "./search-form.scss";

import { getArtistID } from "../../API/getArtistID";

import { artistObject } from "../../types/types";

import { renderCards } from "../release-cards/release-cards";

export const createSearchForm = (): void => {
  const form = document.querySelector("form") as HTMLFormElement;
  const input = document.querySelector("#search-input") as HTMLInputElement;
  const sortBy = document.querySelector("#sort-by") as HTMLSelectElement;
  const noResults = document.querySelector(
    ".no_results"
  ) as HTMLParagraphElement;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    console.log(sortBy.value);

    const search: string = input.value;
    // input.value = "";
    let searchPlus: string = "";
    for (let i: number = 0; i < search.length; i++) {
      if (search[i] === " ") {
        searchPlus += "+";
      } else {
        searchPlus += search[i];
      }
    }
    const artists: artistObject[] = await getArtistID(searchPlus);
    if (artists.length > 0) {
      noResults.textContent = "";
      const currentArtist: artistObject = artists[0];
      renderCards(currentArtist, sortBy.value);
    } else {
      noResults.textContent = `Sorry, no results for your search "${search}"`;
    }
  });
};

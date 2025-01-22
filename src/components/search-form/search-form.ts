import { getArtistID } from "../../API/FetchFromAPI";

import { artistObject } from "../../types/types";

import { renderCards } from "../release-cards/release-cards";

export const createSearchForm = (): void => {
  const searchForm = document.querySelector(".search-form") as HTMLDivElement;
  const form = document.createElement("form");
  searchForm.appendChild(form);
  const label = document.createElement("label");
  label.setAttribute("for", "searchInput");
  label.textContent = "Artist / Musician: ";
  form.appendChild(label);
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("id", "searchInput");
  input.setAttribute("name", "searchInput");
  form.appendChild(input);
  const submit = document.createElement("button");
  submit.setAttribute("type", "submit");
  submit.textContent = "Submit";
  form.appendChild(submit);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const search: string = input.value;
    input.value = "";
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
      const currentArtist: artistObject = artists[0];
      renderCards(currentArtist);
    } else {
      const noResults = document.querySelector(
        ".releases-header-content"
      ) as HTMLHeadingElement;
      noResults.textContent = `Sorry, no results for your search "${search}"`;
    }
  });
};

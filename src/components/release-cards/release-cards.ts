import { getReleases } from "../../API/FetchFromAPI";
import { artistObject, releaseObject } from "../../types/types";

export const renderCards = async (artist: artistObject): Promise<void> => {
  const header = document.querySelector(
    ".releases-header-content"
  ) as HTMLHeadingElement;
  header.textContent = `${artist.name} appears on the following releases:`;

  const releases: releaseObject[] = await getReleases(String(artist.id));

  releases.sort((a, b) => {
    // Jämför första nyckeln
    if (a.year < b.year) return -1;
    if (a.year > b.year) return 1;

    // Om första nyckeln är lika, jämför andra nyckeln
    if (a.artist < b.artist) return -1;
    if (a.artist > b.artist) return 1;

    // Om både första och andra nyckeln är lika, jämför tredje nyckeln
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;

    // Om alla nycklar är lika, returnera 0
    return 0;
  });

  releases.forEach((r) => {
    console.log(r.year, r.artist, r.title, r.type, r.main_release);
  });

  const releasesCards = document.querySelector(
    ".releases-cards"
  ) as HTMLDivElement;
};

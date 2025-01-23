import { getReleases } from "../../API/FetchFromAPI";
import { artistObject, releaseObject } from "../../types/types";
import { releaseInfo } from "../release-info/release-info";

export const renderCards = async (artist: artistObject): Promise<void> => {
  const header = document.querySelector(
    ".releases-header-content"
  ) as HTMLHeadingElement;
  header.textContent = `${artist.name} appears on the following releases:`;
  const releasesCards = document.querySelector(
    ".releases-cards"
  ) as HTMLDivElement;
  releasesCards.textContent = "Please wait...";
  const releases: releaseObject[] = await getReleases(String(artist.id));
  releasesCards.textContent = "";

  //TODO: lägg in i sökformuläret att man får välja vad man vill sortera på, skicka in det i den här modulen
  releases.sort((a, b) => {
    if (a.year < b.year) return -1;
    if (a.year > b.year) return 1;

    //if (a.artist < b.artist) return -1;
    //if (a.artist > b.artist) return 1;

    //if (a.title < b.title) return -1;
    //if (a.title > b.title) return 1;

    return 0;
  });

  releases.forEach((r) => {
    const card = document.createElement("div");
    releasesCards.appendChild(card);
    if (r.type === "master") {
      card.setAttribute("id", String(r.main_release));
    } else {
      card.setAttribute("id", String(r.id));
    }
    card.classList.add("card");

    const mainArtist = document.createElement("p");
    mainArtist.textContent = `main artist: ${r.artist}`;
    card.appendChild(mainArtist);

    const title = document.createElement("p");
    title.textContent = `title: ${r.title}`;
    card.appendChild(title);

    if (r.year) {
      const year = document.createElement("p");
      year.textContent = `year: ${r.year}`;
      card.appendChild(year);
    }

    if (r.format) {
      const format = document.createElement("p");
      format.textContent = `format: ${r.format}`;
      card.appendChild(format);
    }

    if (r.label) {
      const label = document.createElement("p");
      label.textContent = `label: ${r.label}`;
      card.appendChild(label);
    }
  });

  // en eventlistener som kollar om användaren klickar på något av korten och i så fall tar fram det kortets id
  releasesCards.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    if (target.id) {
      releaseInfo(target.id);
    }
  });
};

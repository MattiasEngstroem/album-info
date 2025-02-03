import "./release-info.scss";
import { getReleaseByID } from "../../API/getReleaseByID";
import { releaseInfoObject } from "../../types/types";

export const releaseInfo = async (releaseID: string): Promise<void> => {
  if (window.matchMedia("(max-width: 768px)").matches) {
    const infoSection = document.getElementById(
      "info-section"
    ) as HTMLDivElement;
    infoSection?.scrollIntoView({ behavior: "smooth" });
  }

  const releaseInfoDiv = document.querySelector(
    ".release-info"
  ) as HTMLDivElement;
  releaseInfoDiv.textContent = "Please wait...";
  const release: releaseInfoObject = await getReleaseByID(releaseID);
  releaseInfoDiv.textContent = "";

  const imageElement = document.createElement("img");
  imageElement.classList.add("album-cover");
  imageElement.src = release.images[0].uri;
  imageElement.alt = "Skivomslag";
  releaseInfoDiv.appendChild(imageElement);

  const albumName = document.createElement("h2");
  albumName.classList.add("album-name");
  albumName.textContent = `${release.artists_sort}: ${release.title}${
    release.released ? " (" + release.released + ")" : ""
  }`;
  releaseInfoDiv.appendChild(albumName);

  release.tracklist.forEach((t) => {
    const trackName = document.createElement("p");
    trackName.classList.add("track-name");
    trackName.innerHTML = `<br>${t.position} ${t.title} ${t.duration}`;
    releaseInfoDiv.appendChild(trackName);

    if (t.extraartists) {
      t.extraartists.forEach((e) => {
        const extraArtistOnTrack = document.createElement("p");
        extraArtistOnTrack.classList.add("extra-artist-on-track");
        extraArtistOnTrack.textContent = `${e.role}: ${e.name}`;
        releaseInfoDiv.appendChild(extraArtistOnTrack);
      });
    }
  });

  if (release.extraartists.length > 0) {
    const personnel = document.createElement("h3");
    personnel.classList.add("personnel-heading");
    personnel.innerHTML = "<br>Personnel:";
    releaseInfoDiv.appendChild(personnel);

    release.extraartists.forEach((e) => {
      const extraArtist = document.createElement("p");
      extraArtist.classList.add("personnel-member");
      extraArtist.textContent = `${e.role}: ${e.name}${
        e.tracks ? " (" + e.tracks + ")" : ""
      }`;
      releaseInfoDiv.appendChild(extraArtist);
    });
  }
};

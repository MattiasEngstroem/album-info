import { getReleaseByID } from "../../API/FetchFromAPI";
import { releaseInfoObject } from "../../types/types";

export const releaseInfo = async (releaseID: string): Promise<void> => {
  const releaseInfoDiv = document.querySelector(
    ".release-info"
  ) as HTMLDivElement;
  releaseInfoDiv.textContent = "Please wait...";
  const release: releaseInfoObject = await getReleaseByID(releaseID);
  releaseInfoDiv.textContent = "";
  console.log(release);

  const imageElement = document.createElement("img");
  imageElement.src = release.images[0].uri;
  imageElement.alt = "Skivomslag";
  //imageElement.width = 300;
  releaseInfoDiv.appendChild(imageElement);
};

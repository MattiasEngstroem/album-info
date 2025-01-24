import { releaseInfoObject } from "../types/types";

//Använd release-id för att få info om releasen

export const getReleaseByID = async (
  releaseID: string
): Promise<releaseInfoObject> => {
  const response = await fetch(
    `https://api.discogs.com/releases/${releaseID}`,
    {
      method: "GET",
      headers: {
        Authorization:
          "Discogs key=sjilKPMBNnmVNDdhtGTT, secret=HNqWkXuooaRDmJeOIvPJuORXvqzUtQHk",
        "User-Agent": "RecordedMusicians/1.0 +http://localhost:5173",
      },
    }
  );
  const data = await response.json();
  return {
    artists_sort: data.artists_sort,
    extraartists: data.extraartists,
    images: data.images,
    released: data.released,
    title: data.title,
    tracklist: data.tracklist,
  };
};

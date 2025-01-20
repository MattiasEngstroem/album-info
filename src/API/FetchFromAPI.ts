// generisk fetch som kan användas till alla förfrågningar

import { artistObject, releaseInfoObject, releaseObject } from "../types/types";

export const fetchFromAPI = async (request: string): Promise<any> => {
  const response = await fetch(`https://api.discogs.com/${request}`, {
    method: "GET",
    headers: {
      Authorization:
        "Discogs key=sjilKPMBNnmVNDdhtGTT, secret=HNqWkXuooaRDmJeOIvPJuORXvqzUtQHk",
      "User-Agent": "RecordedMusicians/1.0 +http://localhost:5173",
    },
  });
  const data = await response.json();
  return data;
};

// Ta reda på artist-id genom att söka på artistnamn

export const getArtistID = async (
  artistName: string
): Promise<artistObject[]> => {
  const response = await fetch(
    `https://api.discogs.com/database/search?q=${artistName}&type=artist`,
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
  return data.results.map((item: any) => ({
    id: item.id,
    name: item.title,
  }));
};

//Använd artist-id för att ta reda på vilka releaser artisten medverkar på

export const getReleases = async (
  artistID: string
): Promise<releaseObject[]> => {
  const response1 = await fetch(
    `https://api.discogs.com/artists/${artistID}/releases`,
    {
      method: "GET",
      headers: {
        Authorization:
          "Discogs key=sjilKPMBNnmVNDdhtGTT, secret=HNqWkXuooaRDmJeOIvPJuORXvqzUtQHk",
        "User-Agent": "RecordedMusicians/1.0 +http://localhost:5173",
      },
    }
  );
  const data1 = await response1.json();
  const numberOfItems: string = String(data1.pagination.items);

  const response2 = await fetch(
    `https://api.discogs.com/artists/${artistID}/releases?page=1&per_page=${numberOfItems}`,
    {
      method: "GET",
      headers: {
        Authorization:
          "Discogs key=sjilKPMBNnmVNDdhtGTT, secret=HNqWkXuooaRDmJeOIvPJuORXvqzUtQHk",
        "User-Agent": "RecordedMusicians/1.0 +http://localhost:5173",
      },
    }
  );
  const data2 = await response2.json();
  return data2.releases.map((item: any) => ({
    artist: item.artist,
    format: item.format,
    id: item.id,
    label: item.label,
    title: item.title,
    type: item.type,
    year: item.year,
  }));
};

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

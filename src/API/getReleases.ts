import { keyAndSecret } from "../APIkey/APIkey";
import { releaseObject } from "../types/types";

//Använd artist-id för att ta reda på vilka releaser artisten medverkar på

export const getReleases = async (
  artistID: string
): Promise<releaseObject[]> => {
  const response1 = await fetch(
    `https://api.discogs.com/artists/${artistID}/releases`,
    {
      method: "GET",
      headers: {
        Authorization: keyAndSecret,
        "User-Agent": "RecordedMusicians/1.0 +http://localhost:5173",
      },
    }
  );
  const data1 = await response1.json();
  console.log(data1);
  const numberOfItems: string = String(data1.pagination.items);

  const response2 = await fetch(
    `https://api.discogs.com/artists/${artistID}/releases?page=1&per_page=${numberOfItems}`,
    {
      method: "GET",
      headers: {
        Authorization: keyAndSecret,
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
    main_release: item.main_release,
  }));
};

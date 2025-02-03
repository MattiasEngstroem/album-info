import { keyAndSecret } from "../APIkey/APIkey";
import { artistObject } from "../types/types";

// Ta reda på artist-id genom att söka på artistnamn

export const getArtistID = async (
  artistName: string
): Promise<artistObject[]> => {
  const response = await fetch(
    `https://api.discogs.com/database/search?q=${artistName}&type=artist`,
    {
      method: "GET",
      headers: {
        Authorization: keyAndSecret,
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

// generisk fetch som kan användas till alla förfrågningar

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
//TODO: typa upp svaret

export const getArtistID = async (artistName: string): Promise<any> => {
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
  return data.results;
};

//Använd artist-id för att ta reda på vilka releaser artisten medverkar på
//TODO: typa upp

export const getReleases = async (artistID: string): Promise<any> => {
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
  return data2.releases;
};

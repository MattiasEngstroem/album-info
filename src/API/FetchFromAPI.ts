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

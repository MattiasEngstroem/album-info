// generisk fetch som kan användas till alla förfrågningar, använde bara denna medan jag gjorde appen för att testa olika saker

import { keyAndSecret } from "../APIkey/APIkey";

export const fetchFromAPI = async (request: string): Promise<any> => {
  const response = await fetch(`https://api.discogs.com/${request}`, {
    method: "GET",
    headers: {
      Authorization: keyAndSecret,
      "User-Agent": "RecordedMusicians/1.0 +http://localhost:5173",
    },
  });
  const data = await response.json();
  return data;
};

export type artistObject = {
  id: number;
  name: string;
};

export type releaseObject = {
  artist: string;
  format: string;
  id: number;
  label: string;
  title: string;
  type: string;
  year: number;
};

export type releaseInfoObject = {
  artists_sort: string;
  extraartists: extraArtistsObject[];
  images: imagesObject[];
  released: string;
  title: string;
  tracklist: trackObject[];
};

export type extraArtistsObject = {
  anv: string;
  id: number;
  join: string;
  name: string;
  resource_url: string;
  role: string;
  tracks: string;
};

export type imagesObject = {
  height: number;
  resource_url: string;
  type: string;
  uri: string;
  uri150: string;
  width: number;
};

export type extraArtistOnTrack = {
  anv: string;
  id: number;
  join: string;
  name: string;
  resource_url: string;
  role: string;
  tracks: string;
};

export type trackObject = {
  duration: string;
  extraartists?: extraArtistOnTrack[];
  position: string;
  title: string;
  type_: string;
};

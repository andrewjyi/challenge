import { getMuricanDateFormat } from "../../../utils/utils";

const transformAlbums = (albums) => {
  return albums.map((album) => ({
    id: album["id"]["attributes"]["im:id"],
    imgClass: "h-72 w-72 rounded",
    imgMeta: album["im:name"]["label"],
    imgSrc: album["im:image"][2]["label"],
    name: album["im:name"]["label"],
    artist: album["im:artist"]["label"],
    itemCount: album["im:itemCount"]["label"],
    price: album["im:price"]["label"],
    releaseDate: getMuricanDateFormat(album["im:releaseDate"]["label"]),
    rights: album["rights"]["label"],
  }));
};

export { transformAlbums };

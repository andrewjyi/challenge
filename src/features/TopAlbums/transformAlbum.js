import { getMuricanDateFormat } from "../../utils/utils";

const transformAlbum = (data) => {
  return data.map((data) => ({
    id: data["id"]["attributes"]["im:id"],
    imgClass: "h-72 w-72 rounded",
    imgMeta: data["im:name"]["label"],
    imgSrc: data["im:image"][2]["label"],
    albumName: data["im:name"]["label"],
    artist: data["im:artist"]["label"],
    itemCount: data["im:itemCount"]["label"],
    price: data["im:price"]["label"],
    releaseDate: getMuricanDateFormat(data["im:releaseDate"]["label"]),
    rights: data["rights"]["label"],
  }));
};

export { transformAlbum };

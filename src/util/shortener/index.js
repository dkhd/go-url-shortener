import { customAlphabet } from "nanoid";
import { isShortURLExist, createShortUrl } from "../db";

const nanoid = customAlphabet("1234567890abcdefghijklmnopqrstuvwxyz", 5);

const createShortURL = async (id, url) => {
  const shortUrl = nanoid();
  return await isShortURLExist(shortUrl).then((res) => {
    if (res) createShortURL(id, url);
    else {
      const data = {
        short_url: "https://go.hadna.space/" + shortUrl,
        destination: url,
        creator: id,
      };
      return createShortUrl(data).then((res) => {
        return res;
      });
    }
  });
};

export { createShortURL };

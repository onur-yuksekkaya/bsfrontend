import axios from "axios";

const link = "https://openlibrary.org/search?language=eng&author=";
const getAuthor = async (author) => {
  const response = await axios.get(link + author);
  return response;
};

export default getAuthor;

import getAuthor from "@/services";
import _ from "lodash";

const { createContext, useContext, useState, useEffect } = require("react");

const AuthorContext = createContext();

const useAuthor = () => useContext(AuthorContext);

function AuthorProvider({ children }) {
  const [author, setAuthor] = useState("OL26320A");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [booksIndex, setBooksIndex] = useState();

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const response = await getAuthor(author);
      if (response.data.docs) {
        setBooks(response.data.docs);
        const newIndex = {};
        const yearBy = response.data.docs.map((i) => ({
          publishedYears: i.publish_year,
          id: i.key,
        }));
        const result = _.chain(yearBy)
          .keyBy("id")
          .mapValues("publishedYears")
          .value();
        const dataIndex = Object.keys(result).reduce((prev, next) => {
          const yearArray = result[next];
          yearArray.forEach((i) => {
            if (!newIndex[i]) newIndex[i] = [];
            newIndex[i].push(next);
          });
          return newIndex;
        }, {});
        setBooksIndex(dataIndex);
      }
      setLoading(false);
    }
    fetchData();
  }, [author]);

  const findBookWithIndex = (key) => {
    const book = books.find((i) => i.key === key);
    return book;
  };

  return (
    <AuthorContext.Provider
      value={{
        author,
        setAuthor,
        books,
        booksIndex,
        loading,
        findBookWithIndex,
      }}
    >
      {children}
    </AuthorContext.Provider>
  );
}

export { AuthorProvider, useAuthor };

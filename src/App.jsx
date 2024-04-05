import { useState } from "react";

import "./App.css";
import searchImages from "./components/api";
import SearchBar from "./components/SearchBar/SearchBar";
import Images from "./components/ImageGallery/ImageGallery";

function App() {
  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState(false);

  const searchImagesl = async (query) => {
    try {
      setLoader(true);
      const respons = await searchImages(query);

      setImages(respons);
      setLoader(false);
    } catch (error) {}
  };
  return (
    <>
      <div>
        <SearchBar onSearch={searchImagesl} />
        {loader && <b>fhfhfhhhfh</b>}
        {images.length > 0 && <Images images={images} />}
      </div>
    </>
  );
}

export default App;

// import { Toaster } from "react-hot-toast";
// import { SearchBox } from "./SearchBox";
// import { useEffect, useState } from "react";
// import { Articles } from "./Articles";
// import { fetchArticles } from "../api";

// export const App = () => {
//   const [query, setQuery] = useState("");
//   const [page, setPage] = useState(1);
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   const searchArticles = async (newQuery) => {
//     setQuery(`${Date.now()}/${newQuery}`);
//     setPage(1);
//     setArticles([]);
//   };

//   const handleLoadMore = () => {
//     setPage(page + 1);
//   };

//   useEffect(() => {
//     if (query === "") {
//       return;
//     }

//     async function fetchData() {
//       try {
//         setLoading(true);
//         setError(false);
//         const fetchedData = await fetchArticles(query.split("/")[1], page);
//         setArticles((prevArticles) => [...prevArticles, ...fetchedData]);
//       } catch (error) {
//         setError(true);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchData();
//   }, [query, page]);

//   return (
//     <div>
//       <SearchBox onSearch={searchArticles} />
//       {error && <b>Oops, there was an error, please try reloading 😭</b>}
//       {articles.length > 0 && <Articles items={articles} />}
//       {loading && <b>Loading articles, please wait...</b>}
//       {articles.length > 0 && !loading && (
//         <button onClick={handleLoadMore}>Load more</button>
//       )}
//       <Toaster position="bottom-center" />
//     </div>
//   );
// };

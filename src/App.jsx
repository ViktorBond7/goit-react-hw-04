import { useState, useEffect } from "react";
// import { Hourglass } from "react-loader-spinner";

import { Toaster } from "react-hot-toast";
import "./App.css";
import searchImages from "./components/api";
import SearchBar from "./components/SearchBar/SearchBar";
import Images from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";

function App() {
  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [showBtn, setShowBtn] = useState(false);

  const searchImagesl = async (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchData = async () => {
      try {
        setError(false);
        setLoader(true);
        const { respons, totalPages } = await searchImages(query, page);
        setImages(respons);

        setShowBtn(totalPages !== page && respons.length > 0);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    fetchData();
  }, [query, page]);

  return (
    <>
      <div>
        <SearchBar onSearch={searchImagesl} />
        {error && <b>fhhfhhfh</b>}
        {images.length > 0 && <Images images={images} />}
        {loader && <Loader />}
        <Toaster position="top-right" />
        {showBtn && !loader && <button onClick={handleMore}></button>}
      </div>
    </>
  );
}

export default App;

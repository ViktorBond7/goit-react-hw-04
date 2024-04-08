import axios from "axios";

const searchImages = async (query, page) => {
  const client_id = "TArFxx_mLGUvT8o_R5TxUwRqiGV2Ie5D78Oz1_4z2mc";
  const BASE_URL = "https://api.unsplash.com/search/photos";
  const url = `${BASE_URL}`;
  const params = {
    query: query,
    client_id: client_id,
    page: page,
    per_page: 12,
    orientation: "squarish",
  };
  const respons = await axios.get(url, { params });

  return {
    respons: respons.data.results,
    totalPages: respons.data.total_pages,
  };
};

export default searchImages;

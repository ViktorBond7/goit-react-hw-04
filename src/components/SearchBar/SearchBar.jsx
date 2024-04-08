import { toast } from "react-hot-toast";
const SearchBar = ({ onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target.elements.query.value.trim() === "") {
      toast.error("EMPTY STRING!");
      return;
    }

    onSearch(e.target.elements.query.value);
    e.target.reset();
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          // autocomplete="off"
          // autofocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;

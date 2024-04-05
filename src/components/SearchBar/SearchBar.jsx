const SearchBar = ({ onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(e.target.elements.query.value);
    e.target.reset();
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          //   autocomplete="off"
          //   autofocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;

// export const SearchBox = ({ onSearch }) => {
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (e.target.elements.query.value.trim() === "") {
//       toast.error("EMPTY STRING!");
//       return;
//     }

//     onSearch(e.target.elements.query.value);
//     e.target.reset();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="query" />
//       <button type="submit">Search</button>
//     </form>
//   );
// };

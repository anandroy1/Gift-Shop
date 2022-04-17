import { useState } from "react";
import DUMMY_GIFTS from "../Gifts/AvailableGifts";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <form>
      <input
        type="text"
        placeholder="Search a product"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {DUMMY_GIFTS.filter((val) => {
        if (searchTerm === "") {
          return val;
        } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div key={key}>
            <p>{val.name}</p>
          </div>
        );
      })}
    </form>
  );
};

export default Search;

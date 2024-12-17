import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

const searchData = [
  { restaurant: "Kakune restau", city: "Paris" },
  { restaurant: "Kakunexy delux", city: "Rome" },
  { restaurant: "Kakune", city: "New York" },
  { restaurant: "Kikune", city: "Dakar Plateau" },
];
function SearchBar() {
  const [restaurant, setRestaurant] = useState("");
  const [city, setCity] = useState("");
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    let filtered = searchData;

    if (city) {
      filtered = searchData.filter((item) =>
        item.city.toLowerCase().includes(city.toLowerCase())
      );
    }

    if (restaurant) {
      filtered = filtered.filter((item) =>
        item.restaurant.toLowerCase().includes(restaurant.toLowerCase())
      );
    }

    setResults(filtered);
  };

  const clearSearch = () => {
    setRestaurant("");
    setCity("");
    setResults([]);
    setIsSearching(false);
  };

  return (
    <>
      <div className="relative w-full lg:w-[625px]">
        {/* Search Bar Container */}
        <div className="flex items-center p-2 rounded-full border bg-white border-[#ADADAD] overflow-hidden shadow-sm" >
          {/* Restaurant Input */}
          <input
            type="text"
            placeholder="restaurant, hotel, service...."
            value={restaurant}
            onFocus={() => setIsSearching(true)}
            onChange={(e) => {
              setRestaurant(e.target.value);
              handleSearch();
            }}
            className="w-1/2 px-[24px] text-base outline-none border-r-2 border-[#7A7A7A] font-Roboto text-black "
          />

          {/* City Input */}
          <input
            type="text"
            placeholder="Singapour..."
            value={city}
            onFocus={() => setIsSearching(true)}
            onChange={(e) => {
              setCity(e.target.value);
              handleSearch();
            }}
            className="w-1/2 px-4 py-2 text-base outline-none font-Roboto text-black"
          />

          {/* Search/Close Button */}
          <button
            onClick={isSearching ? clearSearch : handleSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white bg-primary rounded-full p-[14px]"
          >
            {isSearching ? (
              <AiOutlineClose size={16} />
            ) : (
              <AiOutlineSearch size={16} />
            )}
          </button>
        </div>

        {/* Search Results */}
        {isSearching && (
          <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-2 max-h-60 overflow-y-auto">
            {results.length > 0 ? (
              results.map((item, index) => (
                <li
                  key={index}
                  className="p-3 text-black  cursor-pointer transition"
                >
                  {item.restaurant}, {item.city}
                </li>
              ))
            ) : (
              <li className="p-3 text-gray-500 text-sm">
                {city || restaurant
                  ? "No matching results found."
                  : "Start typing to search."}
              </li>
            )}
          </ul>
        )}
      </div>
    </>
  );
}

export default SearchBar;

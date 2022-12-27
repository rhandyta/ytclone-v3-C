import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { encode } from "string-encode-decode";

function SearchBar() {
    const [inputSearch, setInputSearch] = useState("");
    const navigate = useNavigate();
    function submitHandler(e) {
        e.preventDefault();
        navigate(`/search/${encode(inputSearch)}`);
        setInputSearch("");
    }

    return (
        <form className="relative" onSubmit={submitHandler}>
            <input
                type="text"
                className="outline-none p-2 rounded-full text-sm border border-gray-500 w-56 sm:w-80"
                placeholder="Search..."
                onChange={(e) => setInputSearch(e.target.value)}
                value={inputSearch}
            />
            <button type="submit">
                <MagnifyingGlassIcon className="absolute text-gray-400 h-6 top-[6px] right-1 bg-white rounded-lg" />
            </button>
        </form>
    );
}

export default SearchBar;

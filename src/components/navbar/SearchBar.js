import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import React from "react";

function SearchBar() {
    return (
        <form className="relative">
            <input
                type="text"
                className="outline-none p-2 rounded-full text-sm border border-gray-500 w-56 sm:w-80"
            />
            <button type="submit">
                <MagnifyingGlassIcon className="absolute text-gray-400 h-6 top-[6px] right-1 bg-white rounded-lg" />
            </button>
        </form>
    );
}

export default SearchBar;

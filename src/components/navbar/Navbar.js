import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../utils/utility";
import SearchBar from "./SearchBar";

function Navbar() {
    return (
        <div className="bg-white w-full py-1 px-4 flex justify-between items-center sticky top-0">
            <Link to={"/"}>
                <img src={logo} alt="Logo" className="h-10" />
            </Link>
            <SearchBar />
        </div>
    );
}

export default Navbar;

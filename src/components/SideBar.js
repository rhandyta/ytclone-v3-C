import React from "react";
import { categories } from "../utils/utility";

function SideBar({ selectCategory, setSelectCategory }) {
    return (
        <>
            {categories.map((category, index) => (
                <button
                    key={index}
                    className="flex sm:justify-start items-center gap-1 px-4 py-3"
                    style={{
                        backgroundColor:
                            selectCategory === category.name ? "red" : "white",
                        color:
                            selectCategory === category.name
                                ? "white"
                                : "black",
                    }}
                    onClick={() => setSelectCategory(category.name)}
                >
                    <span>{category.icon}</span>
                    <span>{category.name}</span>
                </button>
            ))}
        </>
    );
}

export default SideBar;

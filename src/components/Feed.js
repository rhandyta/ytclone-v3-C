import React, { useState } from "react";
import SideBar from "./SideBar";

function Feed() {
    const [selectCategory, setSelectCategory] = useState("Coding");

    return (
        <div className="min-h-screen flex flex-col sm:flex-row">
            <div className="flex sm:flex-col sm:basis-3/12 py-2 overflow-x-auto">
                <SideBar
                    selectCategory={selectCategory}
                    setSelectCategory={setSelectCategory}
                />
            </div>
            <div className=" bg-sky-50 sm:basis-9/12">bidios</div>
        </div>
    );
}

export default Feed;

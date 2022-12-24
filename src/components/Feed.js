import React, { useEffect, useState } from "react";
import { fetchApi } from "../utils/fetchApi";
import SideBar from "./SideBar";

function Feed() {
    const [selectCategory, setSelectCategory] = useState("Coding");
    useEffect(() => {
        fetchApi(`search?part=snippet,id&q=${selectCategory}`).then((res) => {
            console.log(res);
        });
    }, [selectCategory]);

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

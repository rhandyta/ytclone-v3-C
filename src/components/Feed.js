import React, { useEffect, useState } from "react";
import { fetchApi } from "../utils/fetchApi";
import SideBar from "./SideBar";
import Videos from "./Videos";

function Feed() {
    const [selectCategory, setSelectCategory] = useState("Coding");
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        fetchApi(
            `search?part=snippet,id&regionCode=ID&q=${selectCategory}`
        ).then((res) => {
            setVideos(res.items);
        });
    }, [selectCategory]);

    return (
        <div className="min-h-screen flex flex-col sm:flex-row">
            <div className="flex sm:flex-col sm:basis-3/12 py-2 overflow-x-auto">
                <SideBar
                    selectCategory={selectCategory}
                    setSelectCategory={setSelectCategory}
                    setVideos={setVideos}
                />
            </div>
            <div className=" bg-sky-50 sm:basis-9/12">
                <Videos videos={videos} />
            </div>
        </div>
    );
}

export default Feed;

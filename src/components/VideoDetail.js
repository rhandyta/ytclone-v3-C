import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { fetchApi } from "../utils/fetchApi";
import VideoCard from "./VideoCard";

function VideoDetail() {
    const [detailVideo, setDetailVideo] = useState(null);
    const [videoSuggest, setVideoSuggest] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        fetchApi(`videos?part=contentDetails,snippet,statistics&id=${id}`).then(
            (res) => {
                setDetailVideo(res.items[0]);
            }
        );
        fetchApi(
            `search?part=id,snippet&relatedToVideoId=${id}&type=video`
        ).then((res) => {
            setVideoSuggest(res.items);
        });
    }, [id]);
    return (
        <div className="flex flex-col md:flex-row">
            <div className="md:basis-9/12 lg:basis-8/12">
                <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${id}`}
                    width="100%"
                    controls
                    pip
                />
                <div className="p-4">
                    <h1 className="font-medium text-2xl">
                        {detailVideo?.snippet.title}
                    </h1>
                    <p className="mb-5">
                        {detailVideo?.statistics.viewCount} Views
                    </p>
                    <p className="mb-4 ">{detailVideo?.snippet.description}</p>
                    <hr />
                </div>
            </div>
            <div className="md:basis-3/12 lg:basis-4/12 p-2 grid grid-cols-1 justify-center gap-5">
                {videoSuggest?.map((video) => (
                    <VideoCard video={video} key={video.id.videoId} />
                ))}
            </div>
        </div>
    );
}

export default VideoDetail;

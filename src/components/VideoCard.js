import React from "react";
import { Link } from "react-router-dom";

function VideoCard({ video }) {
    const { id, snippet } = video;
    return (
        <div>
            <Link to={`/video/${id.videoId}`}>
                <img
                    src={snippet.thumbnails.high.url}
                    alt={snippet.title}
                    className="w-full"
                />
                <div className="p-2 sm:p-0">
                    <h1 className="font-medium">{snippet.title}</h1>
                    <p className="font-thin">{snippet.channelTitle}</p>
                </div>
            </Link>
        </div>
    );
}

export default VideoCard;

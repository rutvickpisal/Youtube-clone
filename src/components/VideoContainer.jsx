import React, { useEffect, useState } from "react";
import VIDEO_API from "../utils/constants";
import Video, { ModifyVideo } from "./Video";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const getVideos = async () => {
    const data = await fetch(VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
  };
  useEffect(() => {
    getVideos();
  }, []);
  return (
    <div className="flex flex-wrap bg-gray-100">
      {/* {videos[0] && <ModifyVideo info={videos[0]}/>}   */}
      {videos.map((video) => {
        return (
          <Link to={`/watch?v=${video.id}`} key={video.id}>
            <Video info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;

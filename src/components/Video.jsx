import React from "react";

function Video({ info }) {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="m-2 p-2 w-80 shadow-md bg-white rounded-md cursor-pointer">
      <img src={thumbnails.medium.url} className=""></img>
      <ul>
        <li>{title}</li>
        <li>{channelTitle}</li>
        <li></li>
      </ul>
    </div>
  );
}

export const ModifyVideo = ({info}) => {
  return (
    <div className="border-rose-600 bg-black">
      <Video info={info}/>
    </div>
  );
};

export default Video;

import {
  Favorite,
  FavoriteBorderOutlined,
  MessageOutlined,
  ShareOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import "./VideoSidebar.css";

function VideoSidebar({ likes, shares, messages }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="videoSidebar">
      <div className="videoSidebar__buttons">
        {liked ? (
          <Favorite fontSize="large" onClick={() => setLiked(false)} />
        ) : (
          <FavoriteBorderOutlined
            fontSize="large"
            onClick={() => setLiked(true)}
          />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar__buttons">
        <MessageOutlined />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar__buttons">
        <ShareOutlined />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;

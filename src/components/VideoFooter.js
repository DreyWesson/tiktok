import { MusicNoteOutlined } from "@material-ui/icons";
import React from "react";
import Ticker from "react-ticker";
import "./VideoFooter.css";
function VideoFooter({ channel, desc, song }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{channel}</h3>
        <p>{desc}</p>
        <div className="videoFooter__ticker">
          <MusicNoteOutlined className="videoFooter__icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className="videoFooter__record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
      />
    </div>
  );
}

export default VideoFooter;

"use client";
import React from "react";

const VideoComponent = (props: any, ref: any) => {
  return (
    <video
      id="video"
      ref={ref}
      loop
      // preload="metadata"
      aria-label="Video player"
      muted
      poster="/images/background_video.jpg"
      className="z-10 shadow-sm rounded-md"
    >
      <source
        src="https://d1gey57zr11abr.cloudfront.net/background.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  );
};

export default React.forwardRef(VideoComponent);

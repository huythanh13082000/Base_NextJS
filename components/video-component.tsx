"use client";
import React from "react";

const VideoComponent = (props: any, ref: any) => {
  return (
    <video
      ref={ref}
      loop
      preload="metadata"
      aria-label="Video player"
      muted
      poster="/images/background_video.jpg"
      className="z-30 shadow-sm rounded-sm"
    >
      <source
        src="https://gm4-homepage.s3.ap-northeast-2.amazonaws.com/background.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  );
};

export default React.forwardRef(VideoComponent);

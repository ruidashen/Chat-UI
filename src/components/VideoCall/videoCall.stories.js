import React from "react";
import VideoCall from "./";

export default {
  title: "Page Components/VideoCall",
  component: VideoCall,
};

export const Default = () => {
  return (
    <div style={{ height: "100vh" }}>
      <VideoCall></VideoCall>
    </div>
  );
};

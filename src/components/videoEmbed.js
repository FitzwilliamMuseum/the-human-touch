import React from "react"
const VideoEmbed = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="video embed-responsive embed-responsive-16by9">
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      autoPlay={false}
      autostart="false"
    />
  </div>
)
export default VideoEmbed

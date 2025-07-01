import './index.css'

import ReactPlayer from 'react-player'

const VideoPlayer = () => (
  <div className="video-container">
    <h1 className="heading">Video Player</h1>
    <div className="responsive-container">
      <ReactPlayer url="https://youtu.be/BtrXJqykU-0?si=hwfVWfhxF0OCNDBl" />
    </div>
  </div>
)

export default VideoPlayer

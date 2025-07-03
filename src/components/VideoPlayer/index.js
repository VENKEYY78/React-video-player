import {Component} from 'react'

import './index.css'

import ReactPlayer from 'react-player'

const videoURL = 'https://youtu.be/BtrXJqykU-0?si=hwfVWfhxF0OCNDBl'

class VideoPlayer extends Component {
  state = {
    isPlaying: false,
    controls: false,
  }

  onClickPlay = () => {
    this.setState(prevState => ({
      isPlaying: !prevState.isPlaying,
      controls: !prevState.controls,
    }))
  }

  render() {
    const {isPlaying} = this.state
    const btnText = isPlaying ? 'Pause' : 'Play'
    return (
      <div className="video-container">
        <h1 className="heading">Video Player</h1>
        <div className="responsive-container">
          <ReactPlayer
            url={videoURL}
            playing={isPlaying}
            controls={true}
            light={false}
            width="100%"
            height="360px"
            className="custom-player"
          />
        </div>
        <button type="button" className="button" onClick={this.onClickPlay}>
          {btnText}
        </button>
      </div>
    )
  }
}

export default VideoPlayer

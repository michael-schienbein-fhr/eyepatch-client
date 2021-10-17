import { useEffect, useState } from 'react';
import './video-item.css';

const VideoItem = ({ connectionStatus, video, handleVideoRemoval, handleVideoChange, globalVideoId }) => {
  const isConnectionOpen = (connectionStatus === 'Open') ? true : false;
  const [activeVideo, setActiveVideo] = useState(false);

  useEffect(() => {
    if (globalVideoId === video.videoId) {
      console.log(globalVideoId)
      setActiveVideo(true);
    } else {
      setActiveVideo(false);
    }
  }, [globalVideoId])
  return (
    <>
      <div class='video-item-container' onClick={() => handleVideoChange(video, 'queue')} className='video-item item'>
        <div class="video-item-remove" onClick={() => handleVideoRemoval(video)}>X</div>
        <img className={activeVideo ? 'image active' : 'image'} src={video.thumbnail} alt={video.description} />
        <span>{video.title}</span>
      </div>
    </>
  )
};
export default VideoItem;

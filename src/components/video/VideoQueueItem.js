import { useEffect, useState } from 'react';
import './video-item.css';

const VideoQueueItem = ({ video, handleVideoRemoval, handleVideoChange, globalVideoId }) => {
  const [activeVideo, setActiveVideo] = useState(false);

  useEffect(() => {
    if (globalVideoId === video.videoId) {
      setActiveVideo(true);
    } else {
      setActiveVideo(false);
    }
  }, [globalVideoId, video.videoId])
  return (
    <>
      <div className='video-item-container' onClick={() => handleVideoChange(video, 'queue')} className='video-item item'>
        <div className="video-item-remove" onClick={() => handleVideoRemoval(video)}>X</div>
        <img className={activeVideo ? 'image active' : 'image'} src={video.thumbnail} alt={video.description} />
        <span>{video.title}</span>
      </div>
    </>
  )
};
export default VideoQueueItem;

import React from 'react';
import './video-item.css';

const VideoItem = ({ connectionStatus, video, handleVideoQueing }) => {
    const isConnectionOpen = (connectionStatus === 'Open') ? true : false;
    return (
        <div disabled={!isConnectionOpen} onClick={() => handleVideoQueing(video)} className=' video-item item'>
            <img className='image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
            <span>{video.snippet.title}</span>
        </div>
    )
};
export default VideoItem;

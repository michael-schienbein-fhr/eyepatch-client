import './VideoList.css';
import { useRef, useEffect } from 'react';
import VideoItem from './VideoItem';
import VideoItem2 from './VideoItem2';
const VideoList = ({ connectionStatus, videoSearchRes, globalQueue, globalVideoId, handleVideoQueing, handleVideoRemoval, handleVideoChange }) => {
    const scrollTarget = useRef(null);

    useEffect(() => {
        if (scrollTarget.current) {
            scrollTarget.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [globalQueue.length]);
    const renderedVideos = (videoSearchRes.length > 0)
        ? videoSearchRes.map((video) => {
            return <VideoItem
                key={video.id.videoId}
                video={video}
                handleVideoQueing={handleVideoQueing}
                connectionStatus={connectionStatus} />
        })
        : globalQueue.map((video) => {
            return <VideoItem2
                key={video.videoId}
                video={video}
                handleVideoRemoval={handleVideoRemoval}
                handleVideoChange={handleVideoChange}
                globalVideoId={globalVideoId}
                connectionStatus={connectionStatus} />
        });

    return (
        <div className='VideoList-container'>
            {renderedVideos}
            <div ref={scrollTarget} />
        </div>
    )
};
export default VideoList;
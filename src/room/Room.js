import './Room.css';
import { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import EyepatchApi from '../api/api';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import Chat from '../chat/Chat';
import Player from '../video/Player';
import VideoList from '../video/VideoList';
import UserContext from "../auth/UserContext";
import SearchForm from '../common/SearchForm';
import youtube from '../api/youtube';
import LoadingSpinner from '../common/LoadingSpinner';
// const BASE_URL = process.env.WEBSOCKET_BASE_URL || "ws://localhost:8001";
const BASE_URL = "wss://eyepatch-messaging.herokuapp.com"
// const WEBSOCKET_BASE = (process.env.NODE_ENV === "test")
//   ? "ws://192.168.1.40:8001"
//   : "ws://localhost:8001" //put heroku here

const Room = () => {
  const { id } = useParams();
  const wsURL = `${BASE_URL}/room/${id}`;
  const { currentUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState([]);
  const [websocket, setWebsocket] = useState(null);

  const [videoSearchRes, setVideoSearchRes] = useState([]);
  const [globalQueue, setGlobalQueue] = useState([])
  const [globalPlaybackTime, setGlobalPlaybackTime] = useState(null);
  const [globalPlayerState, setGlobalPlayerState] = useState(null);
  const [globalVideoId, setGlobalVideoId] = useState(null);
  const [joinSyncTime, setJoinSyncTime] = useState(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [validRoom, setValidRoom] = useState(false)
  const [removed, setRemoved] = useState(false);
  const history = useHistory()
  const { currentRoom } = useContext(UserContext);

  useEffect(function changeUsername() {
    getValidRoom()
    setUsername(currentUser.username);
  }, []);

  async function getValidRoom() {
    try {
      let result = await EyepatchApi.getRoom(id);
      if (result.hasPass === true && currentRoom.id !== result.id) {
        history.push(`/rooms/private/${id}/login`);
      } else {
        setValidRoom(true);
      }
    } catch (error) {
      history.push('/rooms');
    }
  }
  // useEffect(()=> {
  //   return () => {
  //     websocket.close();
  //   }
  // },[])
  // useEffect(() => {
  //   window. = e => {
  //     setGlobalVideoId(null);
  //     getWebSocket().close();
  //     console.log("socket disconnect should fire.");
  //   };
  // });
  // const pageAccessedByReload = (
  //   (window.performance.navigation && window.performance.navigation.type === 1) ||
  //   window.performance
  //     .getEntriesByType('navigation')
  //     .map((nav) => nav.type)
  //     .includes('reload')
  // );

  // alert(pageAccessedByReload);
  // useEffect(() => {
  //   window.addEventListener("beforeunload", closeSocket);
  //   return () => {
  //     window.removeEventListener("beforeunload", closeSocket);
  //   };
  // }, []);
  // if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  //   console.info( "This page is reloaded" );
  //   // history.push(0);
  // } else {
  //   console.info( "This page is not reloaded");
  // }
  // const closeSocket = (e) => {
  // };
  // const alertUser = (e) => {
  //   console.log(getWebSocket())
  //   e.preventDefault();
  //   e.returnValue = "";
  //   // setGlobalVideoId(null);
  // };
  // window.beforeunload = (e) => {
  //   console.log('Stop this');
  //   e.preventDefault()
  //   websocket.close();
  //   // e.returnValue = '';
  // };
  const onOpen = () => {
    console.log('opened');
    setWebsocket(getWebSocket());
    setIsVideoLoaded(false);
    sendJsonMessage({ type: "join", username })
  };

  const onMessage = (e) => {
    const message = JSON.parse(e.data);
    if (message.type === 'chat') {
      setMessages((_messages) => [..._messages, message]);
    } else if (message.type === 'playerState' && message.state !== 'sync') {
      setGlobalPlayerState(message.state);
      setGlobalPlaybackTime(message.time);
    } else if (message.type === 'playerState' && message.state === 'sync') {
      setJoinSyncTime(message.time);
    } else if (message.type === 'video' && message.action === 'add') {
      if (!globalQueue.some(msg => (msg.videoId === message.videoId))) {
        setGlobalQueue((_videos) => [..._videos, message]);
      }
    } else if (message.type === 'video' && message.action === 'remove') {
      setGlobalQueue(globalQueue.filter(video => video.videoId !== message.videoId));
      setRemoved(true);
    } else if (message.type === 'video' && message.action === 'change') {
      if (message.videoId !== globalVideoId) {
        setIsVideoLoaded(true);
      }
        setGlobalVideoId(message.videoId);
        setGlobalPlaybackTime(message.time);
        if (isVideoLoaded) {
          setGlobalPlayerState(null);
          setGlobalPlayerState("seek");
        }
    }
  };

  const {
    sendJsonMessage,
    readyState,
    // sendMessage,
    // lastMessage,
    // lastJsonMessage,
    getWebSocket
  } = useWebSocket(wsURL, {
    onOpen,
    onMessage,
    // onClose: handleClose,
    // onError: handleError,

    //Will attempt to reconnect on all close events, such as server shutting down
    shouldReconnect: (closeEvent) => false,
  });

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];

  async function searchFor(searchTerm) {
    try {
      let res = await youtube.get('search', {
        params: {
          q: searchTerm
        }
      });
      setVideoSearchRes(res.data.items);
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  };

  const handleVideoQueing = (video) => {
    sendJsonMessage({
      type: 'video',
      action: 'add',
      videoId: video.id.videoId,
      title: video.snippet.title,
      description: video.snippet.description,
      thumbnail: video.snippet.thumbnails.medium.url
    });
    setVideoSearchRes([]);
  }

  const handleVideoRemoval = (video) => {
    sendJsonMessage({
      type: 'video',
      action: 'remove',
      videoId: video.videoId,
    });

  }

  const handleVideoChange = (video) => {
    sendJsonMessage({
      type: 'video',
      action: 'change',
      videoId: video.videoId,
    });
  };

  if (!validRoom) return <LoadingSpinner />;

  return (
    <div className="Room">
      <div className="container">
        <SearchForm searchFor={searchFor} />
        <div className="d-flex justify-content-center">
          <div className="p-1">
            <Player
              sendJsonMessage={sendJsonMessage}
              globalPlaybackTime={globalPlaybackTime}
              globalPlayerState={globalPlayerState}
              setGlobalPlayerState={setGlobalPlayerState}
              username={username}
              isVideoLoaded={isVideoLoaded}
              setIsVideoLoaded={setIsVideoLoaded}
              globalQueue={globalQueue}
              globalVideoId={globalVideoId}
              joinSyncTime={joinSyncTime}
              handleVideoChange={handleVideoChange}
              removed={removed}
              setRemoved={setRemoved}
            />
          </div>
          <div className="p-1">
            <Chat
              messages={messages}
              username={username}
              sendJsonMessage={sendJsonMessage}
              connectionStatus={connectionStatus}
              readyState={readyState}
            />
          </div>
          <div className="p-1">
            <VideoList
              videoSearchRes={videoSearchRes}
              globalQueue={globalQueue}
              globalVideoId={globalVideoId}
              connectionStatus={connectionStatus}
              handleVideoQueing={handleVideoQueing}
              handleVideoRemoval={handleVideoRemoval}
              handleVideoChange={handleVideoChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Room;

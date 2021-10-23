import './Rooms.css';
import { useState, useEffect } from "react";
import {useHistory} from "react-router-dom";
import EyepatchApi from "../../api/api";
import RoomCard from "./RoomCard";
import LoadingSpinner from "../common/LoadingSpinner";


const Rooms = ({ joinRoom, deleteRoom }) => {
  const [rooms, setRooms] = useState(null);
  useEffect(function getRoomsOnMount() {
    getRooms();
  }, [setRooms, deleteRoom]);

  /** Triggered by getRooms form submit; reloads rooms. */
  async function getRooms() {
    let rooms = await EyepatchApi.getRooms();
    setRooms(rooms);
  }
   


  if (!rooms) return <LoadingSpinner />;


  return (
    <div className="Rooms container overflow-auto">
      {rooms.length
        ? (
          <div className="row overflow-auto">
            {rooms.map(c => (
              <RoomCard
                key={c.id}
                id={c.id}
                roomName={c.roomName}
                hasPass={c.hasPass}
                joinRoom={joinRoom}
                roomOwner={c.roomOwner}
                deleteRoom={deleteRoom}
              />
            ))}
          </div>
        ) : (
          <p className="lead">Sorry, no results were found!</p>
        )}
    </div>
  );
}

export default Rooms;


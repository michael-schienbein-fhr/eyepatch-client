import './RoomCard.css';
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../auth/UserContext";
function RoomCard({ id, roomName, hasPass }) {
  const { currentRoom } = useContext(UserContext);

  return (
    <div className="RoomCard col-md-6 col-lg-4 mx-0 px-1 py-1">
      {hasPass === true ?
        (<Link className="RoomCard-link"
          to={currentRoom && currentRoom.id === id
            ? `/rooms/private/${currentRoom.id}`
            : `/rooms/private/${id}/login`}>
          <div className="card-body">
            <h5 className="card-title">
              Room Name: {roomName}
            </h5>
            <p><small>Room Id: {id}</small></p>
            <p><small>Password Protected: ✔️</small></p>
          </div>
        </Link>)
        :
        (<Link className="RoomCard-link" to={`/rooms/${id}`}>
          <div className="card-body">
            <h5 className="card-title">
              Room Name: {roomName}
            </h5>
            <p><small>Room Id: {id}</small></p>
            <p><small>Password Protected: ❌</small></p>
          </div>
        </Link>
        )}
    </div>
  );
}

export default RoomCard;


import './RoomCard.css';
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../auth/UserContext";
import EyepatchApi from '../api/api';
function RoomCard({ id, roomName, hasPass, roomOwner }) {
  const { currentRoom, currentUser } = useContext(UserContext);

  const deleteRoom = async function (){
    let room = await EyepatchApi.deleteRoom(id);
    console.log(id);
  }
  return (
    <div className="RoomCard col-md-6 col-lg-4 mx-0 px-1 py-1">
      {currentUser.username === roomOwner ? <div onClick={deleteRoom}>X</div> : null}
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


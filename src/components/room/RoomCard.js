import './RoomCard.css';
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../auth/UserContext";

function RoomCard({ id, roomName, hasPass, roomOwner, deleteRoom }) {
  const { currentRoom, currentUser } = useContext(UserContext);
  // const [isActive, setIsActive] = useState(false);
  // const toggleActive = () => {
  //   setIsActive(true);
  // }
  const deleteButton = (currentUser.username === roomOwner || currentUser.isAdmin === true) ? <div className="delete" onClick={() => deleteRoom(id)}>X</div> : null

  return (
    <div className="RoomCard col-md-6 col-lg-4 mx-0 px-1 py-1">
      {hasPass === true ?
        (
          <div className="room-card-body">
            <Link className="RoomCard-link"
              to={currentRoom && currentRoom.id === id
                ? `/rooms/private/${currentRoom.id}`
                : `/rooms/private/${id}/login`}>
              <h5 className="card-title">
                Room Name: {roomName}
              </h5>
              <p><small>Room Id: {id}</small></p>
              <p><small>Password Protected: ✔️</small></p>
            </Link>
          </div>
        )
        :
        (<div className="room-card-body">
          <Link className="RoomCard-link" to={`/rooms/${id}`}>
            <h5 className="card-title">
              Room Name: {roomName}
            </h5>
            <p><small>Room Id: {id}</small></p>
            <p><small>Password Protected: ❌</small></p>
          </Link>
        </div>
        )}
      {deleteButton}

    </div>
  );
}

export default RoomCard;


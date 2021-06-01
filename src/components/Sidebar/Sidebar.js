import React from "react";
import './Sidebar.css'
import { useStateValue } from "../../context/StateProvider";
import SidebarOption from '../SidebarOption/SidebarOption'

function Sidebar() {
  const [{ playlists }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <h2 className="head">Exam Assistant</h2>
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.map((playlist) => (
        <SidebarOption option={playlist} />
      ))}
    </div>
  )

}

export default Sidebar

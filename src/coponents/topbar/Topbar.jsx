import "./topbar.css"
import {Search,Person,Chat,Notifications} from "@mui/icons-material"

export default function Topbar() {
  return (
    <div className="topbarContainer">
     <div className="topbarLeft">
      <span className="logo">Lamasocial</span>
     </div> 
     <div className="topbarCenter">
      <div className="searchbar">
        <Search className="searchIcon"/>
        <input placeholder="search for friend, post or video" className="searchInputs" />
      </div>
     </div> 
     <div className="topbarRight">
      <span className="topbarLink">Home</span>
      <span className="topbarLink">Timeline</span>
     
     <div className="topbarIcons">
      <div className="topbarIconItem">
        <Person />
        <span className="topbarIconBadge">1</span>
      </div>
      <div className="topbarIconItem">
        <Chat />
        <span className="topbarIconBadge">1</span>
      </div>
      <div className="topbarIconItem">
        <Notifications />
        <span className="topbarIconBadge">1</span>
      </div>
     <img src="./assets/person/1.jpeg" alt="" className="topbarImg" />
     </div>
     </div> 
    </div>
  )
}

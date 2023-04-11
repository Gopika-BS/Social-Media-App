import "./profile.css"
import Topbar from "../../coponents/topbar/Topbar";
import Sidebar from "../../coponents/sidebar/Sidebar";
import Feed from "../../coponents/feed/Feed";
import Rightbar from "../../coponents/rightbar/Rightbar";
export default function Profile() {
  return (
    <>
    <Topbar />
    <div className="profile">
    <Sidebar />
    <div className="profileRight">
   
    <div className="profileRightTop">
    <div className="profileCover">
      <img src="assets/post/3.jpeg" alt="" className="profileCoverImg" />
      <img src="assets/person/7.jpeg" alt="" className="profileUserImg" />

    </div>
    <div className="profileInfo">
      <h4 className="profileInfoName">Amal Nandan</h4>
      <span className="profleInfoDes">Hello my friends</span>
    </div>
    </div>
    <div className="profileRightBottom">
    <Feed />
    <Rightbar profile/>
    </div>
    </div>
    
    </div>
    </>
  )
}

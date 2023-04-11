import Topbar from "../../coponents/topbar/Topbar";
import Sidebar from "../../coponents/sidebar/Sidebar";
import Feed from "../../coponents/feed/Feed";
import Rightbar from "../../coponents/rightbar/Rightbar";
import "./home.css"
export default function Home() {
  return (
    <>
    <Topbar />
    <div className="homeContainer">
    <Sidebar />
    <Feed />
    <Rightbar />
    </div>
    </>
  )
}

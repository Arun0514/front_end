import Navbar from "../components/Navbar";
import video from '../assets/video.mp4';
import '../components/reservation.css'


function reservation_dashboard() {
  return (
   <>
   <div className="nav">
   <Navbar/>
   </div>

 
 <section className="container1">
    <div className="overlay"></div>
    <video className="tour-vid" src={video} muted autoPlay loop type='video/mp4'></video>

    <div className="text-content">
        <div className="textDiv">
            <span className="smalltext">
                our Packages
            </span>
            <h1 className="title">Search your Holiday</h1>

        </div>
    </div>
  </section>

  
   </>

  )
}

export default reservation_dashboard




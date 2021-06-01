import './Footer.css'
import { useStateValue } from "../../context/StateProvider";
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";

function Footer() {

  const [{ curr_song,playing }, dispatch] = useStateValue();

  const handlePlayPause = () => {
   if (playing) {
    
     dispatch({
       type: "SET_PLAYING",
       playing: false,
     });
   } else {

     dispatch({
       type: "SET_PLAYING",
       playing: true,
     });
   }
 };


  return (
    <div className="footer">
      <div className="footer__left">

        <div className="footer__songInfo">
          {curr_song ? curr_song: null}
        </div>
      </div>

      <div className="footer__center">
      <ShuffleIcon className="footer__green" />
      <SkipPreviousIcon  className="footer__icon" />
      {playing ? (
        <PauseCircleOutlineIcon
          onClick={handlePlayPause}
          fontSize="large"
          className="footer__icon"
        />
      ) : (
        <PlayCircleOutlineIcon
          onClick={handlePlayPause}
          fontSize="large"
          className="footer__icon"
        />
      )}
      <SkipNextIcon className="footer__icon" />
      <RepeatIcon className="footer__green" />
      </div>

    </div>
  )

}

export default Footer

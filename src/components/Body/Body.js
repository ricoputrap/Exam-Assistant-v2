import './Body.css'
import { useStateValue } from "../../context/StateProvider";
import SongRow from '../SongRow/SongRow'

function Body() {
  const [{ item,subject_audio }, dispatch] = useStateValue();

  const playSong = (id)=>{
    dispatch({
      type: "SET_SONG",
      song: id
    });
  }
  return (
    <div className="body">
      <div className="body__infoText">

          <h2>View {item} Playlist</h2>
          <p>View the {item} audio notes added by your teachers</p>

      </div>
      <hr />
      <div className="body__songs">
        {subject_audio[item]?.map((i) => (
          <SongRow key={i.title} playSong={playSong} item={i} />
        ))}
      </div>

    </div>
  )

}

export default Body

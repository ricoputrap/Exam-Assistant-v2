import './Teacher.css'
import {useState} from 'react'
import {Link} from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";

function Teacher(){

  const [{ playlists }, dispatch] = useStateValue();
  const [name,setname] = useState(null);
  const [subject,setsubject] = useState(playlists[0]);

  const handleteach = ()=>{
    dispatch({
      type: "SET_AUDIO",
      title: name,
      name: subject})
  }

  return (
    <div className="teach">
      <div className="teach-con">
        <h1>Add Exam Notes:</h1>
        <div className="teach-form">
          <label>
              Select Subject:
          </label>
          <select name="selectList" id="selectList" onChange={(e)=> setsubject(e.target.value)}>
             {playlists?.map((item)=>(
             <option value={item}>{item}</option>
           ))}

          </select>
          <label>
              Enter Notes:
          </label>
            <input type="text" value={name} name="name" onChange={(e)=> setname(e.target.value)} />
        </div>

        <Link to="/" onClick={handleteach}><button className="btn btn-t"> Submit </button></Link>
      </div>
    </div>
  )
}

export default Teacher

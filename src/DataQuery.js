import "../src/components/datatable/datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns,  } from "../src/EventsReport";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getReportedDiscussion, getReportedEvents, getReportedUsers, getUsers } from "../src/methods/MethodUsers";
import { Table } from "@mui/material";
import './DataEvent.css'
import { Button } from "react-bootstrap";
import { BASE_URL } from "./BaseUrl";
import jwt_decode from "jwt-decode";
import axios from "axios";

const Datatable = () => {
  const [data, setData] = useState();
  const [eventdetail,setEventdetails]=useState(false);
  const navigate=useNavigate()
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  useEffect(() =>{
    getReportedDiscussion().then((res) => {
      setData(res.data)
      console.log("reported query data",res.data)
    })
  },[setData])
  // console.log("event name",data.event.event_name))
  var token = localStorage.getItem("authToken");
  var decoded = jwt_decode(token);

  const DeleteEvent = (discussion_id) => {
    const config = {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .delete(`${BASE_URL}discussionapi/reportdiscussion/${discussion_id}`, config)
      .then(() => {
        window.location.reload();
      });
  };

  return (
    <div className="datatable">
    
<table>
  <caption>Reported Queries</caption>
  <thead>
    <tr>
      <th scope="col">QUERY NAME</th>
      <th scope="col">REPORTED BY</th>
      <th scope="col">REASON</th>
      <th scope="col">TEXT</th>
      <th scope="col">VIEW</th>

      <th>ACTION</th>
    </tr>
  </thead>
  <tbody>
    {data?.map(data=>
    <tr>
      <td >{data?.discussion.question}</td>
      <td >{data?.author.username}</td>
      <td >{data?.reason}</td>
      <td >{data?.text}</td>
      <td><Button variant="primary " className="p-3" onClick={()=>navigate(`/${data?.id}`)} style={{backgroundColor:"white",width:"100px",height:"40px",borderColor:"dodgerblue",borderRadius:"10px"}}>View Details</Button></td>
      <td><Button variant="primary " className="p-3" 
      onClick={(discussion_id) => {
        DeleteEvent((discussion_id = data?.id))}}
      style={{backgroundColor:"white",width:"100px",height:"40px",borderColor:"red",borderRadius:"10px"}}>Remove</Button></td>


    </tr>
)}

{/* onClick={()=>setSendhost(true)} */}

  </tbody>
</table>
{/* {sendhost?
    <div className="popup-album">
    
    <i className="fa fa-close" style={{backgroundColor:"black",color:"red",top:"0"}} onClick={() => setSendhost(false)}></i>
    <SendHost/>
    </div>: null
    } */}
    </div>
  );
};

export default Datatable;
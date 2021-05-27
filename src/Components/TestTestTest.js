import React , { useEffect, useState }from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../Project_Information.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
// import react, { useEffect, useState } from "react";
import axios from "axios";
import {
  Form,
  // Button
} from "reactstrap";



export const TestTestTest = () => {

    const [groupList2, setgroupList2] = useState([]);
        
    const [groupname, setGroupname] = useState("");
    const [membername, setmembername] = useState("");
    const [advisorname, setadvisorname] = useState("");

    const addGroup2 = () => {
        axios
          .post("http://localhost:5001/groups/add2", {
            groupname: groupname,
            membername: membername,
            advisorname: advisorname
           
          })
          .then(() => {
            setgroupList2([
              ...groupList2,
              {
                groupname: groupname,
                membername: membername,
                advisorname: advisorname
              },
            ]);
          });
      };
  return (
    <div className="App container">
      <h1>Create Group</h1>
      <div className="creategroup"></div>
      <from action="">
        <div className="mb-3">
          <label htmlFor="group" className="form-label">
            Group:
          </label>
          <input
            type="text"
            className="from-control"
            placeholder="Enter Groupname"
            onChange={(event)=>{
                setGroupname(event.target.value);
            }}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="member" className="form-label">
            Member:
          </label>
          <input
            type="text"
            className="from-control"
            placeholder="Enter Member"
            onChange={(event)=>{
                setmembername(event.target.value);
            }}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="advisor" className="form-label">
            Advisor:
          </label>
          <input
            type="text"
            className="from-control"
            placeholder="Enter Advisor"
            onChange={(event)=>{
                setadvisorname(event.target.value);
            }}
          ></input>
        </div>
        <button className="btn btn-succes" onClick={addGroup2()}>Submit</button>
      </from>
    </div>
  );
};

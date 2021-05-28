import React from "react";
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
import react, { useEffect, useState } from "react";
import axios from "axios";
import {
  Form,
  // Button
} from "reactstrap";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    //   width: '100px',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
  },
  // button123: {
  //   margin: theme.spacing(1),
  //   marginLeft: "48px",
  //   marginTop: "40px",
  //   marginBottom: "20px",
  // },
  // button456: {
  //   margin: theme.spacing(1),
  //   marginBottom: "20px",
  //   marginTop: "40px",
  // },
}));

export const BlockCreate = () => {
  

  const [groupList2, setgroupList2] = useState([]);

  const [groupname, setGroupname] = useState("");
  const [membername, setmembername] = useState("");
  const [advisorname, setadvisorname] = useState("");

  const addGroup2 = () => {
    axios.post("http://localhost:5001/groups/increed/", {
        groupname: groupname,
        membername: membername,
        advisorname: advisorname,
        
      })
      .then(() => {
        setgroupList2([
          ...groupList2,
          {
            groupname: groupname,
            membername: membername,
            advisorname: advisorname,
          },
        ]);
      });
  };

  return (
        <div className="rightblockcreate">
          <div className="blockwhitecreate">
            <h1 className="TopnameCreate">Create Group</h1>

            <hr className="hr-create"></hr>

            <Form>
              <h4 className="projectTopicInform">Group Name</h4>
              <div className="fieldmember">
                <input
                  id="outlined-full-width"
                  label="Enter Name"
                  style={{ marginTop: 10, marginLeft: 8, width: 500 , fontSize: 14 , height:30 }}
                  placeholder="Enter Name"
                  variant="outlined"
                  onChange={(event) => {
                    setGroupname(event.target.value);
                  }}
                />
              </div>

              <h4 className="projectTopicInform">Member</h4>
              <div className="fieldmember">
                <input
                  id="outlined-full-width"
                  label="ชื่อโครงงานภาษาอังกฤษ"
                  style={{ marginTop: 10, marginLeft: 8, width: 500  , fontSize: 14 , height:30}}
                  placeholder="Member Name"
                  variant="outlined"
                  onChange={(event) => {
                    setmembername(event.target.value);
                  }}
                />
              </div>

              <h4 className="projectTopicInform">Advisor</h4>
              <div className="fieldmember">
                <input
                  id="outlined-full-width"
                  label="ชื่อ นามสกุล (ภาษาไทย)"
                  style={{ marginTop: 10, marginLeft: 8, width: 500  , fontSize: 14 , height:30 }}
                  placeholder="Advisor Name"
                  variant="outlined"
                  onChange={(event) => {
                    setadvisorname(event.target.value);
                  }}
                />
              </div>

              <Button
                // id="btn-create"
                className="button123"
                variant="outlined"
                color="primary"
                type="submit"
                onClick={addGroup2}
                endIcon={<Icon>add</Icon>}
              >
                Submit
              </Button>

              <Button
                // id="btn-cancel"
                className="button456"
                variant="outlined"
                color="primary"
                type="submit"
                endIcon={<Icon>close</Icon>}

                // onClick={handleSubmit}
              >
                <Link to="/home">Cancel</Link>
              </Button>
            </Form>
          </div>
        </div>
     
  );
};

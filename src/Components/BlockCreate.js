import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalState";
import { Row, Col } from "react-bootstrap";
// import { Form ,FormGroup } from 'react-bootstrap';
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
// import { Input } from '@material-ui/core';
import { v4 as uuid } from "uuid";
import axios from "axios";
import {
  Form,
  FormGroup,
  Label,
  Input,
  // Button
} from "reactstrap";
import { set } from "mobx";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
    marginLeft: "70px",
    marginTop: "50px",
  },
  button2: {
    margin: theme.spacing(1),

    marginTop: "50px",
  },
}));

export const BlockCreate = () => {

  const classes = useStyles();

  const [name, setName] = useState("");
  const { addUser } = useContext(GlobalContext);
  const history = useHistory();

  const [inputNameGroup, setInputGroupName] = useState([
    { groupname: "" }]);
  const [inputFields, setInputFields] = useState([
    { firstName: "", lastName: "" },
  ]);
  const [inputFields2, setInputFields2] = useState([
    { firstName: "", lastName: "" },
  ]);

  const onChange = (e) => {
    // setName(e.target.value);
    setGroupname(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  const onSubmit = () => {
    const newUser = {
      id: uuid(),
      groupname
    };
    addUser(newUser);
    history.push("/group");
    console.log("InputFields NameGroup", groupname);
    console.log("InputFields FirstName Member: ", memberfirstname);
    console.log("InputFields LastName Member: ", memberlastname);
    console.log("InputFields FirstName Advisor: ", advisorfirstname);
    console.log("InputFields LastName Advisor: ", advisorlastname);
  };

  const [groupname, setGroupname] = useState("");
  const [memberfirstname, setmemberFirstname] = useState("");
  const [memberlastname, setmemberLastname] = useState("");
  const [advisorfirstname, setadvisorFirstname] = useState("");
  const [advisorlastname, setadvisorlastname] = useState("");

  const [groupList, setgroupList] = useState([]);
  const addGroup = () => {
    axios
      .post("http://localhost:5000/group/add", {
        groupname: groupname,
        memberfirstname: memberfirstname,
        memberlastname: memberlastname,
        advisorfirstname: advisorfirstname,
        advisorlastname: advisorlastname,
      })
      .then(() => {
        setgroupList([
          ...groupList,
          {
            groupname: groupname,
            memberfirstname: memberfirstname,
            memberlastname: memberlastname,
            advisorfirstname: advisorfirstname,
            advisorlastname: advisorlastname,
          },
        ]);
      });
  };
  // console.log(groupname);


  return (
    <div className="rightblockcreate">
      <div className="blockwhitecreate">
        <h1 className="Topname">Create Group</h1>

        <Container>
          <Form onSubmit={onSubmit}>
            <h4 className="GroupName">Group Name</h4>

            <div className="fieldmember"  >
              <TextField
                name="groupname"
                label="Group name"
                variant="outlined"
                // value={name} 
                onChange={onChange}
                value={groupname.setGroupname}
              // onChange={event => handleChangeInput0(index0, event)}
              />
            </div>



            <h4 className="Add-Member">Member</h4>

            <form className={classes.root} >
            <div className="fieldmember"  >
                  <TextField
                    name="memberfirst"
                    label="First Name"
                    variant="outlined"
                    value={memberfirstname.setmemberFirstname}//inputField.firstName
                    // onChange={(event) => handleChangeInput(index, event)}
                    // onChange={onChange}
                    onChange={(e)=>{
                      setmemberFirstname(e.target.value);
                    }}
                  />
                  <TextField
                    name="memberlast"
                    label="Last Name"
                    variant="outlined"
                    value={memberlastname.setmemberLastname}
                    // onChange={(event) => handleChangeInput(index, event)}
                    // onChange={onChange}
                    onChange={(e)=>{
                      setmemberLastname(e.target.value);
                    }}
                  />
                  <IconButton >
                    <RemoveIcon />
                  </IconButton>

                  <IconButton >
                    <AddIcon />
                  </IconButton>
                /</div>
            </form>

            <h4 className="Add-Advisor">Advistor</h4>

            <form className={classes.root} >
              
            <div className="fieldmember"  >
                  <TextField
                    name="advisorfirst"
                    label="First Name"
                    variant="outlined"
                    value2={advisorfirstname.setadvisorFirstname}
                    // onChange={(event) => handleChangeInput2(index2, event)}
                    onChange={(e)=>{
                      setadvisorFirstname(e.target.value);
                    }}
                  />
                  <TextField
                    name="advisorlast"
                    label="Last Name"
                    variant="outlined"
                    value2={advisorlastname.setadvisorlastname}
                    // onChange={(event) => handleChangeInput2(index2, event)}
                    onChange={(e)=>{
                      setadvisorlastname(e.target.value);
                    }}
                  />
                  <IconButton >
                    <RemoveIcon />
                  </IconButton>

                  <IconButton >
                    <AddIcon />
                  </IconButton>
              
              </div>
            </form>

            <Button  onClick={addGroup}
              id="btn-create"
              className={classes.button}
              variant="outlined"
              color="primary"
              type="submit"
              endIcon={<Icon>add</Icon>}
            >
              Submit
            </Button>

            <Button
              id="btn-cancel"
              className={classes.button2}
              variant="outlined"
              color="primary"
              type="submit"
              endIcon={<Icon>close</Icon>}
              onClick={handleSubmit}
            >
              <Link to="/project">Cancel</Link>
            </Button>
            {/* <Link to="/project" className="btn btn-danger ml-2">Cancel</Link> */}
          </Form>
        </Container>
      </div>
    </div>
  );
};
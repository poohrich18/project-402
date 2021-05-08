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

  const [inputNameGroup, setInputGroupName] = useState([{ groupname: "" }]);
  const [inputFields, setInputFields] = useState([
    { firstName: "", lastName: "" },
  ]);
  const [inputFields2, setInputFields2] = useState([
    { firstName: "", lastName: "" },
  ]);

  const onChange = (e) => {
    //setName(e.target.value);
    setGroupname(e.target.value);
  };

  const handleSubmit = () => {
    // e.preventDefault();
    history.push("/project");
    console.log("InputFields", inputNameGroup);
    console.log("InputFields", inputFields);
    console.log("InputFields", inputFields2);
  };

  const onSubmit = () => {
    const newUser = {
      id: uuid(),
      name,
    };
    addUser(newUser);
    history.push("/project");
    console.log("InputFields", inputNameGroup);
    console.log("InputFields", inputFields);
    console.log("InputFields", inputFields2);
  };
  // const componentDidMount = () => {
  //     axios.get('http://localhost:5000/group/')
  //       .then(response => {
  //         if (response.data.length > 0) {
  //           this.setState({
  //             // users: response.data.map(user => user.username),
  //             // username: response.data[0].username
  //           })
  //         }
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       })}
  let h = useHistory();
  const [groupname, setGroupname] = useState("");
  const [memberfirstname, setmemberFirstname] = useState("");
  const [memberlastname, setmemberLastname] = useState("");
  const [advisorfirstname, setadvisorFirstname] = useState("");
  const [advisorlastname, setadvisorlastname] = useState("");

  const [groupList, setgroupList] = useState([]);

  const changeGroup = () => {
    const newUser = {
        id: uuid(),
        groupname
    }
    addUser(newUser);
    history.push('/group');}

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
  console.log(groupname);
  //Group Name
  const handleChangeInput0 = (index0, event) => {
    const values0 = [...inputNameGroup];
    values0[index0][event.target.name] = event.target.value;
    setInputGroupName(values0);
    setGroupname(event.target.va);
  };

  // Member
  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleAddFields = () => {
    setInputFields([...inputFields, { firstName: "", lastName: "" }]);
  };

  //Advisor
  const handleChangeInput2 = (index2, event) => {
    const values2 = [...inputFields2];
    values2[index2][event.target.name] = event.target.value;
    setInputFields2(values2);
  };

  const handleRemoveFields2 = (index2) => {
    const values2 = [...inputFields2];
    values2.splice(index2, 1);
    setInputFields2(values2);
  };

  const handleAddFields2 = () => {
    setInputFields2([...inputFields2, { firstName: "", lastName: "" }]);
  };

  return (
    <div className="rightblockcreate">
      <div className="blockwhitecreate">
        <h1 className="Topname">Create Group</h1>
        <Form action="" onSubmit={changeGroup}>
          <div className="mb-3">
            <label htmlFor="group" className="form-label">
              Group:
            </label>
            <input
              type="text"
              className="from-control"
              placeholder="Enter Group Name"
              onChange={(event) => {
                setGroupname(event.target.value);
              }}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="fristNameMember" className="form-label">
              Fristname Member:
            </label>
            <input
              type="text"
              className="from-control"
              placeholder="Enter Fristname Member"
              onChange={(event) => {
                setmemberFirstname(event.target.value);
              }}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="lastNameMember" className="form-label">
              Lastname Member:
            </label>
            <input
              type="text"
              className="from-control"
              placeholder="Enter Lastname Member"
              onChange={(event) => {
                setmemberLastname(event.target.value);
              }}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="fristNameAdvisor" className="form-label">
              Fristname Advisor:
            </label>
            <input
              type="text"
              className="from-control"
              placeholder="Enter Fristname Advisor"
              onChange={(event) => {
                setadvisorFirstname(event.target.value);
              }}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="lastNameAdvisor" className="form-label">
              Lastname Advisor:
            </label>
            <input
              type="text"
              className="from-control"
              placeholder="Enter Lastname Advisor"
              onChange={(event) => {
                setadvisorlastname(event.target.value);
              }}
            ></input>
          </div>
          <button
            className="btn btn-succuess"
            onClick={addGroup}
           
          >
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
};

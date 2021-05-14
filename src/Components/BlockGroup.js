import React from "react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { ProjectList } from "./ProjectList";
import BorderAllIcon from "@material-ui/icons/BorderAll";

import { useState, useEffect } from "react";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  button2: {
    margin: theme.spacing(1),
    marginLeft: "24px",
    marginTop: "20px",
  },

  button3: {
    margin: theme.spacing(1),
    marginLeft: "4px",
    marginTop: "20px",
  },
}));

export const BlockGroup = () => {
  const classes = useStyles();

  const [groupList, setgroupList] = useState([]);

  const [newgroupname, setnewgroupname] = useState([]);
  const [newfirstname, setnewfirstname] = useState([]);
  const [newlastname, setnewlastname] = useState([]);
  const [newadvisorfirstname, setnewadvisorfirstname] = useState([]);
  const [newadvisorlastname, setnewadvisorlastname] = useState([]);

  const getGroup = () => {
    axios.get("http://localhost:5000/group/").then((respond) => {
      setgroupList(respond.data);
    });
  };

  useEffect(() => {
    getGroup();
  }, []);

  const updateGroupname = (id) => {
    axios.put("http://localhost:5000/group/update1/", {
      groupname: newgroupname,
      id: id,
    });
  };
  const updateMemberFirstname = (id) => {
    axios.put("http://localhost:5000/group/update2/", {
      memberfirstname: newfirstname,
      id: id,
    });
  };
  const updateMemberLastname = (id) => {
    axios.put("http://localhost:5000/group/update3/", {
      memberlastname: newlastname,
      id: id,
    });
  };
  const updateAvisorFirstname = (id) => {
    axios.put("http://localhost:5000/group/update4/", {
      advisorfirstname: newadvisorfirstname,
      id: id,
    });
  };

  const  updateAvisorLastname = (id) => {
    axios.put("http://localhost:5000/group/update5/", {
      advisorlaststname: newadvisorlastname,
      id: id,
    });
  };

  const deleteGroupname = (id) => {
    axios.delete(`http://localhost:5000/group/delete1/${id}`);
   
  };
  // const updateGroupname = (id) => {
  //   axios
  //     .put("http://localhost:5000/group/update1/", {
  //       groupname: newgroupname,
  //       id: id,
  //     })
  //     .then((respond) => {
  //       setgroupList(
  //         groupList.map((val) => {
  //           return val.id == id ? {
  //             id: val.id,
  //             groupname: newgroupname,
  //             memberfirstname:val.memberfirstname,
  //             memberlastname:val.memberlastname,
  //             advisorfirstname: val.advisorfirstname

  //           }:val;

  //         })
  //       );
  //     });
  // };

  return (
    <div className="rightblockproject">
      <div className="blockwhiteproject">
        <h1 className="TopnameGroup">Group</h1>
        <hr className="hr-group"></hr>
        <Container>
          <Button
            id="btn-addproject"
            className="buttonaddgroup"
            variant="outlined"
            color="primary"
            type="submit"
            endIcon={<Icon>add</Icon>}
          >
            <Link to="/create">Add Group</Link>
          </Button>

          <Button
            className={classes.button3}
            variant="outlined"
            color="primary"
            type="submit"
            endIcon={<BorderAllIcon />}

          >
            {" "}
            Show All Group
          </Button>

          {/* <br></br>
          <br></br> */}
          {groupList.map((val, key) => {
            return (
              <div className=" group list">
                <div className="card-body text-left">
                  <p className="card-text">
                    Groupname: {val.groupname}
                    </p>
                  <p className="card-text">
                    Firstname Member: {val.memberfirstname}
                  </p>
                  <p className="card-text">
                    Lastname Member: {val.memberlastname}
                  </p>
                  <p className="card-text">
                    Firstname Adivisor : {val.advisorfirstname}
                  </p>
                  <p className="card-text">
                    Lastname Adivisor : {val.advisorlaststname}
                  </p>
                  <div className="d-flex">
                    <input
                      type="text"
                      type="String"
                      placeholder="Gropname"
                      onChange={(e) => {
                        setnewgroupname(e.target.value);
                      }}
                    />
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        updateGroupname(val._id);
                      }}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        deleteGroupname(val._id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                  <div className="d-flex">
                    <input
                      type="text"
                      type="String"
                      placeholder="Firstname"
                      onChange={(e) => {
                        setnewfirstname(e.target.value);
                      }}
                    ></input>
                    <button className="btn btn-warning"onClick={() => {
                        updateMemberFirstname(val._id);
                      }}>Update</button>
                  </div>
                  <div className="d-flex">
                    <input
                      type="text"
                      type="String"
                      placeholder="Lastname"
                      onChange={(e) => {
                        setnewlastname(e.target.value);
                      }}
                    ></input>
                    <button className="btn btn-warning"onClick={() => {
                        updateMemberLastname(val._id);
                      }}>Update</button>
                  </div>
                  <div className="d-flex">
                    <input
                      type="text"
                      type="String"
                      placeholder="Adivisor Firstname"
                      onChange={(e) => {
                        setnewadvisorfirstname(e.target.value);
                      }}
                    ></input>
                    <button className="btn btn-warning"onClick={() => {
                        updateAvisorFirstname(val._id);
                      }}>Update</button>
                  </div>
                  <div className="d-flex">
                    <input
                      type="text"
                      type="String"
                      placeholder="Adivisor Lastname"
                      onChange={(e) => {
                        setnewadvisorlastname(e.target.value);
                      }}
                    ></input>
                    <button className="btn btn-warning"onClick={() => {
                        updateAvisorLastname(val._id);
                      }}>Update</button>
                  </div>
                </div>
              </div>
            );
          })}
        </Container>

        <Container>
          <ProjectList />
        </Container>
      </div>
    </div>
  );
};

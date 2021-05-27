import React from "react";
import { Link } from "react-router-dom";
import {ListGroup , ListGroupItem } from 'reactstrap'
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import { ProjectList } from "./ProjectList";
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

export const BlockGroup_Advisor = () => {
  const classes = useStyles();

  const [groupList, setgroupList] = useState([]);

  const [newgroupname, setnewgroupname] = useState([]);
  const [newfirstname, setnewfirstname] = useState([]);
  const [newlastname, setnewlastname] = useState([]);
  const [newadvisorfirstname, setnewadvisorfirstname] = useState([]);
  const [newadvisorlastname, setnewadvisorlastname] = useState([]);

  const getGroup = () => {
    axios.get("http://localhost:5001/showgroups").then((respond) => {
      setgroupList(respond.data);
    });
  };

  useEffect(() => {
    getGroup();
    
  }, []);

  const updateGroupname = (id) => {
    axios.put("http://localhost:5001/group/update1/", {
      groupname: newgroupname,
      id: id
    }).then((respond)=>{
      setgroupList(
        groupList.map((val)=>{
          return val.id == id ? {
            id: val.id,
            groupname: newgroupname,
            memberfirstname: val.Std_Name_1,
            memberlastname: val.Std_Name_2,
            advisorfirstname: val.AdvId,
            advisorlastname: val.ProjNameEN
            
          } : val;
        })
      )
    })
  };
  const updateMemberFirstname = (id) => {
    axios.put("http://localhost:5001/group/update2/", {
      memberfirstname: newfirstname,
      id: id,
    }).then((respond)=>{
      setgroupList(
        groupList.map((val)=>{
          return val.id == id ? {
            id: val.id,
            groupname: val.ProjNameTH,
            memberfirstname: newfirstname,
            memberlastname: val.Std_Name_2,
            advisorfirstname: val.AdvId,
            advisorlastname: val.ProjNameEN
            
          } : val;
        })
        )
      })
    };
  
  const updateMemberLastname = (id) => {
    axios.put("http://localhost:5001/group/update3/", {
      memberlastname: newlastname,
      id: id,
    }).then((respond)=>{
      setgroupList(
        groupList.map((val)=>{
          return val.id == id ? {
            id: val.id,
            groupname: val.ProjNameTH,
            memberfirstname: val.Std_Name_1,
            memberlastname: newlastname,
            advisorfirstname: val.AdvId,
            advisorlastname: val.ProjNameEN
            
          } : val;
        })
        )
      })
    };
  const updateAvisorFirstname = (id) => {
    axios.put("http://localhost:5001/group/update4/", {
      advisorfirstname: newadvisorfirstname,
      id: id,
    }).then((respond)=>{
      setgroupList(
        groupList.map((val)=>{
          return val.id == id ? {
            id: val.id,
            groupname: val.ProjNameTH,
            memberfirstname: val.Std_Name_1,
            memberlastname: val.Std_Name_2,
            advisorfirstname: newadvisorfirstname,
            advisorlastname: val.ProjNameEN
            
          } : val;
        })
        )
      })
    };
  
  const  updateAvisorLastname = (id) => {
    axios.put("http://localhost:5001/group/update5/", {
      advisorlaststname: newadvisorlastname,
      id: id,
    }).then((respond)=>{
      setgroupList(
        groupList.map((val)=>{
          return val.id == id ? {
            id: val.id,
            groupname: val.ProjNameTH,
            memberfirstname: val.Std_Name_1,
            memberlastname: val.Std_Name_2,
            advisorfirstname: val.AdvId,
            advisorlastname: newadvisorlastname
            
          } : val;
        })
        )
      })
    };
  

  const deleteGroupname = (id) => {
    axios.delete(`http://localhost:5001/group/delete/${id}`).then((respond)=>{
      setgroupList(
        groupList.filter((val)=>{
          return val.id != id ;
        })
      )
    });
   
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
                {groupList.map((val, key) => {
                    return (
                        <ListGroupItem className="d-flex">
                            <div className="card-body text-left">
                                <p className="card-text">
                                    Groupname THAI: {val.ProjNameTH}
                                </p>
                                
                                <p className="card-text">
                                    Groupname ENGLLISH: {val.ProjNameEN}
                                </p>
                            
                                <p className="card-text">
                                    Member1: {val.Std_Name_1}
                                </p>

                                <p className="card-text">
                                    Member2 : {val.Std_Name_2}
                                </p>

                                <p className="card-text">
                                    Adivisor ID : {val.AdvId}
                                </p>

                                <div className="d-flex-group">
                                    <input
                                    type="text"
                                    type="String"
                                    placeholder="Groupname THAI"
                                    onChange={(e) => {
                                        setnewgroupname(e.target.value);
                                    }}
                                    />
                                    <button
                                    className="btn btn-warning"
                                    onClick={() => {
                                        updateGroupname(val.id);
                                    }}
                                    >
                                    Update
                                    </button>
                                    <button
                                    className="btn btn-warning"
                                    onClick={() => {
                                        deleteGroupname(val.id);
                                    }}
                                    >
                                    Delete
                                    </button>
                                </div>

                                <div className="d-flex-group">
                                    <input
                                    type="text"
                                    type="String"
                                    placeholder="Groupname ENG"
                                    onChange={(e) => {
                                        setnewfirstname(e.target.value);
                                    }}
                                    ></input>
                                    <button className="btn btn-warning"onClick={() => {
                                        updateMemberFirstname(val.id);
                                    }}>Update</button>
                                </div>

                                <div className="d-flex-group">
                                    <input
                                    type="text"
                                    type="String"
                                    placeholder="Member1"
                                    onChange={(e) => {
                                        setnewlastname(e.target.value);
                                    }}
                                    ></input>
                                    <button className="btn btn-warning"onClick={() => {
                                        updateMemberLastname(val.id);
                                    }}>Update</button>
                                </div>

                                <div className="d-flex-group">
                                    <input
                                    type="text"
                                    type="String"
                                    placeholder="Member2"
                                    onChange={(e) => {
                                        setnewadvisorfirstname(e.target.value);
                                    }}
                                    ></input>
                                    <button className="btn btn-warning"onClick={() => {
                                        updateAvisorFirstname(val.id);
                                    }}>Update</button>
                                </div>

                                <div className="d-flex-group">
                                    <input
                                    type="text"
                                    type="String"
                                    placeholder="Adivisor ID"
                                    onChange={(e) => {
                                        setnewadvisorlastname(e.target.value);
                                    }}
                                    ></input>
                                    <button className="btn btn-warning"onClick={() => {
                                        updateAvisorLastname(val.id);
                                    }}>Update</button>
                                </div>
                            </div>
                        </ListGroupItem>
                    );
                })}
            </Container>

            {/* <Container>
            <ProjectList />
            </Container> */}
        </div>
        </div>
    );
};

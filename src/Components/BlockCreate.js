// import React, { useState, useContext,useEffect  } from "react";

// import { Link, useHistory } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
// //Incude antd modules, icon and style
// import { Form, Input, Button, Space } from 'antd';
// import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
// import "antd/dist/antd.css";

// import { AutoComplete } from 'antd';

// import { GlobalContext } from "../Context/GlobalState";
// import { Row, Col, useAccordionToggle } from "react-bootstrap";
// // import { Form ,FormGroup } from 'react-bootstrap';
// import { makeStyles } from "@material-ui/core/styles";
// // import { Input } from '@material-ui/core';
// import { v4 as uuid } from "uuid";
// import Container from "@material-ui/core/Container";
// // import Button from "@material-ui/core/Button";
// import axios from "axios";
// import Icon from "@material-ui/core/Icon";
// import TextField from "@material-ui/core/TextField";
// import IconButton from "@material-ui/core/IconButton";


// class BlockCreate extends React.Component{
  
//   render(){
   
//   const Demo = () => {
//     const onFinish = values => {
//       //Here will get form values
//       console.log('Received values of form:', values);
//     };

//     const dataStdSource = [
//       'Chotika Photipunya', 
//       'Kununya Detboriphan', 
//       'Padsanan Parikput',
//       'Supitcha Ratanatrimas', 
//       'VITAS JUN-URAIRAT',
//     ];

//     const dataTeacherSource = [
//       'Thapana Boonchoo',
//       'Kasidit Chanchio',
//       'Nuttanont Hongwarittorrn',
//       'Wirat Jareewongpaiboon',
//       'Pakorn Leesutthipornchai',
//       'Nutchakorn Ngamsaowaros',
//       'Sirikunya Nilpanich',
//       'Pranot Phasugcheewin',
//       'Monvorarat Pongpaiboon',
//       'Denduang Pradubsuwun',
//       'Wanida Putthividhya',
//       'Prapaporn Rattanatamrong',
//       'Songsak Rongviriyapanich',
//       'Wilawan Rukpakavong',
//       'Onjira Sithisak',
//       'Pokpong Songmuang',
//       'Nirun Subsomboon',
//       'Tanatorn Tanantong',
//       'Yaowadee Temtanapat',
//       'Saowaluk Watanapa',
//     ];
    
//   //   const classes = useStyles();
//   // const { addUser } = useContext(GlobalContext);
//   // const history = useHistory();

//   // const componentDidMount = () => {
//   //     axios.get('http://localhost:5000/group/')
//   //       .then(response => {
//   //         if (response.data.length > 0) {
//   //           this.setState({
//   //             // users: response.data.map(user => user.username),
//   //             // username: response.data[0].username
//   //           })
//   //         }
//   //       })
//   //       .catch((error) => {
//   //         console.log(error);
//   //       })}
//   const [userList, setuserList] = useState([]);
//   const [advisorList, setadvisorList] = useState([]);

//   const getUsername = () => {
//     axios.get("http://localhost:5001/username").then((respond) => {
//       setuserList(respond.data);
//       console.log(userList)
//     });
//   };

//   const getAdvisor = () => {
//     axios.get("http://localhost:5001/advisor").then((respond) => {
//       setadvisorList(respond.data);
//     });
//   };

//   let h = useHistory();
//   const [groupname, setGroupname] = useState("");
//   const [membername, setmembername] = useState("");
//   const [memberfirstname, setmemberFirstname] = useState("");
//   const [memberlastname, setmemberLastname] = useState("");
//   const [advisorname, setadvisorname] = useState("");
//   const [advisorfirstname, setadvisorFirstname] = useState("");
//   const [advisorlastname, setadvisorlastname] = useState("");

//   const [groupList, setgroupList] = useState([]);
//   const [groupList2, setgroupList2] = useState([]);

//   const changeGroup = () => {
//     const newUser = {
//       id: uuid(),
//       groupname,
//     };
//     // addUser(newUser);
//     // history.push("/group");
//     console.log(groupname);
//   };

//   const addGroup = () => {
//     axios
//       .post("http://localhost:5001/groups/add", {
//         groupname: groupname,
//         membername: membername,
//         memberfirstname: memberfirstname,
//         memberlastname: memberlastname,
//         advisorname: advisorname,
//         advisorfirstname: advisorfirstname,
//         advisorlastname: advisorlastname,
//       })
//       .then(() => {
//         setgroupList([
//           ...groupList,
//           {
//             groupname: groupname,
//             membername: membername,
//             memberfirstname: memberfirstname,
//             memberlastname: memberlastname,
//             advisorname: advisorname,
//             advisorfirstname: advisorfirstname,
//             advisorlastname: advisorlastname,
//           },
//         ]);
//       });
//   };

//   const addGroup2 = () => {
//     axios
//       .post("http://localhost:5001/groups/add2", {
//         groupname: groupname,
//         membername: membername,
//         advisorname: advisorname
       
//       })
//       .then(() => {
//         setgroupList2([
//           ...groupList2,
//           {
//             groupname: groupname,
//             membername: membername,
//             advisorname: advisorname
//           },
//         ]);
//       });
//   };

//   console.log(membername);
  
  
//   useEffect(() => {
//     getUsername();
//     getAdvisor();
//   }, []);

//     return (
//       <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="on">
//         <h4 className="GroupName">Group Name</h4>
//         <TextField className="test"
//             name="group"
//             label="Group Name"
//             rules={[
//               {
//                 required: true,
//               },
//             ]}
//             onChange={(e)=>{
//               setGroupname(e.target.values)
//               console.log("sssss",groupname)
//             }}
//           >
//           <Input/>
//         </TextField>
        
//         <h4 className="Add-Member">Member</h4>
//         <Form.List name="usersMember">
//           {(fields, { add, remove }) => (
//             <>
//               {fields.map(field => (
//                 <Space key={field.key} style={{ display: 'flex', marginBottom: 0 }} align="baseline">
                  
//                   <Form.Item style={{ width: 250 }}
//                     {...field}
//                     name={[field.name, 'nameMember']}
//                     fieldKey={[field.fieldKey, 'nameMember']}
//                     rules={[{ required: true, message: 'Missing Name Member' }]}
//                     onChange={(e)=>{
//                       setmembername(prev=>[prev,field.name[0]])
//                     }}
//                   >
                   
//                     <AutoComplete

//                       style={{ width: 250 }}

//                       dataSource={userList.map(item=>{return item.name})}
//                       placeholder="Search Member"
//                       filterOption={(inputValue, option) => 
//                         option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
//                     />
//                   </Form.Item>

//                   <MinusCircleOutlined onClick={() => remove(field.name)} />
//                 </Space>
//               ))}
//               <Form.Item>
//                 <Button 
//                 className="button-addmem"
//                 type="dashed" 
//                 onClick={() => add()} 
//                 block icon={<PlusOutlined />}>
//                   Add Member
//                 </Button>
//               </Form.Item>
//             </>
//           )}
//         </Form.List>
            
//         <h4 className="Add-Advisor">Advisor</h4>
//         <Form.List name="usersAdvis">
//           {(fields2, { add, remove }) => (
//             <>
//               {fields2.map(field2 => (
//                 <Space key={field2.key} style={{ display: 'flex', marginBottom: 0 }} align="baseline">
                  
//                   <Form.Item style={{ width: 250 }}
//                     {...field2}
//                     name={[field2.name, 'nameAdvisor']}
//                     fieldKey={[field2.fieldKey, 'nameAdvisor']}
//                     rules={[{ required: true, message: 'Missing Advisor Name' }]}
//                     onChange={(e)=>{
//                       setadvisorname(prev=>[prev,field2.name[0]])
//                     }}
                   
//                   >
//                      <AutoComplete
//                       style={{ width: 250 }}
//                       dataSource={advisorList.map(item=>{return item.name})}
//                       placeholder="Search Advisor"
//                       filterOption={(inputValue, option) => 
//                         option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
//                     />
                   
//                   </Form.Item>
                  
//                   <MinusCircleOutlined onClick={() => remove(field2.name)} />
//                 </Space>
//               ))}
//               <Form.Item>
//                 <Button 
//                  className="button-addadv"
//                   type="dashed" 
//                   onClick={() => add()} block icon={<PlusOutlined />}>
//                   Add Advisor
//                 </Button>
//               </Form.Item>
//             </>
//           )}
//         </Form.List>
//         <Form.Item>
//           <Button  
//             className="buttonadd" 
//             type="primary" 
//             htmlType="submit" 
//             onClick={addGroup2}>
//             Submit
//           </Button>
//           <Button  className="buttoncancel" type="primary" htmlType="submit">
//             <Link to="/group">Cancel</Link>
//           </Button>

//         </Form.Item>
//         {/* <Form.Item>
//           <Button  className="buttoncancel" type="primary" htmlType="submit">
//             <Link to="/group">Cancel</Link>
//           </Button>
//         </Form.Item> */}
//       </Form>
//     );
//   };

//   return (
//     <div className="rightblockcreate">
//       <div className="blockwhitecreate">
//         <h1 className="TopnameCreate">Create Group</h1>
//         <hr className="hr-create"></hr>

//         <div className="container">
          
//           <Demo />
//         </div>
        
//       </div>
//     </div>
//   );
// }
// }
// export default BlockCreate;

import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { GlobalContext } from '../Context/GlobalState';
import { Row, Col } from 'react-bootstrap';
// import { Form ,FormGroup } from 'react-bootstrap';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
// import { Input } from '@material-ui/core';
import { notification, Space } from 'antd';
import { v4 as uuid } from 'uuid';
import {
    Form,
    FormGroup,
    Label,
    Input,
    // Button
} from 'reactstrap';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        }
    },
    button: {
        margin: theme.spacing(1),
        marginLeft: "48px",
        marginTop: "50px"
    },
    button2: {
        margin: theme.spacing(1),

        marginTop: "50px"
    }

}))

const openNotificationWithIcon = type => {
  notification[type]({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};

export const BlockCreate = () => {

    const classes = useStyles();

    const [name, setName] = useState('');
    const { addUser } = useContext(GlobalContext);
    const history = useHistory();

    const [inputNameGroup, setInputGroupName] = useState([
        { groupname: '' },
    ]);
    const [inputFields, setInputFields] = useState([
        { firstName: '', lastName: '' },
    ]);
    const [inputFields2, setInputFields2] = useState([
        { firstName: '', lastName: '' },
    ]);



    const onChange = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // history.push('/group');
        console.log("InputFields", inputNameGroup)
        console.log("InputFields", inputFields)
        console.log("InputFields", inputFields2)
    };

    const onSubmit = () => {
        const newUser = {
            id: uuid(),
            name
        }
        addUser(newUser);
        // history.push('/group');
        console.log("InputFields", inputNameGroup)
        console.log("InputFields", inputFields)
        console.log("InputFields", inputFields2)
    }

    //Group Name
    const handleChangeInput0 = (index0, event) => {
        const values0 = [...inputNameGroup];
        values0[index0][event.target.name] = event.target.value;
        setInputGroupName(values0);
    }


    // Member
    const handleChangeInput = (index, event) => {
        const values = [...inputFields];
        values[index][event.target.name] = event.target.value;
        setInputFields(values);
    }

    const handleRemoveFields = (index) => {
        const values = [...inputFields];
        values.splice(index, 1);
        setInputFields(values);
    }

    const handleAddFields = () => {
        setInputFields([...inputFields, { firstName: '', lastName: '' }])
    }

    //Advisor
    const handleChangeInput2 = (index2, event) => {
        const values2 = [...inputFields2];
        values2[index2][event.target.name] = event.target.value;
        setInputFields2(values2);
    }

    const handleRemoveFields2 = (index2) => {
        const values2 = [...inputFields2];
        values2.splice(index2, 1);
        setInputFields2(values2);
    }

    const handleAddFields2 = () => {
        setInputFields2([...inputFields2, { firstName: '', lastName: '' }])
    }

    return (
        <div className="rightblockcreate">

            <div className="blockwhitecreate">
                <h1 className="TopnameCreate">Create Group</h1>

                <hr className="hr-create"></hr>

                <Container>
                    <Form onSubmit={onSubmit}>
                        
                        <h4 className="projectTopicInform">Group Name</h4>
                        <div className="fieldmember" >
                            <TextField
                                type="text"
                                label="Enter Name"
                                variant="outlined"
                                value={inputNameGroup.name}
                                onChange={onChange}

                            />
                        </div>

                        {/* <h4 className="GroupName">Group Name</h4>
                <form className={classes.root}>
                    {inputNameGroup.map((inputNameGroup, index0) => (
                        <div className="fieldmember"  key={index0}>
                            <TextField onSubmit={handleSubmit}
                            name="groupname"
                            label="Group name"
                            variant="outlined"
                            // value={name} 
                            // onChange = {onChange}
                            value={inputNameGroup.groupname}
                            onChange={event => handleChangeInput0(index0, event)}
                            />
                        </div>
                    ))}
                </form> */}



                        <h4 className="projectTopicInform">Member</h4>

                        <form className={classes.root} onSubmit={handleSubmit}>
                            {inputFields.map((inputField, index) => (
                                <div className="fieldmember" key={index}>
                                    <TextField
                                        name="firstName"
                                        label="First Name"
                                        variant="outlined"
                                        value={inputField.firstName}
                                        onChange={event => handleChangeInput(index, event)}
                                    />
                                </div>
                            ))}



                        </form>



                        <h4 className="projectTopicInform">Advistor</h4>

                        <form className={classes.root} onSubmit={handleSubmit}>
                            {inputFields2.map((inputField2, index2) => (
                                <div className="fieldmember" key={index2}>
                                    <TextField
                                        name="firstName"
                                        label="First Name"
                                        variant="outlined"
                                        value2={inputField2.firstName2}
                                        onChange={event => handleChangeInput2(index2, event)}
                                    />
                                    
                                </div>
                            ))}

                        </form>
                        <Space>
                        <Button 
                         id="btn-create"
                         className={classes.button}
                         variant="outlined"
                         color="primary"
                         type="submit"
                         endIcon={<Icon>add</Icon>}
                        onClick={() => openNotificationWithIcon('success')}
                        
                        >Submit</Button>
                        
                      </Space>
                        {/* <Button
                            id="btn-create"
                            className={classes.button}
                            variant="outlined"
                            color="primary"
                            type="submit"
                            endIcon={<Icon>add</Icon>}
                        >Submit
                        </Button> */}

                        <Button id="btn-cancel"
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


                {/* <Button id="btn-create"
                    className={classes.button}
                    variant="outlined"
                    color="primary"
                    type="submit"
                    endIcon={<Icon>add</Icon>}
                    onClick={handleSubmit}
                > Create
                </Button>
                   
                <Button id="btn-cancel"
                    className={classes.button2}
                    variant="outlined"
                    color="primary"
                    type="submit"
                    endIcon={<Icon>close</Icon>}
                    onClick={handleSubmit}
                > 
                <Link to="/project">Cancel</Link>
                </Button> */}
            </div>
        </div>
    )
}
import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
//Incude antd modules, icon and style
import { Form, Input, Button, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";

class BlockCreate_Student2 extends React.Component{
  
  render(){
   
  const Demo = () => {
    const onFinish = values => {
      //Here will get form values
      console.log('Received values of form:', values);
    };
  
    return (
      <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
        {/* <h4 className="GroupName">Group Name</h4> */}
        <Form.Item className="test"
            name="group"
            label="Group Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
          <Input/>
        </Form.Item>
        
        <h4 className="Add-Member">Member</h4>
        <Form.List name="usersMember">
          {(fields, { add, remove }) => (
            <>
              {fields.map(field => (
                <Space key={field.key} style={{ display: 'flex', marginBottom: 0 }} align="baseline">
                  
                  <Form.Item
                    {...field}
                    name={[field.name, 'nameMember']}
                    fieldKey={[field.fieldKey, 'nameMember']}
                    rules={[{ required: true, message: 'Missing Name Member' }]}
                  >
                    <Input placeholder="Name Member " />
                  </Form.Item>
                  
                  <MinusCircleOutlined onClick={() => remove(field.name)} />
                </Space>
              ))}
              <Form.Item>
                <Button 
                className="button-addmem"
                type="dashed" 
                onClick={() => add()} 
                block icon={<PlusOutlined />}>
                  Add Member
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>

        <h4 className="Add-Advisor">Advisor</h4>
        <Form.List name="usersAdvis">
          {(fields2, { add, remove }) => (
            <>
              {fields2.map(field2 => (
                <Space key={field2.key} style={{ display: 'flex', marginBottom: 0 }} align="baseline">
                  
                  <Form.Item
                    {...field2}
                    name={[field2.name, 'nameAdvisor']}
                    fieldKey={[field2.fieldKey, 'nameAdvisor']}
                    rules={[{ required: true, message: 'Missing Advisor Name' }]}
                  >
                    
                    <Input placeholder="Name Advisor" />
                  </Form.Item>
                  {/* <Form.Item
                    {...field2}
                    name={[field2.name, 'lastnameAdvisor']}
                    fieldKey={[field2.fieldKey, 'lastnameAdvisor']}
                    rules={[{ required: true, message: 'Missing Advisor last name' }]}
                  >
                    <Input placeholder="Last Name" />
                  </Form.Item> */}
                  <MinusCircleOutlined onClick={() => remove(field2.name)} />
                </Space>
              ))}
              <Form.Item>
                <Button 
                 className="button-addadv"
                type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                  Add Advisor
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item>
          <Button  className="buttonadd" type="primary" htmlType="submit">
            Submit
          </Button>
          <Button  className="buttoncancel" type="primary" htmlType="submit">
            <Link to="/group2">Cancel</Link>
          </Button>

        </Form.Item>
      </Form>
    );
  };

  return (
    <div className="rightblockcreate">
      <div className="blockwhitecreate">
        <h1 className="TopnameCreate">Create Group</h1>
        <hr className="hr-create"></hr>

        <div className="container">
          
          <Demo />
        </div>
        
      </div>
    </div>
  );
}
}
export default BlockCreate_Student2;

// import React, { useState, useContext } from "react";
// import { Link, useHistory } from "react-router-dom";
// import { GlobalContext } from "../Context/GlobalState";
// import { Row, Col } from "react-bootstrap";
// // import { Form ,FormGroup } from 'react-bootstrap';
// import { makeStyles } from "@material-ui/core/styles";
// // import { Input } from '@material-ui/core';
// import { v4 as uuid } from "uuid";
// import Container from '@material-ui/core/Container';
// import Button from '@material-ui/core/Button';
// import axios from "axios";
// import Icon from '@material-ui/core/Icon';
// import TextField from '@material-ui/core/TextField';
// import IconButton from '@material-ui/core/IconButton';
// import {
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   // Button
// } from "reactstrap";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& .MuiTextField-root": {
//       margin: theme.spacing(1),
//     },
//   },
//   button: {
//     margin: theme.spacing(1),
//     marginLeft: "50px",
//     marginTop: "50px",
//   },
//   button2: {
//     margin: theme.spacing(1),

//     marginTop: "50px",
//   },
// }));

// export const BlockCreate = () => {
//   const classes = useStyles();
//   const { addUser } = useContext(GlobalContext);
//   const history = useHistory();

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
//   let h = useHistory();
//   const [groupname, setGroupname] = useState("");
//   const [memberfirstname, setmemberFirstname] = useState("");
//   const [memberlastname, setmemberLastname] = useState("");
//   const [advisorfirstname, setadvisorFirstname] = useState("");
//   const [advisorlastname, setadvisorlastname] = useState("");

//   const [groupList, setgroupList] = useState([]);

//   const changeGroup = () => {
//     const newUser = {
//       id: uuid(),
//       groupname
//     }
//     addUser(newUser);
//     history.push('/group');
//     console.log(groupname);
//   }

//   const addGroup = () => {
//     axios
//       .post("http://localhost:5000/group/add", {
//         groupname: groupname,
//         memberfirstname: memberfirstname,
//         memberlastname: memberlastname,
//         advisorfirstname: advisorfirstname,
//         advisorlastname: advisorlastname,
//       })
//       .then(() => {
//         setgroupList([
//           ...groupList,
//           {
//             groupname: groupname,
//             memberfirstname: memberfirstname,
//             memberlastname: memberlastname,
//             advisorfirstname: advisorfirstname,
//             advisorlastname: advisorlastname,
//           },
//         ]);
//       });
//   };
//   console.log(groupname);

//   return (
//     <div className="rightblockcreate">
//       <div className="blockwhitecreate">
//         <h1 className="TopnameCreate">Create Group</h1>
//         <hr className="hr-create"></hr>

//         <Container>
//           <Form onSubmit={changeGroup}>

//             <h4 className="GroupName">Group Name</h4>
//             <form className={classes.root}>
//               <div className="fieldmember">
//                 <TextField
//                   type="text"
//                   className="from-control"
//                   variant="outlined"
//                   label="Enter Group Name"
//                   onChange={(event) => {
//                     setGroupname(event.target.value);
//                   }}
//                 />
//               </div>
//             </form>

//             <h4 className="Add-Member">Member</h4>
//             <form className={classes.root}>
//               <div className="fieldmember">
//                 <TextField
//                   type="text"
//                   variant="outlined"
//                   className="from-control"
//                   label="Firstname Member"
//                   onChange={(event) => {
//                     setmemberFirstname(event.target.value);
//                   }}
//                 />
//                 <TextField
//                   type="text"
//                   variant="outlined"
//                   className="from-control"
//                   label="Lastname Member"
//                   onChange={(event) => {
//                     setmemberLastname(event.target.value);
//                   }}
//                 />
//               </div>
//             </form>
            
//             <h4 className="Add-Advisor">Advistor</h4>
//             <form className={classes.root}>
//               <div className="fieldmember">
//                 <TextField
//                   type="text"
//                   variant="outlined"
//                   className="from-control"
//                   label="Firstname Advisor"
//                   onChange={(event) => {
//                     setadvisorFirstname(event.target.value);
//                   }}
//                 />
//                 <TextField
//                   type="text"
//                   className="from-control"
//                   variant="outlined"
//                   label="Lastname Advisor"
//                   onChange={(event) => {
//                     setadvisorlastname(event.target.value);
//                   }}
//                 />
//               </div>
//             </form>
            


//             <Button
//               className="buttonadd"
//               onClick={addGroup}
//               color="primary"
//               type="submit"
//               variant="outlined"
//               endIcon={<Icon>add</Icon>}
//             >
//               Submit
//             </Button>

//             <Button id="btn-cancel"
//               className="buttoncancel"
//               variant="outlined"
//               color="primary"
//               type="submit"
//               endIcon={<Icon>close</Icon>}
//               // onClick={handleSubmit}
//             >
//               <Link to="/group">Cancel</Link>
//             </Button>
//           </Form>
//         </Container>
//       </div>
//     </div>
//   );
// };
import React, { Component,useState } from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import axios from "axios";
import "../Home.css";
import Home from "../Home";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import { browserHistory } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";

export const Signup = () => {
  const validate = Yup.object({
    username: Yup.string()
      .max(10, "Must be 10 characters")
      .required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
  });

  let history = useHistory();

  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);
   
  return (
    <Formik
      initialValues={{
        username: setUsername,
        password: setPassword,
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log("va", values.username);
        axios
          .post("http://localhost:5001/username/login", {
            username: values.username,
            password: values.password,
          })
          .then((response) => {
            console.log("React", response);
            if (response.data.type == "Student") {
              if (response.data.id == "6009610426") {
                history.push("/home");
              }else if (response.data.id == "6009650075") {
                history.push("/home2");}
              
            } else if (response.data.type == "Teacher") {
              history.push("/home_t");
            } else if (response.data.type == "Advisor") {
              history.push("/home_a");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }}
      
    >
      {(formik) => (
        <div className="formlogin">
          <h1 className="aa">Log in</h1>
          <Form>
            <TextField label="Username" name="username" type="text" />
            <TextField label="Password" name="password" type="password" />
            <button className="btn btn-primary mt-3" type="submit">
              Submit
            </button>
            <button className="btn btn-danger mt-3 ml-3" type="reset">
              Reset
            </button>
          </Form>
         
        </div>
      )}
      
    </Formik>
  );
};

// import React from "react";
// import { Form, Input, Button, Checkbox } from 'antd';


// export const Signup = () => {
//   const layout = {
//     labelCol: {
//       span: 8,
//     },
//     wrapperCol: {
//       span: 16,
//     },
//   };
//   const tailLayout = {
//     wrapperCol: {
//       offset: 8,
//       span: 16,
//     },
//   };
  
//   const Demo = () => {
//     const onFinish = (values) => {
//       console.log('Success:', values);
//     };
  
//     const onFinishFailed = (errorInfo) => {
//       console.log('Failed:', errorInfo);
//     };
  
//     return (
//       <Form
//         {...layout}
//         name="basic"
//         initialValues={{
//           remember: true,
//         }}
//         onFinish={onFinish}
//         onFinishFailed={onFinishFailed}
//       >
//         <Form.Item
//           label="Username"
//           name="username"
//           rules={[
//             {
//               required: true,
//               message: 'Please input your username!',
//             },
//           ]}
//         >
//           <Input />
//         </Form.Item>
  
//         <Form.Item
//           label="Password"
//           name="password"
//           rules={[
//             {
//               required: true,
//               message: 'Please input your password!',
//             },
//           ]}
//         >
//           <Input.Password />
//         </Form.Item>
  
//         <Form.Item {...tailLayout} name="remember" valuePropName="checked">
//           <Checkbox>Remember me</Checkbox>
//         </Form.Item>
  
//         <Form.Item {...tailLayout}>
//           <Button type="primary" htmlType="submit">
//             Submit
//           </Button>
//         </Form.Item>
//       </Form>
//     );
//   };

//   return (
    
//     <div>
//       <h1 className="aa">Log in</h1>
//               <Demo />
//       </div>
//   );
// }
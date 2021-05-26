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
        <div>
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

// const schema = Yup.object().shape({
//   username: Yup.string()
//     .max(10, 'Must be 10 characters')
//     .required('Required'),
//   password: Yup.string()
//     .min(6, 'Password must be at least 6 charaters')
//     .required('Password is required'),
// });

// class Signup extends React.Component {

//     validate = Yup.object({
//     username: Yup.string()
//       .max(10, 'Must be 10 characters')
//       .required('Required'),
//     password: Yup.string()
//       .min(6, 'Password must be at least 6 charaters')
//       .required('Password is required'),
//       posts: []
//   })

//   // constructor(props) {
//   //   super(props);

//   // }

//   // componentDidMount() {
//   //   axios.get('http://localhost:5000/username/')
//   //   .then((response) => {
//   //        console.log(response);
//   //       const data = response.data ;
//   //       this.setState({post:data});
//   //       console.log("data has been recived");
//   //       console.log(response.data[0].id);

//   //       })
//   //   .catch((error) => {
//   //     console.log(error);
//   //   });
//   // }
//   handleusernameChange: function(e) {
//     this.setState({username: e.target.value});
//  },
//  handlePasswordChange: function(e) {
//     this.setState({password: e.target.value});
//  },

//  handleLogin: function() {
//      console.log("EMail: " + this.state.email);
//      console.log("Password: " + this.state.password);
//  }

//   render() {
//     return (
//       <Formik
//         initialValues={{
//           username: '',
//           password: '',
//         }}
//         validationSchema={schema}
//         onSubmit={values => {
//           console.log(values)
//         }}
//       >
//         {formik => (
//           <div>
//             <h1 className="aa">Log in</h1>
//             <Form>
//               <TextField label="Username" name="username" type="text" />
//               <TextField label="Password" name="password" type="password" />
//               <button onclick={this.componentDidMount} className="btn btn-primary mt-3" type="submit">Submit</button>
//               <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
//             </Form>
//           </div>
//         )}
//       </Formik>
//     );
//   }
// }

// export default Signup;

// export const Signup = () => {
//   const validate = Yup.object({
//     username: Yup.string()
//       .max(10, 'Must be 10 characters')
//       .required('Required'),
//     password: Yup.string()
//       .min(6, 'Password must be at least 6 charaters')
//       .required('Password is required'),

//   })

//   componentDidMount() {
//     const parameter ={"username":'SS',"password":'CXCX'};
//   axios.post('http://localhost:3000/',parameter).then(res=>{
//     console.log(res.data);
//   })
//   }
//   return (
//     <Formik
//       initialValues={{
//         username: '',
//         password: '',
//       }}
//       validationSchema={validate}
//       onSubmit={values => {
//         console.log(values)
//       }}
//     >
//       {formik=> (
//         <div>
//           <h1 className="aa">Log in</h1>
//           <Form>
//             <TextField label="Username" name="username" type="text" />
//             <TextField label="Password" name="password" type="password" />
//             <button className="btn btn-primary mt-3" type="submit">Submit</button>
//             <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
//           </Form>
//         </div>
//       )}
//     </Formik>
//   )

// }
// export default Signup;

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
//Incude antd modules, icon and style
import { Form, Input, Button, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";

import { AutoComplete } from 'antd';


class BlockCreate extends React.Component{
  
  render(){
   
  const Demo = () => {
    const onFinish = values => {
      //Here will get form values
      console.log('Received values of form:', values);
    };

    const dataStdSource = [
      'Chotika Photipunya', 
      'Kununya Detboriphan', 
      'Padsanan Parikput',
      'Supitcha Ratanatrimas', 
      'VITAS JUN-URAIRAT',
    ];

    const dataTeacherSource = [
      'Thapana Boonchoo',
      'Kasidit Chanchio',
      'Nuttanont Hongwarittorrn',
      'Wirat Jareewongpaiboon',
      'Pakorn Leesutthipornchai',
      'Nutchakorn Ngamsaowaros',
      'Sirikunya Nilpanich',
      'Pranot Phasugcheewin',
      'Monvorarat Pongpaiboon',
      'Denduang Pradubsuwun',
      'Wanida Putthividhya',
      'Prapaporn Rattanatamrong',
      'Songsak Rongviriyapanich',
      'Wilawan Rukpakavong',
      'Onjira Sithisak',
      'Pokpong Songmuang',
      'Nirun Subsomboon',
      'Tanatorn Tanantong',
      'Yaowadee Temtanapat',
      'Saowaluk Watanapa',
    ];
    
    const classes = useStyles();
  const { addUser } = useContext(GlobalContext);
  const history = useHistory();

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
  const [userList, setuserList] = useState([]);

  const getUsername = () => {
    axios.get("http://localhost:5001/username").then((respond) => {
      setuserList(respond.data);
      console.log(userList)
    });
  };

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
      groupname,
    };
    addUser(newUser);
    history.push("/group");
    console.log(groupname);
  };

  const addGroup = () => {
    axios
      .post("http://localhost:5001/groups/add", {
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
  useEffect(() => {
    getUsername();
    
  }, []);

    return (
      <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="on">
        {/* <h4 className="GroupName">Group Name</h4> */}
        <Form.Item className="test"
            name="group"
            label="Group Name"
            rules={[
              {
                required: true,
              },
            ]}
            disabled
          >
          <Input/>
        </Form.Item>
        
        <h4 className="Add-Member">Member</h4>
        <Form.List name="usersMember">
          {(fields, { add, remove }) => (
            <>
              {fields.map(field => (
                <Space key={field.key} style={{ display: 'flex', marginBottom: 0 }} align="baseline">
                  
                  <Form.Item style={{ width: 250 }}
                    {...field}
                    name={[field.name, 'nameMember']}
                    fieldKey={[field.fieldKey, 'nameMember']}
                    rules={[{ required: true, message: 'Missing Name Member' }]}
                  >
                   
                    <AutoComplete
                      style={{ width: 200 }}
                      dataSource={dataStdSource}
                      placeholder="Search Member"
                      filterOption={(inputValue, option) => 
                        option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                    />
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
                     <AutoComplete
                      style={{ width: 200 }}
                      dataSource={dataTeacherSource}
                      placeholder="Search Advisor"
                      filterOption={(inputValue, option) => 
                        option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                    />
                   
                  </Form.Item>
                  
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
            <Link to="/group">Cancel</Link>
          </Button>

        </Form.Item>
        {/* <Form.Item>
          <Button  className="buttoncancel" type="primary" htmlType="submit">
            <Link to="/group">Cancel</Link>
          </Button>
        </Form.Item> */}
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
export default BlockCreate;





  


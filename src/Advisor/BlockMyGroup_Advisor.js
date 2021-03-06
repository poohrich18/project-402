import React from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { Row } from 'react-bootstrap';
import pooh2 from '../assets/pooh2.jpg';
import praew1 from '../assets/praew1.jpg';
import sweetmango from '../assets/sweetmango.png';
import Modal from 'react-modal';
import Divider from "@material-ui/core/Divider";
import FormControl from "react-bootstrap/FormControl";
import { Form , Input , Space } from 'antd';
import TextField from "@material-ui/core/TextField";
import { AutoComplete } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
export const BlockMyGroup_Advisor = () => {
    const [modalPickUpIsOpen, setModalPickUpIsOpen] = useState(false);
    return (
        <div className="rightblocktask">
            <div className="blockwhitetask">
                <h1 className="Topname-mygroup">My Group</h1>
                <hr className="hr-mygroup"></hr>
                
                {/* <span className="name-mygroup">
                    groupname (คลิกแล้วแสดงชื่อกลุ่มที่คลิกเข้ามา)
                </span> */}
                
                <Row className="blockmem-img">
                    <span className="manypeople">Member(3)</span>
                    <span><img className="pichome" src={pooh2} alt=""/></span>
                    <span><img className="picpro" src={praew1} alt=""/></span>
                    <span><img className="picpro" src={sweetmango} alt=""/></span>
                    <span>
                <Button
                    id="btn-addproject"
                    className="buttonaddmem"
                    variant="outlined"
                    color="primary"
                    type="submit"
                    // endIcon={<Icon>add</Icon>}
                    onClick={() => setModalPickUpIsOpen(true)}
                >
                    Edit
                    
                </Button>
                
                </span>
                <span>
                <Button
                    id="btn-addproject"
                    className="buttonleave"
                    variant="outlined"
                    color="primary"
                    type="submit"
                    // endIcon={<Icon>add</Icon>}
                >
                    <Link to="/home_a">Leave Group</Link>
                </Button>
                </span>
                
                </Row>

                <div className="blockinblock">
                <form>
                    <div class="form-group">
                        
                    </div>
                    </form>
                </div>
                
                
                    <Modal isOpen={modalPickUpIsOpen}>
                        <div id='layout-text-modal-ReceiveStaffEdit'>
                            <h1 className="Topname-mygroup">Edit Group</h1>
                            <hr className="hr-mygroup"></hr> 
                        </div>

                        <h4 className="GroupName">Group Name</h4>
                        <TextField className="test"
                            name="group"
                            label="Group Name"
                            rules={[
                            {
                                required: true,
                            },
                            ]}
                            // onChange={(e)=>{
                            // setGroupname(e.target.values)
                            // console.log("sssss",groupname)
                            // }}
                        >
                        <Input/>
                        </TextField>
                        
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
                    // onChange={(e)=>{
                    //   setmembername(prev=>[prev,field.name[0]])
                    // }}
                  >
                   
                    <AutoComplete
                      style={{ width: 250 }}
                    //   dataSource={userList.map(item=>{return item.name})}
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
                  
                  <Form.Item style={{ width: 250 }}
                    {...field2}
                    name={[field2.name, 'nameAdvisor']}
                    fieldKey={[field2.fieldKey, 'nameAdvisor']}
                    rules={[{ required: true, message: 'Missing Advisor Name' }]}
                    // onChange={(e)=>{
                    //   setadvisorname(prev=>[prev,field2.name[0]])
                    // }}
                   
                  >
                     <AutoComplete
                      style={{ width: 250 }}
                    //   dataSource={advisorList.map(item=>{return item.name})}
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
                  type="dashed" 
                  onClick={() => add()} block icon={<PlusOutlined />}>
                  Add Advisor
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
                        <Form.Item>
                            <Button  
                               
                                className="button-edit-ok"
                                variant="outlined"
                                color="primary"
                                type="submit"
                                >
                                Submit
                            </Button>
                            <Button  
                                className="button-editcancel" 
                                // className="buttonleave"
                                variant="outlined"
                                color="primary"
                                type="submit"
                             onClick={() => setModalPickUpIsOpen(false)}>Cancel
                           
                            </Button>

                        </Form.Item>
                    </Modal>
                

            </div>
        </div>
    )
}

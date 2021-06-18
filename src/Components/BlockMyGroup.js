import React from 'react';
import ReactDOM from 'react-dom';
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
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

export const BlockMyGroup = () => {
    const [modalPickUpIsOpen, setModalPickUpIsOpen] = useState(false);
    const { Dragger } = Upload;

    const props = {
      name: 'file',
      multiple: true,
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (status === 'done') {
          message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
      onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
      },
    };

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
                  > Edit  
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
                      <Link to="/create">Leave Group</Link>
                  </Button>
                </span>
                
                </Row>

                <div className="blockinblock">
                  <form>
                    <div class="form-group">
                        <Dragger {...props}>
                          <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                          </p>
                          <p className="ant-upload-text">Click or drag file to this area to upload</p>
                          <p className="ant-upload-hint">
                            Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                            band files
                          </p>
                        </Dragger>
                    </div>
                  </form>
                </div>
                
                
                <Modal 
                  // className="modalpopup"
                  isOpen={modalPickUpIsOpen}>
                  <div id='layout-text-modal-ReceiveStaffEdit'>
                      <h1 className="Topname-mygroup">Edit Group</h1>
                      <hr className="hr-mygroup"></hr> 

                      
                  </div>

                  <h4 className="projectTopicInform">Group Name</h4>
                  <div className="fieldmember">
                    <TextField
                      id="outlined-full-width"
                      label="Enter Name"
                      style={{ marginTop: 10, marginLeft: 8, width: 500}}
                      placeholder="Enter Name"
                      variant="outlined"
                      // onChange={(event) => {
                      //   setGroupname(event.target.value);
                      // }}
                    />
                  </div>

                  <h4 className="projectTopicInform">Member</h4>
                  <div className="fieldmember">
                    <TextField
                      id="outlined-full-width"
                      label="Member Name"
                      style={{ marginTop: 10, marginLeft: 8, width: 500}}
                      placeholder="Member Name"
                      variant="outlined"
                      // onChange={(event) => {
                      //   setmembername(event.target.value);
                      // }}
                    />
                  </div>

                  <h4 className="projectTopicInform">Advisor</h4>
                  <div className="fieldmember">
                    <TextField
                      id="outlined-full-width"
                      label="Advisor Name"
                      style={{ marginTop: 10, marginLeft: 8, width: 500 }}
                      placeholder="Advisor Name"
                      variant="outlined"
                      // onChange={(event) => {
                      //   setadvisorname(event.target.value);
                      // }}
                    />
                  </div>
                    
                    
                      <Button  
                        className="button-edit-ok"
                        variant="outlined"
                        color="primary"
                        type="submit"
                      >Edit
                      </Button>
                      
                      <Button  
                        className="button-editcancel"
                        variant="outlined"
                        color="primary"
                        type="submit"
                        // endIcon={<Icon>close</Icon>}
                        onClick={() => setModalPickUpIsOpen(false)}>Cancel
                      </Button>

                    
                </Modal>
            </div>
        </div>
    )
}

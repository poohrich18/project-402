import * as React from 'react';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "@material-ui/core/Button";
import { Form, DatePicker ,Space , Dropdown, Menu , message , Row, Col} from 'antd';
import "antd/dist/antd.css";
import AddIcon from '@material-ui/icons/Add';
import { Checkbox } from 'antd';
import Icon from "@material-ui/core/Icon";
import { Table} from 'antd';
import { Link } from "react-router-dom";
import { DownOutlined, UserOutlined } from '@ant-design/icons';
export const BlockCreateSchedule = () => {
  const [modalPickUpIsOpen, setModalPickUpIsOpen] = useState(false);
   
    const { RangePicker } = DatePicker;
    const formItemLayout = {
          labelCol: {
            xs: {
              span: 24,
            },
            sm: {
              span: 8,
            },
          },
          wrapperCol: {
            xs: {
              span: 24,
            },
            sm: {
              span: 16,
            },
          },
    };
        
    const rangeConfig = {
          rules: [
            {
              type: 'array',
              required: true,
              message: 'Please select time!',
            },
          ],
    };

        
    const onFinish = (fieldsValue) => {
            // Should format date value before submit.
            const rangeValue = fieldsValue['range-picker'];
            // const timeValue = fieldsValue['time-picker'];
            // const testValue = fieldsValue['test'];
           
            const values = {
              ...fieldsValue,
              // 'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
              'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],

            };
            //Getting input values
            console.log('Received values of form: ', values);

           
            
    };

    // const plainOptions = [
    //     '08:00 - 09:30', 
    //     '09:30 - 11:00', 
    //     '11:00 - 12:30',
    //     '13:30 - 15:00', 
    //     '15:00 - 16:30', 
    //     '16:30 - 18:00',
    // ];

    function onChange(checkedValues) {
        console.log('checked = ', checkedValues);
      }
   
    return (

        <div className="rightblock_Schedule">
            <div className="blockwhite_Schedule">
                <h1 className="Topname_Schedule">Create Schedule</h1>
                <hr className="hr-Schedule"></hr>

                <div className="container-time" >
                   
                    <Form name="time_related_controls" {...formItemLayout} onFinish={onFinish}>
                
                      <h5 className="range">Range Picker</h5>

                      <Form.Item name="range-picker"  {...rangeConfig}>
                            <RangePicker />
                      </Form.Item>
                        

                      <hr className="hr-Schedule"></hr>

                      <Row>
                        <span>
                          <h5 className="slot">Time Slot</h5>
                        </span>
                        
                        <span className="buttonaddslot">
                          <Button
                              // id="btn-addproject"
                              className="buttonaddslott"
                              variant="outlined"
                              color="primary"
                              type="submit"
                              startIcon={<Icon>add</Icon>}
                              // startIcon={<AddIcon/>}
                              // onClick={() => setModalPickUpIsOpen(true)}
                            > Add Time  
                          </Button>
                        </span>
                      </Row>  
                        
                        <div>
                          <Checkbox.Group onChange={onChange}>

                            <div className="timeslot1">
                                {/* <input className="checkboxsize" type="checkbox" />
                                <p className="time1">08.00 - 09.30</p> */}
                                <Checkbox value="A">08.00 - 09.30</Checkbox>
                            </div>
                            <div className="timeslot1">
                                {/* <input className="checkboxsize" type="checkbox" />
                                <p className="time1">08.00 - 09.30</p> */}
                                <Checkbox value="B">09:30 - 11:00</Checkbox>
                            </div>
                            <div className="timeslot1">
                                {/* <input className="checkboxsize" type="checkbox" />
                                <p className="time1">08.00 - 09.30</p> */}
                                <Checkbox value="C">11:00 - 12:30</Checkbox>
                            </div>
                            <div className="timeslot1">
                                {/* <input className="checkboxsize" type="checkbox" />
                                <p className="time1">08.00 - 09.30</p> */}
                                <Checkbox value="D">13:30 - 15:00</Checkbox>
                            </div>
                          

                          
                          </Checkbox.Group>
                        </div>

                        <Button
                // id="btn-create"
                className="buttonadd"
                variant="outlined"
                color="primary"
                type="submit"
                // onClick={addGroup2}
                endIcon={<Icon>add</Icon>}
              >
                Submit
              </Button>

              <Button
                // id="btn-cancel"
                className="buttoncancel"
                variant="outlined"
                color="primary"
                type="submit"
                endIcon={<Icon>close</Icon>}

                // onClick={handleSubmit}
              >
                <Link to="/home_a">Cancel</Link>
              </Button>
                        {/* <Form.Item >
                        <Button
                        // id="btn-create"
                        className="btnsubmitSchedule"
                        variant="outlined"
                        color="primary"
                        type="submit"
                       
                        // onClick={addGroup2}
                        // endIcon={<Icon>add</Icon>}
                      >
                        Submit
                      </Button>

                      <Button
                        // id="btn-cancel"
                        className="button456"
                        variant="outlined"
                        color="primary"
                        type="submit"
                       
                      >Cancel
                        
                      </Button>
                      </Form.Item> */}
                        
                        {/* <Checkbox.Group options={plainOptions} onChange={onChange} /> */}
                    </Form>

                </div>
            </div>
        </div>
    )
  }
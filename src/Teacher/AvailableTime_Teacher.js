import React from 'react'
import { Row, Col } from "react-bootstrap";
import "../AvailableTime.css";
import Sidebar_Teacher from "../Teacher/Sidebar_Teacher";
import Button from "@material-ui/core/Button";
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Icon from "@material-ui/core/Icon";
import {
    Form,
    // Button
  } from "reactstrap";
  import { Checkbox } from 'antd';
export const AvailableTime_Teacher = () => {

    function onChange(checkedValues) {
        console.log('checked = ', checkedValues);
        }

    return (
        <Row className="content">
            <Col>
                <Sidebar_Teacher/>
            </Col>

            <Col>
                <div className="rightblock_AvailableTime">
                    <div className="blockwhite_AvailableTime">
                        <h1 className="Topname_AvailableTime">Available Time</h1>
                        <hr className="hr-AvailableTime"></hr>
                        
                        {/* <div className="topictime">
                        <p>นักศึกษาโปรดทราบ</p>
                        <p>1. นักศึกษาทุกคนที่ลงทะเบียนวิชา CS401 และ CS402 ในภาคเรียนที่ 2 ปีการศึกษา 2563 ต้องแจ้งตารางสอบปลายภาคของตนเอง ภายในวันที่ 26 เมษายน 2564</p>
                        <p>2. เพื่อให้การจัดตารางสอบ Oral Exam วิชา CS401 และ CS402 ในภาคเรียนที่ 2 ปีการศึกษา 2563 เป็นไปอย่างเรียบร้อย</p>
                        </div> */}
                        
                        <div>
                          <Checkbox.Group onChange={onChange}>
                            
                            <span className="timeslot11">
                                <p className="y">25 พฤษภาคม 2564</p>
                                <Checkbox value="A1">08.00 - 09.30</Checkbox>
                                <Checkbox value="B1">09.30 - 11.00</Checkbox>
                                <Checkbox value="C1">11.00 - 12.30</Checkbox>
                                <Checkbox value="D1">13.30 - 15.00</Checkbox>
                                <Checkbox value="E1">15.00 - 16.30</Checkbox>
                                <Checkbox value="F1">16.30 - 18.00</Checkbox>
                            </span>

                            <span className="timeslot11">
                                <p className="y">26 พฤษภาคม 2564</p>
                                <Checkbox value="A2">08.00 - 09.30</Checkbox>
                                <Checkbox value="B2">09.30 - 11.00</Checkbox>
                                <Checkbox value="C2">11.00 - 12.30</Checkbox>
                                <Checkbox value="D2">13.30 - 15.00</Checkbox>
                                <Checkbox value="E2">15.00 - 16.30</Checkbox>
                                <Checkbox value="F2">16.30 - 18.00</Checkbox>
                            </span>

                            <span className="timeslot11">
                                <p className="y">27 พฤษภาคม 2564</p>
                                <Checkbox value="A3">08.00 - 09.30</Checkbox>
                                <Checkbox value="B3">09.30 - 11.00</Checkbox>
                                <Checkbox value="C3">11.00 - 12.30</Checkbox>
                                <Checkbox value="D3">13.30 - 15.00</Checkbox>
                                <Checkbox value="E3">15.00 - 16.30</Checkbox>
                                <Checkbox value="F3">16.30 - 18.00</Checkbox>
                            </span>

                            <span className="timeslot11">
                                <p className="y">28 พฤษภาคม 2564</p>
                                <Checkbox value="A4">08.00 - 09.30</Checkbox>
                                <Checkbox value="B4">09.30 - 11.00</Checkbox>
                                <Checkbox value="C4">11.00 - 12.30</Checkbox>
                                <Checkbox value="D4">13.30 - 15.00</Checkbox>
                                <Checkbox value="E4">15.00 - 16.30</Checkbox>
                                <Checkbox value="F4">16.30 - 18.00</Checkbox>
                            </span>

                            <span className="timeslot11">
                                <p className="y">29 พฤษภาคม 2564</p>
                                <Checkbox value="A5">08.00 - 09.30</Checkbox>
                                <Checkbox value="B5">09.30 - 11.00</Checkbox>
                                <Checkbox value="C5">11.00 - 12.30</Checkbox>
                                <Checkbox value="D5">13.30 - 15.00</Checkbox>
                                <Checkbox value="E5">15.00 - 16.30</Checkbox>
                                <Checkbox value="F5">16.30 - 18.00</Checkbox>
                            </span>

                            <span className="timeslot11">
                                <p className="y">30 พฤษภาคม 2564</p>
                                <Checkbox value="A6">08.00 - 09.30</Checkbox>
                                <Checkbox value="B6">09.30 - 11.00</Checkbox>
                                <Checkbox value="C6">11.00 - 12.30</Checkbox>
                                <Checkbox value="D6">13.30 - 15.00</Checkbox>
                                <Checkbox value="E6">15.00 - 16.30</Checkbox>
                                <Checkbox value="F6">16.30 - 18.00</Checkbox>
                            </span>
                            
                            <TextField
                                id="outlined-full-width"
                                label="ข้อมูลเพิ่มเติม"
                                style={{ marginTop: 10, width: 500 , marginBottom:10}}
                                placeholder="Placeholder"
                                variant="outlined"
                                
                            />
                            
                          </Checkbox.Group>

                          
                        </div>

                        

                        <Button
                                // id="btn-create"
                                className="button000"
                                // onClick={addProject}
                                variant="outlined"
                                color="primary"
                                type="submit"
                                
                                endIcon={<Icon>add</Icon>}
                            >
                                Submit
                            </Button>

                            <Button
                                // id="btn-cancel"
                                className="button456"
                                variant="outlined"
                                color="primary"
                                type="submit"
                                endIcon={<Icon>close</Icon>}
                            
                                // onClick={handleSubmit}
                            >
                                <Link to="/home_t">Cancel</Link>
                            </Button>
                    
                    </div>
                </div>
            </Col>
        </Row>
    )
}

import React from 'react'
import { Row, Col } from "react-bootstrap";
import "../AvailableTime.css";
import Sidebar_Student2 from "../Student2/Sidebar_Student2";
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

  
export const AvailableTime_2 = () => {
    function onChange(checkedValues) {
        console.log('checked = ', checkedValues);
        }
    return (
        <Row className="content">
            <Col>
                <Sidebar_Student2/>
            </Col>

            <Col>
                <div className="rightblock_AvailableTime">
                    <div className="blockwhite_AvailableTime">
                        <h1 className="Topname_AvailableTime">Available Time</h1>
                        <hr className="hr-AvailableTime"></hr>
                        
                        <div className="topictime">
                        <p>นักศึกษาโปรดทราบ</p>
                        <p>1. นักศึกษาทุกคนที่ลงทะเบียนวิชา CS401 และ CS402 ในภาคเรียนที่ 2 ปีการศึกษา 2563 ต้องแจ้งตารางสอบปลายภาคของตนเอง ภายในวันที่ 26 เมษายน 2564</p>
                        <p>2. เพื่อให้การจัดตารางสอบ Oral Exam วิชา CS401 และ CS402 ในภาคเรียนที่ 2 ปีการศึกษา 2563 เป็นไปอย่างเรียบร้อย</p>
                        </div>
                        
                        <Form className="formexam">
                            <div className="examday">
                                <span className="examdate1">
                                    วันจันทร์ที่ 24 พฤษภาคม 2564
                                </span>
                                
                            <Checkbox.Group className="checkgroup"
                                style={{ width: '100%' , marginLeft: '30px' }} onChange={onChange}>
                                <Row className="rowtimecheck">
                                
                                    <Checkbox value="slottime1">08:00 - 09:30</Checkbox>
                                
                                
                                    <Checkbox value="slottime2">09:30 - 11:00</Checkbox>
                             
                               
                                    <Checkbox value="slottime3">11:00 - 12:30</Checkbox>
                               
                               
                                    <Checkbox value="slottime4">13:00 - 15:00</Checkbox>
                                
                                    <Checkbox value="slottime5">15:00 - 16:30</Checkbox>

                                    <Checkbox value="slottime6">16:30 - 18:00</Checkbox>
                                
                                </Row>
                            </Checkbox.Group>
                                
                            </div>

                            <div className="examday">
                                <span className="examdate1">
                                    วันอังคารที่ 25 พฤษภาคม 2564
                                </span>
                                
                                <Checkbox.Group className="checkgroup"
                                    style={{ width: '100%' , marginLeft: '30px' }} onChange={onChange}>
                                <Row className="rowtimecheck">
                                
                                    <Checkbox value="slottime1">08:00 - 09:30</Checkbox>
                                
                                
                                    <Checkbox value="slottime2">09:30 - 11:00</Checkbox>
                             
                               
                                    <Checkbox value="slottime3">11:00 - 12:30</Checkbox>
                               
                               
                                    <Checkbox value="slottime4">13:00 - 15:00</Checkbox>
                                
                                    <Checkbox value="slottime5">15:00 - 16:30</Checkbox>

                                    <Checkbox value="slottime6">16:30 - 18:00</Checkbox>
                                
                                </Row>
                            </Checkbox.Group>
                                
                            </div>

                            <div className="examday">
                                <span className="examdate1">
                                    วันพุธที่ 26 พฤษภาคม 2564
                                </span>
                                
                                <Checkbox.Group className="checkgroup"
                                style={{ width: '100%' , marginLeft: '30px' }} onChange={onChange}>
                                <Row className="rowtimecheck">
                                
                                    <Checkbox value="slottime1">08:00 - 09:30</Checkbox>
                                
                                
                                    <Checkbox value="slottime2">09:30 - 11:00</Checkbox>
                             
                               
                                    <Checkbox value="slottime3">11:00 - 12:30</Checkbox>
                               
                               
                                    <Checkbox value="slottime4">13:00 - 15:00</Checkbox>
                                
                                    <Checkbox value="slottime5">15:00 - 16:30</Checkbox>

                                    <Checkbox value="slottime6">16:30 - 18:00</Checkbox>
                                
                                </Row>
                            </Checkbox.Group>
                                
                            </div>

                            <div className="examday">
                                <span className="examdate1">
                                    วันพฤหัสบดีที่ 27 พฤษภาคม 2564
                                </span>
                                
                                <Checkbox.Group className="checkgroup"
                                style={{ width: '100%' , marginLeft: '30px' }} onChange={onChange}>
                                <Row className="rowtimecheck">
                                
                                    <Checkbox value="slottime1">08:00 - 09:30</Checkbox>
                                
                                
                                    <Checkbox value="slottime2">09:30 - 11:00</Checkbox>
                             
                               
                                    <Checkbox value="slottime3">11:00 - 12:30</Checkbox>
                               
                               
                                    <Checkbox value="slottime4">13:00 - 15:00</Checkbox>
                                
                                    <Checkbox value="slottime5">15:00 - 16:30</Checkbox>

                                    <Checkbox value="slottime6">16:30 - 18:00</Checkbox>
                                
                                </Row>
                            </Checkbox.Group>
                                
                            </div>

                            <div className="examday">
                                <span className="examdate1">
                                    วันศุกร์ที่ 28 พฤษภาคม 2564
                                </span>
                                
                                <Checkbox.Group className="checkgroup"
                                style={{ width: '100%' , marginLeft: '30px' }} onChange={onChange}>
                                <Row className="rowtimecheck">
                                
                                    <Checkbox value="slottime1">08:00 - 09:30</Checkbox>
                                
                                
                                    <Checkbox value="slottime2">09:30 - 11:00</Checkbox>
                             
                               
                                    <Checkbox value="slottime3">11:00 - 12:30</Checkbox>
                               
                               
                                    <Checkbox value="slottime4">13:00 - 15:00</Checkbox>
                                
                                    <Checkbox value="slottime5">15:00 - 16:30</Checkbox>

                                    <Checkbox value="slottime6">16:30 - 18:00</Checkbox>
                                
                                </Row>
                            </Checkbox.Group>
                                
                            </div>


                            <TextField
                                id="outlined-full-width"
                                label="ข้อมูลเพิ่มเติม"
                                style={{ marginTop: 20, marginLeft: 48, width: 500 }}
                                placeholder="Placeholder"
                                variant="outlined"
                                
                            />

                            
                        </Form>

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
                                <Link to="/home2">Cancel</Link>
                            </Button>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

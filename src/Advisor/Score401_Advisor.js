import React from 'react'
import { Row, Col } from "react-bootstrap";
// import Sidebar_Teacher from "./Sidebar_Teacher";
import "../Score.css";
import { TextField } from '@material-ui/core';
import { Input } from 'antd';
import Sidebar_Advisor from './Sidebar_Advisor';
import { Select } from 'antd';
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
const { Option } = Select;

const { TextArea } = Input;



export const Score401_Advisor = () => {
    return (
        <Row className="content">
            <Col>
                <Sidebar_Advisor/>
            </Col>

            <div className="rightblock_Score">
                <div className="blockwhite_Score">
                    {/* <h1 className="Topname_Score">Score</h1>
                    <hr className="hr-Score"></hr> */}

                    <div className="blockscore">
                        <p className="หัวข้อใบประเมินคะแนน">ใบรายงานผลคะแนน วิชา CS401 โครงงานพิเศษ 1 ภาคเรียนที่ 1/2563</p>
                    </div>

                    <div className="blockscore1">
                        <Row className="block1row">

                            <span className="block1col1">
                                อาจารย์ผู้ประเมิน:
                            </span>

                            
                            <span className="block1col2">
                                nng
                            </span>

                            <span className="block1col3">
                                อาจารย์ นุชชากร งามเสาวรส
                            </span>
                        </Row>

                        <Row className="block2row">

                            <span className="block2col1">
                                กลุ่มโครงงาน:
                            </span>


                            <span className="block2col2">
                                {/* 36_nng-m2 */}
                                <Select
                                    showSearch
                                    style={{ width: 150 , textAlign: "center"}}
                                    placeholder="Select ProjCode"
                                    optionFilterProp="children"
                                    // onChange={onChange}
                                    // onFocus={onFocus}
                                    // onBlur={onBlur}
                                    // onSearch={onSearch}
                                    // filterOption={(input, option) =>
                                    // option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    // }
                                >
                                    <Option value="team1">01_scw_r2</Option>
                                    <Option value="team2">02_scw_r2</Option>
                                    <Option value="team36">36_nng_m2</Option>
                                 </Select>
                            </span>

                            <span className="block2col3">
                                ระบบบริหารจัดการโครงงานพิเศษ 1 และ โครงงานพิเศษ 2
                            {/* <Input 
                                // className="inputscoreStd1_row1"
                                style={{ width: 760 }}
                                // bordered={false}
                                placeholder="ระบบบริหารจัดการโครงงานพิเศษ 1 และ โครงงานพิเศษ 2" />
                                 */}
                            </span>
                        </Row>

                        
                        <Row className="block3row">

                            <span className="block3col3">
                                ADMINISTRATIVE SYSTEM FOR SPECIAL PROJECT 1 AND SPECIAL PROJECT 2
                            </span>
                        </Row>

                        <Row className="block4row">
                            <span className="block4col1">
                                อาจารย์ที่ปรึกษา:
                            </span>


                            <span className="block4col2">
                                nng
                            </span>

                            <span className="block4col3">
                                ระบบบริหารจัดการโครงงานพิเศษ 1 และ โครงงานพิเศษ 2
                            </span>
                            
                        </Row>

                        <Row className="block5row">
                            <span className="block5col1">
                                กำหนดสอบวันที่:
                            </span>


                            <span className="block5col2">
                                ศ.18, 16:30-18:00
                            </span>
                            
                        </Row>
                    </div>

                    

                   <div className="blockscore2">
                    <span class="std1">
                        <p className="id1">
                            6009610426
                        </p>
                        <p>
                                ภูริช อภิชลติ
                        </p>
                    </span>
                    <span class="std2">
                        <p className="id1">
                            6009650075
                        </p>
                        <p>
                            สุพิชชา รัตนไตรมาส
                        </p>
                    </span>
                   </div>

                   <div className="blockscore3">
                       <Row className="block4row1">
                            <span className="ส่วนที่1">
                                ส่วนที่ 1
                            </span>
                            <span className="คะแนนความก้าวหน้า">
                                คะแนนความก้าวหน้าโครงงาน
                            </span>
                            <span className="คะแนน">
                                (10 คะแนน)
                            </span>
                            <span className="ให้โดยที่ปรึกษา">
                                (ให้โดยที่ปรึกษา)
                            </span>
                            <span className="คะแนนนศ1ช่อง1">
                                <Input 
                                className="inputscoreStd1_row1"
                                placeholder="" />
                            </span>
                            <span className="คะแนนนศ2ช่อง1">
                                <Input 
                                className="inputscoreStd2_row1"
                                placeholder="" />
                            </span>
                           
                        </Row>
                   </div>

                   <div className="blockscore4">
                       <Row className="block4row2">
                            <span className="ส่วนที่2">
                                ส่วนที่ 2
                            </span>
                            <span className="คุณภาพของรายงาน">
                                คุณภาพของรายงาน
                            </span>
                            <span className="คะแนน30">
                                (30 คะแนน)
                            </span>
                            <span className="คะแนนนศ1ช่อง2">
                                <Input 
                                className="inputscoreStd1_row2"
                                placeholder="" />
                            </span>
                            <span className="คะแนนนศ2ช่อง2">
                                <Input 
                                className="inputscoreStd2_row2"
                                placeholder="" />
                            </span>
                        </Row>
                   </div>

                   <div className="blockscore5">
                       <Row className="block5row1">
                            <span className="ส่วนที่2">
                                ส่วนที่ 3
                            </span>
                            <span className="ส่วน3ย่อย">
                                ความเข้าใจในงานที่ทำ
                                <span className="ความเข้าใจในงานที่ทำ_คะแนน20">
                                    (20 คะแนน)
                                </span>
                                <span className="คะแนนนศ1ช่อง3">
                                <Input 
                                className="inputscoreStd1_row3"
                                placeholder="" />
                            </span>
                            <span className="คะแนนนศ2ช่อง3">
                                <Input 
                                className="inputscoreStd2_row3"
                                placeholder="" />
                            </span>
                                <p className="คุณภาพการนำเสนอและการตอบคำถาม">คุณภาพการนำเสนอและการตอบคำถาม
                                    <span className="คุณภาพการนำเสนอและการตอบคำถาม_คะแนน20">
                                        (20 คะแนน)
                                    </span>
                                    <span className="คะแนนนศ1ช่อง4">
                                        <Input 
                                        className="inputscoreStd1_row4"
                                        placeholder="" />
                                    </span>
                                    <span className="คะแนนนศ2ช่อง4">
                                        <Input 
                                        className="inputscoreStd2_row4"
                                        placeholder="" />
                                    </span>
                                </p>
                              
                                <p className="การประยุกต์ใช้ความรู้ทางวิทยาการคอมพิวเตอร์อย่างเหมาะสม">การประยุกต์ใช้ความรู้ทางวิทยาการคอมพิวเตอร์อย่างเหมาะสม
                                    <span className="การประยุกต์_คะแนน20">
                                        (20 คะแนน)
                                    </span>
                                    <span className="คะแนนนศ1ช่อง5">
                                        <Input 
                                        className="inputscoreStd1_row5"
                                        placeholder="" />
                                    </span>
                                    <span className="คะแนนนศ2ช่อง5">
                                        <Input 
                                        className="inputscoreStd2_row5"
                                        placeholder="" />
                                    </span>
                                </p>
                            </span>
                            <span className="การนำเสนอโครงงาน">
                                การนำเสนอโครงงาน
                            </span>
                            <span className="คะแนน60">
                                (60 คะแนน)
                            </span>
                            <span className="คะแนนนศ1ช่อง6">
                                <Input 
                                    className="inputscoreStd1_row6"
                                    placeholder="0" />
                            </span>
                            <span className="คะแนนนศ2ช่อง6">
                                <Input 
                                    className="inputscoreStd2_row6"
                                    placeholder="0" />
                            </span>
                           
                        </Row>
                   </div>

                   <div className="blockscore6">
                       <Row className="block6row">
                            <span className="รวม">
                                รวม
                            </span>
                            <span className="คะแนนนศ1ช่อง7">
                                <Input 
                                    className="inputscoreStd1_row7"
                                    placeholder="0" />
                            </span>
                            <span className="คะแนนนศ2ช่อง7">
                                <Input 
                                    className="inputscoreStd2_row7"
                                    placeholder="0" />
                            </span>
                            
                        </Row>
                        <Row className="block7row">
                            <span className="ข้อเสนอแนะ">
                                ระบุข้อเสนอแนะ/สิ่งที่ต้องปรับปรุง
                            </span>
                            <span className="คอมเม้น">
                                <TextArea 
                                    className="inputcomment"
                                    rows={4} />
                            </span>
                            
                        </Row>
                   </div>

                   <div className="blockscore7">
                        <span class="blockคำชี้แจง">
                            <p className="คำชี้แจง2">
                                เกณฑ์การวัดผล วิชา CS401 เป็นดังนี้
                            </p>
                            <p className="คำชี้แจง2">
                                ช่วงคะแนน 90 - 100 == เกรด A
                            </p>
                            <p className="คำชี้แจง2">
                                ช่วงคะแนน 85 - 89 == เกรด B+
                            </p>
                            <p className="คำชี้แจง2">
                                ช่วงคะแนน 80 - 84 == เกรด B
                            </p>
                            <p className="คำชี้แจง2">
                                ช่วงคะแนน 70 - 79 == เกรด C+
                            </p>
                            <p className="คำชี้แจง2">
                                ช่วงคะแนน 60 - 69 == เกรด C
                            </p>
                            <p className="คำชี้แจง2">
                                ช่วงคะแนน 55 - 59 == เกรด D+
                            </p>
                            <p className="คำชี้แจง2">
                                ช่วงคะแนน 50 - 54 == เกรด D
                            </p>
                            <p className="คำชี้แจง2">
                                ช่วงคะแนน 0 - 49 == เกรด F
                            </p>
                            
                        </span>

                        <span class="blockคำชี้แจง">
                            <p className="คำชี้แจง">
                                คำชี้แจง
                            </p>
                            <p className="คำชี้แจง">
                                ช่วงเวลาสอบอาจแบ่งโดยคร่าว ดังนี้
                            </p>
                            <p className="คำชี้แจง">
                                - นักศึกษาเตรียมตัวสอบ 10 นาที
                            </p>
                            <p className="คำชี้แจง">
                                - นำเสนอผลงาน 30 - 40 นาที
                            </p>
                            <p className="คำชี้แจง">
                                - ตอบคำถาม 30 นาที
                            </p>
                            <p className="คำชี้แจง">
                                - กรรมการสรุปผลการสอบ 10 นาที
                            </p>
                            
                        </span>



                        
                   </div>

                  
                   <Button
                        id="btn-create"
                        className="buttonttt"
                        // onClick={addProject}
                        variant="outlined"
                        color="primary"
                        type="submit"
                        endIcon={<Icon>add</Icon>}
                    >Submit
                    </Button>

                        
                   

                  
                </div>
            </div>
        </Row>
    )
}

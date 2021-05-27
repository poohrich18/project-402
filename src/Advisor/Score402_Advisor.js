import React, { useState, useContext, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
// import Sidebar_Teacher from "./Sidebar_Teacher";
import "../Score.css";
import { TextField } from "@material-ui/core";
import { Input } from "antd";
import Sidebar_Advisor from "./Sidebar_Advisor";
import { Select } from "antd";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

const { Option } = Select;
const { TextArea } = Input;
export const Score402_Advisor = () => {
  const [studentGroupNNG, setstudentGroupNNG] = useState([]);
  const [scoreList, setscoreList] = useState([]);
  const [newCheck, setnewCheck] = useState([]);
  const [newcheckname, setnewcheckname] = useState([]);

  const [new10score1_1, setnew10score1_1] = useState([]);
  const [new20score2_1, setnew20score2_1] = useState([]);
  const [new30score3_1, setnew30score3_1] = useState([]);
  const [new20score4_1, setnew20score4_1] = useState([]);
  const [new20score5_1, setnew20score5_1] = useState([]);
  const [new60score6_1, setnew60score6_1] = useState([]);
  const [newTotalscore7_1, setnewTotalscore7_1] = useState([]);

  const [new10score1_2, setnew10score1_2] = useState([]);
  const [new20score2_2, setnew20score2_2] = useState([]);
  const [new30score3_2, setnew30score3_] = useState([]);
  const [new20score4_2, set2new20score4_2] = useState([]);
  const [new20score5_2, setnew20score5_2] = useState([]);
  const [new60score6_2, setnew60score6_2] = useState([]);
  const [newTotalscore7_2, setnewTotalscore7_2] = useState([]);

//   const getStudentscore = () => {
//     axios
//     .post("http://localhost:5001/p/add", {
//       name: newcheckname[0] ,
//       stdname : newcheckname[1]
    
//     })
//     .then(() => {
//       setscoreList([
//         ...scoreList,
//         {
//           name: newcheckname[0] ,
//       stdname : newcheckname[1]
          
//         },
//       ]);
//     });
// };
      
      
 

  const getAdvisorNNG = () => {
    axios.get("http://localhost:5001/score/nng").then((respond) => {
      setstudentGroupNNG(respond.data);
    });
  };
  const getScoreNNG = () => {
    axios.get("http://localhost:5001/score2/nng").then((respond) => {
      setstudentGroupNNG(respond.data);
    });
  };

  // const  updateScoreStudent = (id) => {
  //   axios.put("http://localhost:5001/group/update5/", {
  //     advisorlaststname: newadvisorlastname,
  //     id: id,
  //   }).then((respond)=>{
  //     setgroupList(
  //       groupList.map((val)=>{
  //         return val.id == id ? {
  //           id: val.id,
  //           groupname: val.ProjNameTH,
  //           memberfirstname: val.Std_Name_1,
  //           memberlastname: val.Std_Name_2,
  //           advisorfirstname: val.AdvId,
  //           advisorlastname: newadvisorlastname
            
  //         } : val;
  //       })
  //       )
  //     })
  //   };

  // const getGropNNG = () => {
  //   axios.post("http://localhost:5001/namegroup/nng").then((respond) => {
  //     setnewCheck(respond.data);
  //     setnewgroupNNG(respond.data);
  //   });
  // };
  useEffect(() => {
    getAdvisorNNG();
    getScoreNNG();
    
  }, []);

  return (
    <Row className="content">
      <Col>
        <Sidebar_Advisor />
      </Col>

      <div className="rightblock_Score">
        <div className="blockwhite_Score">
          {/* <h1 className="Topname_Score">Score</h1>
                    <hr className="hr-Score"></hr> */}
      
          <div className="blockscore">
            <p className="หัวข้อใบประเมินคะแนน">
              ใบรายงานผลคะแนน วิชา CS402 โครงงานพิเศษ 1 ภาคเรียนที่ 1/2563
            </p>
          </div>

          <div className="blockscore1">
            <Row className="block1row">
              <span className="block1col1">อาจารย์ผู้ประเมิน:</span>

              <span className="block1col2">nng</span>

              <span className="block1col3">อาจารย์ นุชชากร งามเสาวรส</span>
            </Row>

            <Row className="block2row">
              <span className="block2col1">กลุ่มโครงงาน:</span>

              <span className="block2col2">
                <select
                  showSearch
                  style={{ width: 150, textAlign: "center" }}
                  placeholder="Select ProjCode"
                  optionFilterProp="children"
                  
                  onChange= {(e)=>{
                    axios.post("http://localhost:5001/namegroup/nng",{newCheck:e.target.value}).then((respond) => {
                      console.log(e.target.value)
                      setnewCheck(respond.data);
                      console.log(newCheck)
                      console.log(newCheck[0]?newCheck[0].ProjNameTH:null)
                      
                    });
                    
                  }}
                 
                 
                >
                  {studentGroupNNG.map((val, key) => {
                    return (
                      <option value={val.ProjCode} >{val.ProjCode}</option>
                    );
                  })}
                </select>
              </span>

              <span className="block2col3">
              {newCheck[0]?newCheck[0].ProjNameTH:null}
              </span>
            </Row>

            <row className="block3row">
              <span className="block3col3">
              {newCheck[0]?newCheck[0].ProjNameEN:null}
              </span>
            </row>

            <Row className="block4row">
              <span className="block4col1">อาจารย์ที่ปรึกษา:</span>

              <span className="block4col2">{newCheck[0]?newCheck[0].AdvId:null}</span>

              <span className="block4col3">
                {newCheck[0]?newCheck[0].ProjNameTH:null}
              </span>
            </Row>

            <Row className="block5row">
              <span className="block5col1">กำหนดสอบวันที่:</span>

              <span className="block5col2">ศ.28, 13:30 - 15:00</span>
            </Row>
          </div>

          <div className="blockscore2">
            <span class="std1">
              <p className="id1">{newCheck[0]?newCheck[0].Username_id_1:null}</p>
              <span  onChange= {(e)=>{
                    axios.post("http://localhost:5001/namegroup2/nng",{newcheckname:e.target.value}).then((respond) => {
                      console.log(e.target.value)
                      setnewcheckname(respond.data);
                      console.log(newcheckname)
                      console.log(newcheckname[0]?newcheckname[0].Comm:null)
                      console.log(newcheckname[0]?newcheckname[0].ProjCode:null)
                      
                    });
                    
                  }}>{newCheck[0]?newCheck[0].Std_Name_1:null}</span>
            </span>
            <span class="std2">
              <p className="id1">{newCheck[0]?newCheck[0].Username_id_2:null}</p>
              <p>{newCheck[0]?newCheck[0].Std_Name_2:null}</p>
            </span>
          </div>

          <div className="blockscore3">
            <Row className="block4row1">
              <span className="ส่วนที่1">ส่วนที่ 1</span>
              <span className="คะแนนความก้าวหน้า">
                คะแนนความก้าวหน้าโครงงาน
              </span>
              <span className="คะแนน">(10 คะแนน)</span>
              <span className="ให้โดยที่ปรึกษา">(ให้โดยที่ปรึกษา)</span>
              <span className="คะแนนนศ1ช่อง1">
                <Input className="inputscoreStd1_row1" placeholder="" />
              </span>
              <span className="คะแนนนศ2ช่อง1">
                <Input className="inputscoreStd2_row1" placeholder="" />
              </span>
            </Row>
          </div>

          <div className="blockscore4">
            <Row className="block4row2">
              <span className="ส่วนที่2">ส่วนที่ 2</span>
              <span className="คุณภาพของรายงาน">คุณภาพของรายงาน</span>
              <span className="คะแนน30">(20 คะแนน)</span>
              <span className="คะแนนนศ1ช่อง2">
                <Input className="inputscoreStd1_row2" placeholder="" />
              </span>
              <span className="คะแนนนศ2ช่อง2">
                <Input className="inputscoreStd2_row2" placeholder="" />
              </span>
            </Row>
          </div>

          <div className="blockscore5">
            <Row className="block5row1">
              <span className="ส่วนที่2">ส่วนที่ 3</span>
              <span className="ส่วน3ย่อย">
                คุณภาพของผลงานและความสมบูรณ์ของงาน
                <span className="คุณภาพของผลงานและความสมบูรณ์ของงาน_คะแนน30">
                  (30 คะแนน)
                </span>
                <span className="คะแนนนศ1ช่อง3">
                  <Input className="inputscoreStd1_row3" placeholder="" />
                </span>
                <span className="คะแนนนศ2ช่อง3">
                  <Input className="inputscoreStd2_row3" placeholder="" />
                </span>
                <p className="คุณภาพการนำเสนอและการตอบคำถาม">
                  คุณภาพการนำเสนอและการตอบคำถาม
                  <span className="คุณภาพการนำเสนอและการตอบคำถาม_คะแนน20">
                    (20 คะแนน)
                  </span>
                  <span className="คะแนนนศ1ช่อง4">
                    <Input className="inputscoreStd1_row4" placeholder="" />
                  </span>
                  <span className="คะแนนนศ2ช่อง4">
                    <Input className="inputscoreStd2_row4" placeholder="" />
                  </span>
                </p>
                <p className="การประยุกต์ใช้ความรู้ทางวิทยาการคอมพิวเตอร์อย่างเหมาะสม">
                  การประยุกต์ใช้ความรู้ทางวิทยาการคอมพิวเตอร์อย่างเหมาะสม
                  <span className="การประยุกต์_คะแนน20">(20 คะแนน)</span>
                  <span className="คะแนนนศ1ช่อง5">
                    <Input className="inputscoreStd1_row5" placeholder="" />
                  </span>
                  <span className="คะแนนนศ2ช่อง5">
                    <Input className="inputscoreStd2_row5" placeholder="" />
                  </span>
                </p>
              </span>
              <span className="การนำเสนอโครงงาน">การนำเสนอโครงงาน</span>
              <span className="คะแนน60">(60 คะแนน)</span>
              <span className="คะแนนนศ1ช่อง6">
                <Input className="inputscoreStd1_row6" placeholder="0" />
              </span>
              <span className="คะแนนนศ2ช่อง6">
                <Input className="inputscoreStd2_row6" placeholder="0" />
              </span>
            </Row>
          </div>

          <div className="blockscore6">
            <Row className="block6row">
              <span className="รวม">รวม</span>
              <span className="คะแนนนศ1ช่อง7">
                <Input className="inputscoreStd1_row7" placeholder="0" />
              </span>
              <span className="คะแนนนศ2ช่อง7">
                <Input className="inputscoreStd2_row7" placeholder="0" />
              </span>
            </Row>
            <Row className="block7row">
              <span className="ข้อเสนอแนะ">
                ระบุข้อเสนอแนะ/สิ่งที่ต้องปรับปรุง
              </span>
              <span className="คอมเม้น">
                <TextArea className="inputcomment" rows={4} />
              </span>
            </Row>
          </div>
         

          <div className="blockscore7">
            <span class="blockคำชี้แจง">
              <p className="คำชี้แจง2">เกณฑ์การวัดผล วิชา CS402 เป็นดังนี้</p>
              <p className="คำชี้แจง2">ช่วงคะแนน 90 - 100 == เกรด A</p>
              <p className="คำชี้แจง2">ช่วงคะแนน 85 - 89 == เกรด B+</p>
              <p className="คำชี้แจง2">ช่วงคะแนน 80 - 84 == เกรด B</p>
              <p className="คำชี้แจง2">ช่วงคะแนน 70 - 79 == เกรด C+</p>
              <p className="คำชี้แจง2">ช่วงคะแนน 60 - 69 == เกรด C</p>
              <p className="คำชี้แจง2">ช่วงคะแนน 55 - 59 == เกรด D+</p>
              <p className="คำชี้แจง2">ช่วงคะแนน 50 - 54 == เกรด D</p>
              <p className="คำชี้แจง2">ช่วงคะแนน 0 - 49 == เกรด F</p>
            </span>

            <span class="blockคำชี้แจง">
              <p className="คำชี้แจง">คำชี้แจง</p>
              <p className="คำชี้แจง">ช่วงเวลาสอบอาจแบ่งโดยคร่าว ดังนี้</p>
              <p className="คำชี้แจง">- นักศึกษาเตรียมตัวสอบ 10 นาที</p>
              <p className="คำชี้แจง">- นำเสนอผลงาน 30 - 40 นาที</p>
              <p className="คำชี้แจง">- ตอบคำถาม 30 นาที</p>
              <p className="คำชี้แจง">- กรรมการสรุปผลการสอบ 10 นาที</p>
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
  );
};

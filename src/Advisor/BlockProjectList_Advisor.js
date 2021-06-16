import * as React from 'react';
import { useState, useEffect } from "react";
import { DataGrid } from '@material-ui/data-grid';
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  buttonttt: {
    margin: theme.spacing(1),
    marginRight: "32px",
    marginTop: "40px",
    marginBottom: "20px",
    float: "right" ,
  },
}));

// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'projnamethai', headerName: 'ProjNameTH', width: 200 },
//   { field: 'projnameeng', headerName: 'ProjNameEN', width: 200 },
//   { field: 'id1', headerName: 'Student ID 1', width: 110 },
//   {
//     field: 'fullName1',
//     headerName: 'Std Name 1',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 150,
//     valueGetter: (params) =>
//       `${params.getValue('member1firstname') || ''} ${params.getValue('member1lastname') || ''}`,
//   },
//   { field: 'semester1', headerName: 'Std Type', width: 100 },
//   { field: 'id2', headerName: 'Student ID 2', width: 110 },
//   {
//     field: 'fullName2',
//     headerName: 'Std Name 1',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 150,
//     valueGetter: (params) =>
//       `${params.getValue('member2firstname') || ''} ${params.getValue('member2lastname') || ''}`,
//   },
//   { field: 'semester2', headerName: 'Std Type', width: 100 },
//   { field: 'advisor', headerName: 'AdvId', width: 150 },
//   { field: 'commitee1', headerName: 'Comm1', width: 100 },
//   { field: 'commitee2', headerName: 'Comm2', width: 100},
//   { field: 'commitee3', headerName: 'Comm3', width: 100 },
// ];

// const rows = [
//   { id: 1, 
//       projnamethai: 'ระบบบริหารจัดการโครงงานพิเศษ 1 และ โครงงานพิเศษ 2', 
//       projnameeng: 'ADMINISTRATIVE SYSTEM FOR SPECIAL PROJECT 1 AND SPECIAL PROJECT 2' , 
//       id1: '6009610426', 
//       member1firstname: 'ภูริช' , 
//       member1lastname: 'อภิชลติ' ,
//       semester1: 'R',
//       id2: '6009650075', 
//       member2firstname: 'สุพิชชา' ,
//       member2lastname: 'รัตนไตรมาส' ,
//       semester2: 'S',
//       advisor: 'Nutchakorn Ngamsaowaros',
//   },
//   { id: 2, 
//     projnamethai: 'สต็อกสินค้ารองเท้า', 
//     projnameeng: 'STOCK SHOES' , 
//     id1: '6009650125', 
//     member1firstname: 'โชติกา' , 
//     member1lastname: 'โพธิปัญญา' ,
//     semester1: 'S',
//     id2: '6009650117', 
//     member2firstname: 'วิทัศน์' ,
//     member2lastname: 'จันอุไรรัตน์' ,
//     semester2: 'S',
//     advisor: 'Nutchakorn Ngamsaowaros',
//   },
//   { id: 3, 
//     projnamethai: 'ระบบจองบริการล้างรถออนไลน์', 
//     projnameeng: 'WASH ME NOW' , 
//     id1: '6009650240', 
//     member1firstname: 'คุนัญญา' , 
//     member1lastname: 'เดชบริพันธ์' ,
//     semester1: 'S',
//     id2: '6009650331', 
//     member2firstname: 'ณัทชวัช' ,
//     member2lastname: 'อาวุธโสภา' ,
//     semester2: 'S',
//     advisor: 'Songsak Rongviriyapanich',
//   },
//   { id: 4, 
//     projnamethai: 'การวิเคราะห์แบบสอบถามด้วยเทคโนโลยีการวิเคราะห์ภาพ', 
//     projnameeng: 'QUESTIONNAIR ANALYSIS USING IMAGE ANALYSIS' , 
//     id1: '6009680023', 
//     member1firstname: 'สุภาวดี' , 
//     member1lastname: 'ใจกระสันต์' ,
//     semester1: 'R',
//     id2: '6009680064', 
//     member2firstname: 'นัทธ์หทัย' ,
//     member2lastname: 'กันทพงษ์' ,
//     semester2: 'R',
//     advisor: 'Saowaluk Watanapa',
//   },
  
// ];


export const BlockProjectList_Advisor = () => {

    const classes = useStyles();
    const [studentState, setStudentState] = useState([]);
    useEffect(() => {
      let studentState = [
        { id: 1, 
          projnamethai: "แอปพลิเคชันค้นหาอาคารด้วยภาพถ่าย", 
          // projnameeng: "ADMINISTRATIVE SYSTEM FOR SPECIAL PROJECT 1 AND SPECIAL PROJECT 2", 
          fullName1: "นางสาว กฤษญา ช้างสอน" ,
          semester1: "ภาคปกติ" ,
          fullName2: "นางสาว นันฐพร ราชชมภู" ,
          semester2: "ภาคปกติ" ,
          advisor: "scw" ,
          commitee1: "" ,
          commitee2: "" ,
          commitee3: "" ,
        },
        { id: 2, 
          projnamethai: "การวิเคราะห์แบบสอบถามด้วยเทคโนโลยีการวิเคราะห์ภาพ", 
          // projnameeng: "ADMINISTRATIVE SYSTEM FOR SPECIAL PROJECT 1 AND SPECIAL PROJECT 2", 
          fullName1: "นางสาว สุภาวดี ใจกระสันต์" ,
          semester1: "ภาคปกติ" ,
          fullName2: "นางสาว นัทธ์หทัย กันทพงษ์" ,
          semester2: "ภาคปกติ" ,
          advisor: "scw" ,
          commitee1: "" ,
          commitee2: "" ,
          commitee3: "" ,
        },
        { id: 3, 
          projnamethai: "ระบบจองบริการล้างรถออนไลน์", 
          // projnameeng: "ADMINISTRATIVE SYSTEM FOR SPECIAL PROJECT 1 AND SPECIAL PROJECT 2", 
          fullName1: "นางสาว คุนัญญา เดชบริพันธ์" ,
          semester1: "ภาคพิเศษ" ,
          fullName2: "นาย ณัทชวัช อาวุธโสภา" ,
          semester2: "ภาคพิเศษ" ,
          advisor: "ssr" ,
          commitee1: "" ,
          commitee2: "" ,
          commitee3: "" ,
        },
        { id: 12, 
          projnamethai: "ระบบฝังตัวสำหรับสร้างโน๊ตกลองชุดอัตโนมัติ", 
          // projnameeng: "ADMINISTRATIVE SYSTEM FOR SPECIAL PROJECT 1 AND SPECIAL PROJECT 2", 
          fullName1: "นาย วัฒนา จันทร์แสตมป์" ,
          semester1: "ภาคพิเศษ" ,
          fullName2: "นาย ธีรภัทร เหมือนงิ้ว" ,
          semester2: "ภาคพิเศษ" ,
          advisor: "pkl" ,
          commitee1: "" ,
          commitee2: "" ,
          commitee3: "" ,
        },
        { id: 18, 
          projnamethai: "ลูกคิด: แพลตฟอร์มออนไลน์เพื่อฝึกฝนทักษะเชิงตัวเลขและจำนวนด้วยตนเองสำหรับเด็กปฐมวัย", 
          // projnameeng: "ADMINISTRATIVE SYSTEM FOR SPECIAL PROJECT 1 AND SPECIAL PROJECT 2", 
          fullName1: "นาย สิรภพ ชาตะรูปะ" ,
          semester1: "ภาคปกติ" ,
          fullName2: "นาย ณัฐพิชญ์ยุกต์ ศิวะหรรษาพันธ์" ,
          semester2: "ภาคปกติ" ,
          advisor: "ppr" ,
          commitee1: "" ,
          commitee2: "" ,
          commitee3: "" ,
        },
        { id: 35, 
          projnamethai: "ระบบจับคู่คุณลักษณะส่วนบุคคลกับหอพักบริเวณมหาวิทยาลัยธรรมศาสตร์ ศูนย์รังสิต", 
          // projnameeng: "ADMINISTRATIVE SYSTEM FOR SPECIAL PROJECT 1 AND SPECIAL PROJECT 2", 
          fullName1: "นาย ธนภัทร ตันศิริ" ,
        semester1: "ภาคปกติ" ,
        fullName2: "นางสาว กาญจนา ดอนมงคล" ,
        semester2: "ภาคปกติ" ,
        advisor: "nng" , 
        commitee1: "" ,
        commitee2: "" ,
        commitee3: "" ,
        },
        { id: 36, 
          projnamethai: "ระบบบริหารจัดการโครงงานพิเศษ 1 และ โครงงานพิเศษ 2", 
          // projnameeng: "ADMINISTRATIVE SYSTEM FOR SPECIAL PROJECT 1 AND SPECIAL PROJECT 2", 
          fullName1: "นาย ภูริช อภิชลติ" ,
        semester1: "ภาคปกติ" ,
        fullName2: "นางสาว สุพิชชา รัตนไตรมาส" ,
        semester2: "ภาคพิเศษ" ,
        advisor: "nng" ,
        commitee1: "" ,
        commitee2: "" ,
        commitee3: "" ,
        },
      ];
  
      setStudentState(
        studentState.map(d => {
          return {
            select: false,
            id: d.id,
            projnamethai: d.projnamethai,
            // projnameeng: d.projnameeng,
            fullName1: d.fullName1 ,
            semester1: d.semester1 ,
            fullName2: d.fullName2 ,
            semester2: d.semester2 ,
            advisor: d.advisor ,
            commitee1: d.commitee1 ,
            commitee2: d.commitee2 ,
            commitee3: d.commitee3 ,
          };
  
        })
      );
    }, []);

    return (
        <div className="rightblockCSproject">
            <div className="blockwhiteCSproject">
            <h1 className="TopnameCSproject">CS Project </h1>
                <hr className="hr-csproject"></hr>

                {/* <RowSelection />
                <div style={{ height: 500, width: 1150 , marginTop: 20 , marginLeft: 48}}>
                    <DataGrid 
                      rows={rows} 
                      columns={columns} 
                      pageSize={8} 
                      checkboxSelection 
                    />
                </div> */}

        <div className="container">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">
                  <input
                    type="checkbox"
                    onChange={e => {
                      let checked = e.target.checked;
                      setStudentState(
                        studentState.map(d => {
                          d.select = checked;
                          return d;
                        })
                      );
                    }}
                  ></input>
                </th>
                <th scope="col">ProjNameTH</th>
                {/* <th scope="col">ProjNameEN</th> */}
                <th scope="col">Std Name 1</th>
                <th scope="col">Std Type</th>
                <th scope="col">Std Name 2</th>
                <th scope="col">Std Type 2</th>
                <th scope="col">AdvId</th>
                <th scope="col">Comm1</th>
                <th scope="col">Comm2</th>
                <th scope="col">Comm3</th>
              </tr>
            </thead>
            <tbody>
              {studentState.map((d, i) => (
                <tr key={d.id}>
                  <th scope="row">
                    <input
                      onChange={event => {
                        let checked = event.target.checked;
                        setStudentState(
                          studentState.map(data => {
                            if (d.id === data.id) {
                              data.select = checked;
                            }
                            return data;
                          })
                        );
                      }}
                      type="checkbox"
                      checked={d.select}
                    ></input>
                  </th>
                  <td>{d.projnamethai}</td>
                  {/* <td>{d.projnameeng}</td> */}
                  <td>{d.fullName1}</td>
                  <td>{d.semester1}</td>
                  <td>{d.fullName2}</td>
                  <td>{d.semester2}</td>
                  <td>{d.advisor}</td>
                  <td>{d.commitee1}</td>
                  <td>{d.commitee2}</td>
                  <td>{d.commitee3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Button
          id="btn-create"
          className= "buttonttt"
          // onClick={addProject}
          variant="outlined"
          color="primary"
          type="submit"
          // endIcon={<Icon>add</Icon>}
          >Submit
        </Button>
      </div>
    </div>
  )
}

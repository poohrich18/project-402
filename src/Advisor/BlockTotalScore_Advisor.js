import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import react, { useEffect, useState } from "react";
import axios from "axios";
import {
  Form,
  // Button
} from "reactstrap";

export const BlockTotalScore_Advisor = () => {

    const [List, setList] = useState([]);

    const getGroup = () => {
        axios.get("http://localhost:5001/projectdb").then((respond) => {
          setList(respond.data);
        
        });
      };
      useEffect(() => {
        getGroup();
        
      }, []);
    return (
        <div className="rightblockTotalScore">
            <div className="blockwhiteTotalScore">
                <h1 className="TopnameTotalScore">Total Score </h1>
                <hr className="hr-TotalScore"></hr>

                <div className='totaltable'>
                <table className='layout-table-SaleSummary'>
                    <thead>
                        <tr >
                            <th className="textTotalScore">ProjCode</th>
                            <th className="textTotalScore">StudentID</th>
                            <th className="textTotalScore">Std Name</th>
                            <th className="textTotalScore">Comm</th>
                            <th className="textTotalScore">Total</th>
                            <th className="textTotalScore">ความก้าวหน้า</th>
                            <th className="textTotalScore"> รายงาน</th>
                            <th className="textTotalScore">Presentation</th>
                            <th className="textTotalScore">ความเข้าใจ</th>
                            <th className="textTotalScore">การนำเสนอ</th>
                            <th className="textTotalScore">การใช้ความรู้</th>
                            <th className="textTotalScore">Comments</th>
                        </tr>
                    </thead>
                
                    {/* Group 1 */}
                    <tbody >
                    {List.map((val, key) => {
                    return (
                        <tr>
                            <td className="textTotalScore">
                               { val.ProjCode}
                            </td>
                            <td className="textTotalScore">
                            { val.ProjCode.Username_id_1}
                            </td>
                            <td className="textTotalScore">
                                    {val.Std_Name_1}
                            </td>
                            <td className="textTotalScore">{val.AdvId}</td>
                            <td className="textTotalScore">{val.Total1}</td>
                            <td className="textTotalScore">{val.ความก้าวหน้า1}</td>
                            <td className="textTotalScore">{val.รายงาน1}</td>
                            <td className="textTotalScore">{val.presentation1}</td>
                            <td className="textTotalScore">{val.ความเข้าใจ1}</td>
                            <td className="textTotalScore">{val.การนำเสนอ1}</td>
                            <td className="textTotalScore">{val.การใช้ความรู้1}</td>
                            <td className="textTotalScore">{val.comment}</td>
                            
                        </tr>
                        
                            
                         );
                        })}
                    </tbody>

                    <tbody>
                    {List.map((val, key) => {
                    return (
                        <tr>
                        <td className="textTotalScore">
                           { val.ProjCode}
                        </td>
                        <td className="textTotalScore">
                        { val.ProjCode.Username_id_2}
                        </td>
                        <td className="textTotalScore">
                                {val.Std_Name_2}
                        </td>
                        <td className="textTotalScore">{val.AdvId}</td>
                        <td className="textTotalScore">{val.Total2}</td>
                        <td className="textTotalScore">{val.ความก้าวหน้า2}</td>
                        <td className="textTotalScore">{val.รายงาน2}</td>
                        <td className="textTotalScore">{val.presentation2}</td>
                        <td className="textTotalScore">{val.ความเข้าใจ2}</td>
                        <td className="textTotalScore">{val.การนำเสนอ2}</td>
                        <td className="textTotalScore">{val.การใช้ความรู้2}</td>
                        <td className="textTotalScore">{val.comment}</td>
                        

                        
                    </tr>
                         );
                        })}
                    </tbody>
                    
             
                   

                    

                   
                  
                  
                </table>
                </div>
            </div>
        </div>
    )
}

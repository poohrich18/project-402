import React from 'react';
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import { Row } from 'react-bootstrap';
import pooh2 from '../assets/pooh2.jpg';
import praew1 from '../assets/praew1.jpg';
import sweetmango from '../assets/sweetmango.png';

export const BlockMyGroup2 = () => {

    return (
        <div className="rightblocktask">
            <div className="blockwhitetask">
                <h1 className="Topname-mygroup">My Group</h1>
                <hr className="hr-mygroup"></hr>

                <span className="name-mygroup">groupname (คลิกแล้วแสดงชื่อกลุ่มที่คลิกเข้ามา)</span>
                <span>
                <Button
                    id="btn-addproject"
                    className="buttonaddmem"
                    variant="outlined"
                    color="primary"
                    type="submit"
                    // endIcon={<Icon>add</Icon>}
                >
                    <Link to="/create2">Add Member</Link>
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
                    <Link to="/group2">Leave Group</Link>
                </Button>
                </span>
                
                <Row className="blockmem-img">
                    <span className="manypeople">Member(3)</span>
                    <span><img className="pichome" src={pooh2} alt=""/></span>
                    <span><img className="picpro" src={praew1} alt=""/></span>
                    <span><img className="picpro" src={sweetmango} alt=""/></span>
                </Row>

                <div className="blockinblock">
                <form>
                    <div class="form-group">
                        {/* <label for="exampleFormControlFile1">Example file input</label> */}
                        {/* <input type="file" class="form-control-file" id="exampleFormControlFile1" /> */}
                    </div>
                    </form>
                </div>
                

            </div>
        </div>
    )
}


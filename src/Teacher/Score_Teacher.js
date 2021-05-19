import React from 'react'
import { Row, Col } from "react-bootstrap";
import Sidebar_Teacher from "../Teacher/Sidebar_Teacher";
import "../Score.css";
export const Score_Teacher = () => {
    return (
        <Row className="content">
            <Col>
                <Sidebar_Teacher/>
            </Col>

            <div className="rightblock_Score">
                <div className="blockwhite_Score">
                <h1 className="Topname_Score">Score</h1>
                        <hr className="hr-Score"></hr>
                </div>
            </div>
        </Row>
    )
}

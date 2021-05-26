import React from 'react';
import './TotalScore_Advisor.css';
import { Row, Col } from 'react-bootstrap';
import Sidebar_Advisor from "./Advisor/Sidebar_Advisor";
import {BlockTotalScore_Advisor} from "./Advisor/BlockTotalScore_Advisor";

function TotalScore_Advisor() {
    return (
        <Row className="content">
           <Col> <Sidebar_Advisor /> </Col>
           <Col> <BlockTotalScore_Advisor /></Col>
        </Row>
    );
}

export default TotalScore_Advisor;
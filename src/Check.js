import React from 'react';
import './Check.css';
import { Row, Col } from 'react-bootstrap';
import Sidebar_Advisor from "./Advisor/Sidebar_Advisor";
import {BlockCheck_Advisor} from "./Advisor/BlockCheck_Advisor";

function Check() {
    return (
        <Row className="content">
           <Col> <Sidebar_Advisor /> </Col>
           <Col> <BlockCheck_Advisor /></Col>
        </Row>
    );
}

export default Check;
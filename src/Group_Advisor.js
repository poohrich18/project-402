import React from 'react';
import './Project.css';
import {Row } from 'react-bootstrap';
import Sidebar_Advisor from "./Advisor/Sidebar_Advisor";
import {BlockGroup_Advisor} from "./Advisor/BlockGroup_Advisor";

function Group_Advisor(){
    return (
        <Row>
            <Sidebar_Advisor />
            <BlockGroup_Advisor />
           
        </Row>
    );
}

export default Group_Advisor ;
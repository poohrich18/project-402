import React from 'react';
import './MyGroup.css' ;
import {Row } from 'react-bootstrap';
import Sidebar_Advisor from './Advisor/Sidebar_Advisor';
import { BlockMyGroup_Advisor } from './Advisor/BlockMyGroup_Advisor';

function MyGroup_Advisor() {
    return (
        <Row>
            <Sidebar_Advisor />
            <BlockMyGroup_Advisor />
        </Row>
    );
  }
  
  export default MyGroup_Advisor;
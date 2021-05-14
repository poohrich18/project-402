import React from 'react';
import './Setting.css'
import {Row , Col} from 'react-bootstrap';
import Sidebar_Student2 from "./Student2/Sidebar_Student2";
import {BlockSetting2} from "./Student2/BlockSetting2";

function Setting2() {
    return (
        <Row>
            <Sidebar_Student2 />
            <BlockSetting2 />
        </Row>
    );
  }
  
  export default Setting2;
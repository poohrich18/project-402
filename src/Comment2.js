import React from 'react';
import './Comment.css' ;
import {Row , Col} from 'react-bootstrap';
import Sidebar_Student2 from "./Student2/Sidebar_Student2";
import BlockComment_Student2 from "./Student2/BlockComment_Student2";

function Comment2() {
    return (
        <Row>
            <Sidebar_Student2 />
            <BlockComment_Student2 />
        </Row>
    );
  }
  
  export default Comment2;
import React from 'react';
import './Calendar.css' ;
import {Row , Col} from 'react-bootstrap';
import Sidebar_Student2 from "./Student2/Sidebar_Student2";
import {BlockCalendar2} from "./Student2/BlockCalendar2";

function Calendar2() {
    return (
        <Row>
            <Sidebar_Student2 />
            <BlockCalendar2 />
        </Row>
    );
  }
  
  export default Calendar2;
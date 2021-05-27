import React from 'react';
import './CreateGroup.css';
import {Row } from 'react-bootstrap';
import Sidebar from "./Components/Sidebar";
import {BlockCreate} from "./Components/BlockCreate";
// import {TestTestTest} from './Components/TestTestTest' ;

function CreateGroup() {
    return (
        <Row>
            <Sidebar />
            <BlockCreate />
        </Row>
    );
  }
  
export default CreateGroup;
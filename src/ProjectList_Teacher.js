import React from 'react';
import './ProjectList_Advisor.css' ;
import {Row } from 'react-bootstrap';
import Sidebar_Teacher from "./Teacher/Sidebar_Teacher";
import {BlockProjectList_Teacher} from "./Teacher/BlockProjectList_Teacher";

function ProjectList_Teacher() {
    return (
        <Row>
            <Sidebar_Teacher />
            <BlockProjectList_Teacher />
        </Row>
    );
  }
  
export default ProjectList_Teacher;
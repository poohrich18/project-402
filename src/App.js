import React  from 'react';
import './App.css';
import Login from './Login';
import Home from './Home';
import CreateGroup from './CreateGroup';
import Group from './Group';
import MyGroup from './MyGroup';
import Calendar from './Calendar';
import Setting from './Setting';
import Notification from './Notification';
import Comment from './Comment';
import { EditCreateGroup } from './Components/EditCreateGroup';
import {Project_Information} from './Components/Project_Information';
import {AvailableTime} from './Components/AvailableTime';

//student2
import Home_Student2 from './Home_Student2'
import CreateGroup_Student2 from './CreateGroup_Student2';
import Group2 from './Group2';
import MyGroup_Student2 from './MyGroup_Student2';
import Calendar2 from './Calendar2';
import Setting2 from './Setting2';
import Notification_Student2 from './Notification_Student2';
import { AcceptGroup } from './Components/AcceptGroup';
import {Project_Information_2} from './Student2/Project_Information_2' ;
import {AvailableTime_2} from './Student2/AvailableTime_2';

//teacher
import Home_Teacher from './Home_Teacher';
import Notification_Teacher from './Notification_Teacher';
import ProjectList_Teacher from './ProjectList_Teacher' ;
import {AvailableTime_Teacher} from './Teacher/AvailableTime_Teacher';
// import {Score401_Teacher} from './Teacher/Score401_Teacher';

//advisor
import Home_Advisor from './Home_Advisor';
import Notification_Advisor from './Notification_Advisor';
import { AcceptGroup_Advisor } from './Advisor/AcceptGroup_Advisor';
import ProjectList_Advisor from './ProjectList_Advisor' ;
import CreateSchedule_Advisor from './CreateSchedule_Advisor';
import {Score401_Advisor} from './Advisor/Score401_Advisor';
import {Score402_Advisor} from './Advisor/Score402_Advisor';
import Check from './Check' ;

// import {observer} from 'mobx-react' ;
import { BrowserRouter, Route , Switch} from "react-router-dom";
import {GlobalProvider} from './Context/GlobalState';

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component{
  renderRouter(){
    return (
      <GlobalProvider>
        <Switch>

        {/* student1 */}
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/create" component={CreateGroup} />
        <Route exact path="/group" component={Group} />
        <Route exact path="/mygroup" component={MyGroup} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/setting" component={Setting} />
        <Route exact path="/notification" component={Notification} />
        <Route exact path="/comment" component={Comment} />
        <Route exact path="/edit/:id" component={EditCreateGroup} />
        <Route exact path="/project_inform" component={Project_Information} />
        <Route exact path="/time" component={AvailableTime} />
        
        {/* student2 */}
        <Route exact path="/home2" component={Home_Student2} />
        <Route exact path="/create2" component={CreateGroup_Student2} />
        <Route exact path="/group2" component={Group2} />
        <Route exact path="/mygroup2" component={MyGroup_Student2} />
        <Route exact path="/calendar2" component={Calendar2} />
        <Route exact path="/setting2" component={Setting2} />
        <Route exact path="/notification2" component={Notification_Student2} />
        <Route exact path="/accept" component={AcceptGroup} />
        
        <Route exact path="/project_inform2" component={Project_Information_2} />
        <Route exact path="/time2" component={AvailableTime_2} />

        {/* teacher */}
        <Route exact path="/home_t" component={Home_Teacher} />
        <Route exact path="/notification_t" component={Notification_Teacher} />
        <Route exact path="/projectlist_t" component={ProjectList_Teacher} />
        <Route exact path="/time_t" component={AvailableTime_Teacher} />
        {/* <Route exact path="/score401_t" component={Score401_Teacher} /> */}

        {/* advisor */}
        <Route exact path="/home_a" component={Home_Advisor} />
        <Route exact path="/notification_a" component={Notification_Advisor} />
        <Route exact path="/accept_a" component={AcceptGroup_Advisor} />
        <Route exact path="/projectlist_a" component={ProjectList_Advisor} />
        <Route exact path="/create_t" component={CreateSchedule_Advisor} />
        <Route exact path="/score401_a" component={Score401_Advisor} />
        <Route exact path="/score402_a" component={Score402_Advisor} />
        <Route exact path="/table_a" component={Check} />

        </Switch>
      </GlobalProvider>
      
    )
  }

  render() {

    return (
       
      <BrowserRouter>{this.renderRouter()}</BrowserRouter>
   
    );
  }
}
export default  App;

//export default observer (App);
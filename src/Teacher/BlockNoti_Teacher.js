import React from 'react';
import { Button } from 'reactstrap'
import {Link } from 'react-router-dom';

function BlockNoti_Teacher (){

    // const {groups } = useContext(GlobalContext);
    return (
        <div className="rightblocknoti">
            <div className="blockwhitenoti">
                <h1 className="TopnameNoti">Notification</h1> 
                <hr className="hr-noti"></hr>

                    <h5 className="topic_request">No Request to join a group to be a Advistor.</h5>
                    
                    {/* <div className="list-group-noti">
                            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                                <div class=" w-100 justify-content-between">
                                    <h5 class="mb-1">Phurit Apichonlati</h5>
                                    <p class="mb-1">Sent request to you</p>
                                    <small>Now</small>
                                </div>
                                <Link
                                    className="btn btn-primary"
                                    to={`/accept_t`}>accept
                                    
                                </Link>
                                <Button 
                                    className="btn-decline"
                                    color="primary"
                                    >Decline
                                </Button>{' '}
                            
                            </a>
                    </div> */}
                    
            </div>
        </div>
    );
}

export default BlockNoti_Teacher;
import React , {useContext} from 'react';
import {GlobalContext} from '../Context/GlobalState' ;
import {Link} from 'react-router-dom';
import {ListGroup , ListGroupItem , Button  } from 'reactstrap'
import {useState} from 'react';
import axios from 'axios';

export const ProjectList = () => {

    const {users , removeUser} = useContext(GlobalContext);
    console.log(users) ;
    const [groupList , setgroupList] = useState([]);
    
    const getGroup = () =>{
         axios.get('http://localhost:5000/group/').then((respond) =>{
            setgroupList(respond.data);
         });
        }

    return (
        <ListGroup className="mt-4">
            {users.length > 0 ? (
                 <>
                {users.map(user => (
                    <ListGroupItem className="d-flex" key={user.id}>
                        <strong className="groupnamelist">{user.name}</strong>
                        <div className="btn-list ml-auto">
                            <Link 
                                className="btn btn-warning mr-1" 
                                to={`/edit/${user.id}`}>Edit</Link>
                        <Button className="btn btn-primary">Show All Group</Button>
                        <Button
                        className="btn-delete"
                        onClick={() => removeUser(user.id)}
                        color="danger">Delete</Button>
                    </div>
                </ListGroupItem>
                ))}
                </>
            ) : (
                <h4 className="text-center">No Group</h4>
            )}
        </ListGroup>
    )
}
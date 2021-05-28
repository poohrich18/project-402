import React from 'react' 
// import 'font-awesome/css/font-awesome.css'
// import DashboardIcon from '@material-ui/icons/Dashboard';
// import AddBoxIcon from '@material-ui/icons/AddBox';
// import WorkIcon from '@material-ui/icons/Work';
// import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
// import EventIcon from '@material-ui/icons/Event';
// import SettingsIcon from '@material-ui/icons/Settings';


export const SidebarData = [
    {
        title : "Dashboard" ,
        icon : <i class="fa fa-home fa-1x" aria-hidden="true"></i> ,
        link : "/home"
    },
    {
        title : "Create Group" ,
        icon : <i class="fa fa-plus-square fa-1x" aria-hidden="true"></i> ,
        link : "/create"
    },
    // {
    //     title : "Group" ,
    //     icon : <i class="fa fa-users fa-1x" aria-hidden="true"></i> ,
    //     link : "/group"
    // },
    {
        title : "My Group" ,
        icon : <i class="fa fa-briefcase fa-1x" aria-hidden="true"></i> ,
        link : "/mygroup"
    },
    {
        title : "Calendar" ,
        icon : <i class="fa fa-calendar fa-1x" aria-hidden="true"></i>,
        link : "/calendar"
    },
    {
        title : "Setting" ,
        icon : <i class="fa fa-cog fa-1x" aria-hidden="true"></i> ,
        link : "/setting"
    },
];

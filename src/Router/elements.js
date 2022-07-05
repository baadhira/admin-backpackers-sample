

import EventList from "../pages/list/EventList";
import QueryList from "../pages/list/QueryList";
import { CommentList } from "../pages/list/CommentList";
import Home from "../pages/home/Home";
import { Login } from "../pages/login/Login";







export const elements=[
    {
        isAuth:true,
        path:'/', 
        element:<Home/>
    },
    {
        isAuth:true,
        path:'/products', 
        element:<EventList/>
    },
    {
        isAuth:true,
        path:'/queries', 
        element:<QueryList/>
    },
    {
        isAuth:true,
        path:'/comments', 
        element:<CommentList/>
    },
    // {
    //     isAuth:true,
    //     path:'/querydetail/:id', 
    //     element:<Querydetail/>
    // },
    // {
    //     isAuth:true,
    //     path:'/eventdetail/:id', 
    //     element:<EventDetail/>
    // },
    // {
    //     isAuth:true,
    //     path:'/profile', 
    //     element:<Profile/>
    // },
    // {
    //     isAuth:true,
    //     path:'/profile/:id', 
    //     element:<Profile/>
    // },
    // {
    //     isAuth:true,
    //     path:'/account', 
    //     element:<Account/>
    // },
    // {
    //     isAuth:true,
    //     path:'/notifications', 
    //     element:<Notifications/>
    // },
    // {
    //     isAuth:true,
    //     path:'/people', 
    //     element:<People/>
    // },
    // {
    //     isAuth:true,
    //     path:'/peopledetail/:id', 
    //     element:<People_detail/>
    // },
    // {
    //     isAuth:true,
    //     path:'/friend_request', 
    //     element:<Friend_request/>
    // },
    // {
    //     isAuth:true,
    //     path:'/host_request_detail/:id', 
    //     element:<HostRequestDetail/>
    // },
    // {
    //     isAuth:true,
    //     path:'/host_request_detail_reply/:id', 
    //     element:<HostRequestDetailReply/>
    // },
    // {
    //     isAuth:true,
    //     path:'/qdt', 
    //     element:<QueryToolDetail/>
    // },
    // {
    //     isAuth:true,
    //     path:'/place/:id', 
    //     element:<PlaceDetails/>
    // },
    // {
    //     isAuth:true,
    //     path:'allpeople', 
    //     element:<AllPeople/>
    // },
    // {
    //     isAuth:false,
    //     path:'/signup', 
    //     element:<Sign/>
    // },
    {
        isAuth:false,
        path:'/login', 
        element:<Login/>
    },
    // {
    //     isAuth:true,
    //     path:'/chat', 
    //     element:<ChatUi/>
    // },
    // {
    //     isAuth:false,
    //     path:'/chattest', 
    //     element:<ChatTest/>
    // },
    // {
    //     isAuth:false,
    //     path:'/loader', 
    //     element:<Loader/>
    // },
    // {
    //     isAuth:false,
    //     path:'/program', 
    //     element:<Program/>
    // }
]


import React from "react";
import "./Profile.css";
import Left from "./Left";
import Mid from "./Mid";
import Right from "./Right";
import Top from "./Top";
const Profile = (props)=>{
    return  <>
    <Top/>
    <div className="main-container">
    <Left/>
    <Mid/>
    <Right/>
    </div>
    </> 
}
export default Profile;
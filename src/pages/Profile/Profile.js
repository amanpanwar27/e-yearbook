import Styled from "styled-components";
import {React,useState} from "react";
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import "../universal.css";
const Profile = (props)=>{
    const [profilepic,setprofilepic] = useState(null);
    const changefilehandler = (e)=>{
        setprofilepic(URL.createObjectURL(e.target.files[0]));
    }
    console.log(profilepic);
    return <div>
    <Top>
    <input type="file" accept="image/*" onChange={(e)=>changefilehandler(e)}></input>
    </Top>
    <Container>
    <Left></Left>
    <Mid>
    <Avatar><img src="/testpics/test.jpg" alt="profile-pic"/><img src="/testpics/edit.png"/></Avatar>
    </Mid>
    <Right></Right>
    </Container>
    </div>
}
const Avatar = Styled.div`
@media screen and (max-width:760px){
    top:5px;
    width:42%;
    height:95%;
}
width:55%;
height:300px;
border:2px solid black;
border-radius:50%;
position:relative;
margin:auto;
top:25%;
&>img{
    width:100%;
    height:100%;
    border-radius:50%;
}
&>img:last-child{
    @media screen and (max-width:760px){
        width:30px;
        height:30px;
}
    width:50px;
    height:50px;
    position:relative;
    left:82%;
    bottom:30%;
    z-index:30;
}
`;
const Top = Styled.div`
background-color:red;
width:98vw;
height:120px;
/* margin-top:-48vh; */
/* margin-top:5px; */
border-radius:5px;
`;
const Container = Styled.div`
@media screen and (max-width:780px){
    flex-direction:column;
    padding-bottom:15px;
}
background-color:grey;
width:98vw;
height:600px;
margin-top:20px;
display:flex;
flex-direction:row;
justify-content:space-between;
border-radius:5px;
`;
const Mid = Styled.div`
@media screen and (max-width:780px){
    width:94%;
    margin-left:15px;
}
width:38%;
height:90%;
background:blue;
margin-top:15px;
border-radius:5px;
`;
const Left = Styled.div`
@media screen and (max-width:780px){
    width:94%;
}
width:29%;
height:90%;
background:green;
margin-left:15px;
margin-top:15px;
border-radius:5px;
display:flex;
flex-direction:column;
justify-content:space-between;
`;

const Right = Styled.div`
@media screen and (max-width:780px){
    width:94%;
    margin-left:15px;
}
width:29%;
height:90%;
background:yellow;
margin-right:15px;
margin-top:15px;
border-radius:5px;
`;


export default Profile;
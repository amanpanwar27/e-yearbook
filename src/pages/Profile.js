import Styled from "styled-components";
import React from "react";
import "./universal.css";
const Profile = (props)=>{
    return <div>
    <Top></Top>
    <Container>
    <Left></Left>
    <Mid></Mid>
    <Right></Right>
    </Container>
    </div>
}
const Top = Styled.div`
background-color:red;
width:98vw;
height:120px;
/* margin-top:-48vh; */
margin-top:50px;
border-radius:5px;
`;
const Container = Styled.div`
background-color:grey;
width:98vw;
height:700px;
margin-top:20px;
display:flex;
flex-direction:row;
justify-content:space-between;
border-radius:5px;
`;
const Mid = Styled.div`
width:38%;
height:90%;
background:blue;
margin-top:15px;
border-radius:5px;
`;
const Left = Styled.div`
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
width:29%;
height:90%;
background:yellow;
margin-right:15px;
margin-top:15px;
border-radius:5px;
`;


export default Profile;
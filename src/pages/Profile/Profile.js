import Styled from "styled-components";
import {React,useState} from "react";
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import "../universal.css";
const Profile = (props)=>{
    const [image,setimage] = useState(null);
    const [showmodal,setshowmodal] = useState(false);
    //  const [crop, setCrop] = useState({ aspect: 1 / 1 })
    // const [result,setresult] = useState(null);
    const [crop, setCrop] = useState({
        unit: 'px', // default, can be 'px' or '%'
        x: 130,
        y: 50,
        width: 200,
        height: 200
      });
    const changefilehandler = (e)=>{
        setimage(URL.createObjectURL(e.target.files[0]));
        setshowmodal(true);
    }
     const getCroppedImg = (image,crop)=>{
         console.log("its been called");
        const canvas = document.createElement("canvas");
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        const ctx = canvas.getContext("2d");
      
        const pixelRatio = window.devicePixelRatio || 1;
      
        canvas.width = crop.width * pixelRatio;
        canvas.height = crop.height * pixelRatio;
      
        ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        ctx.imageSmoothingQuality = "high";
      
        ctx.drawImage(
          image,
          crop.x * scaleX,
          crop.y * scaleY,
          crop.width * scaleX,
          crop.height * scaleY,
          0,
          0,
          crop.width,
          crop.height
        );
        const base64Image = canvas.toDataURL("image/jpeg");
        setimage(base64Image);
        setshowmodal(false);
        }
    return <div>
    <Top>
    </Top>
    {showmodal && <Modal>
        <Buttons>
        <button onClick={()=>{getCroppedImg(image,crop)}}>SAVE</button>
        <span><img src="/testpics/delete-button.png" onClick={()=>{setshowmodal(false)}}/></span>
        </Buttons>
        <div><ReactCrop src={image} crop={crop} onChange={newCrop => setCrop(newCrop)} /></div>
        </Modal>}
    <Container>
    <Left></Left>
    <Mid>   
    <Avatar><img src="/testpics/test.jpg" alt="profile-pic"/>
    <label for="input-pic">
    <img src="/testpics/edit.png"/></label>
    </Avatar>
    </Mid>
    <Right></Right>
    <input type="file" accept="image/*" id="input-pic" onChange={(e)=>changefilehandler(e)}/>
    </Container>
    </div>
}
const Buttons = Styled.div`
position:relative;
display:flex;
flex-direction:row;
justify-content:flex-end;
width:100vw;
padding-left:98%;
height:40px;
&>button{
    height:40px;
    margin-top:10px;
   
}

&>span{
    img{
    width:30px;
    height:30px;
    margin-top:6px;
    }
    margin-left:100px;
    margin-top:10px;
}

`;
const Modal = Styled.div`
position:   fixed;
top:0;
left:0;
right:0;
bottom:0;
background-color:rgba(0,0,0,0.88);
z-index:1000;
&>div{
    width:300px;
    height:300px;
    margin:auto;
    /* margin-top:10%; */
}
`;
const Avatar = Styled.div`
@media screen and (max-width:760px){
    top:5px;
    width:42%;
    height:95%;
}
width:48%;
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
&>label>img{
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
&>input{
    display:none;
}
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
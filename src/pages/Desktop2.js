import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Userimage from "../components/Userimage";
import RightArrow from "../components/RightArrow";
import "./Desktop2.css";
import oxygen from "./oxygen.png";
import bloodpressure from "./bloodpressure.png";
import temperature from "./temperature.png";

const Desktop2 = () => {
  const navigate = useNavigate();

  const onDesktop2ContainerClick = useCallback(() => {
    navigate("/desktop3");
  }, [navigate]);

  return (
    <div className="desktop-2" >

      <div className="temperature" style={{width:'230px', height:'310px', position:'absolute', zIndex:'2', left:'720px', top:'270px'}}>
        <img src={temperature} style={{width:'170px', height:'175px'}}></img>
        <p style={{textAlign:'center', fontSize:'30px', position:'relative', top:'-25px', fontWeight:'bold', color:'black'}}>TEMPERATURE<br/> 37 C</p>
      </div>
        
      <div className="bloodpressure" style={{width:'235px', height:'310px', position:'absolute', zIndex:'2', left:'970px', top:'270px'}}>
        <img src={bloodpressure} style={{width:'170px', height:'175px', position:'relative', left:'60px'}}></img>
        <p style={{textAlign:'center', fontSize:'30px', position:'relative', top:'-25px', fontWeight:'bold', color:'black'}}>BLOOD PRESSURE <br/> 120/80</p>
      </div>

      <div className="oxygen" style={{width:'280px', height:'310px', position:'absolute', zIndex:'2', left:'1220px', top:'270px'}}>
        <img src={oxygen} style={{width:'170px', height:'175px', position:'relative', left:'60px'}}></img>
        <p style={{textAlign:'center', fontSize:'30px', position:'relative', top:'-25px', fontWeight:'bold', color:'black'}}>OXYGEN LEVEL <br/> 96</p>
      </div>

      <img className="desktop-2-child" onClick={onDesktop2ContainerClick} alt="" src="/polygon-1.svg" style={{width:'550px', height:'550px', position:'relative', left:'110px', top:'175px'}}/>
      <Userimage />
      <div className="desktop-2-item" />
      <div className="desktop-2-inner" />
     <div style={{width:'220px', height:'220px'}}> <img className="lg1-1-icon1" alt="" src="/lg1-11@2x.png" style={{width:'150px', height:'150px', position:'absolute', zIndex:'2', top:'px', left:'1350px'}} /> ;</div> 
      <div className="male-container" style={{width:'350px', height:'300px', display:'flex', flexDirection:'column', position:'absolute', left:'205px', top:'370px'}}>
        <p className="arjun-jain" style={{textAlign:'center'}}>ARJUN JAIN</p>
        <p className="gender" style={{textAlign:'center'}}>Male</p>
        <p className="age" style={{margin:'0px',textAlign:'center'}}>
          <span className="span">21 years</span>
        </p>
        <p className="p" style={{textAlign:'center', marginTop:'10px'}}>93******56</p>
      </div>
      <b className="user-details">USER DETAILS:</b>
      <img className="polygon-icon" src="/polygon-11.svg" style={{width:'200px', height:'200px', position:'absolute', left:'275px'}} />
    </div>
  );
};

export default Desktop2;

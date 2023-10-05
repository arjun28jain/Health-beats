import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Desktop1.css";
import eSanjeevniLogo from './eSanjeevaniLogo.png';
import arrow from './arrow.png'

const Desktop1 = () => {
  const navigate = useNavigate();

  const onDesktop1Click = useCallback(() => {
    navigate("/desktop2");
  }, [navigate]);

  return (
    <div className="desktop-1">
       {/* onClick={onDesktop1Click} */}
       <img src={eSanjeevniLogo} style={{width:'200px', height:'60px', position:'relative',left:'1300px',zIndex:'1',top:'20px'}}/>
       <div> <button onClick={onDesktop1Click} style={{width:'100px', height:'100px', position:'relative',left:'1400px', top:'550px', backgroundColor:'#7dd588', border:'0px'}}> <img src={arrow} style={{width:'90px', height:'90px'}}/> </button></div>
       
      <div className="desktop-1-child"/>
      <div className="desktop-1-item" />
      <img className="lg1-1-icon" alt="" src="/lg1-1@2x.png" />
      <div className="desktop-1-inner" />
      <div className="welcome-to-swasthya-container">
        <p className="welcome-to-main" style={{position:'absolute', top:'-170px', left:'-125px', width:'400px'}}>Welcome to,</p>
        <p className="welcome-to-main" style={{position:'absolute', top:'-110px', left:'-125px',width:'500px'}}>Swasthya Nidhi !</p>
      </div>
      <div className="place-your-thumbprint-container">
        <p className="welcome-to">Place your thumbprint</p>
        <p className="welcome-to"> to</p>
      </div>
      <img
        className="background-copy-1"
        alt=""
        src="/background-copy-1@2x.png"
      />
      <div className="get-started">Get Started</div>
      <div className="div" style={{position: 'absolute',letterSpacing:'0.05em', left:'13px', fontSize:'25px', left:'600px', top:'690px'}}> “आरोग्यं परमं भाग्यं स्वास्थ्यं सर्वार्थसाधनम्” </div>
    </div>
  );
};

export default Desktop1;

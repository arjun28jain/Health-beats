import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Desktop1.css";

const Desktop1 = () => {
  const navigate = useNavigate();

  const onDesktop1Click = useCallback(() => {
    navigate("/desktop2");
  }, [navigate]);

  return (
    <div className="desktop-1" onClick={onDesktop1Click}>
      <div className="desktop-1-child" />
      <div className="desktop-1-item" />
      <img className="lg1-1-icon" alt="" src="/lg1-1@2x.png" />
      <div className="desktop-1-inner" />
      <div className="welcome-to-swasthya-container">
        <p className="welcome-to">Welcome to,</p>
        <p className="welcome-to">Swasthya Nidhi !</p>
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
      <div className="div">“आरोग्यं परमं भाग्यं स्वास्थ्यं सर्वार्थसाधनम्”</div>
    </div>
  );
};

export default Desktop1;

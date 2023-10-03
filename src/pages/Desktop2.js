import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Userimage from "../components/Userimage";
import RightArrow from "../components/RightArrow";
import "./Desktop2.css";

const Desktop2 = () => {
  const navigate = useNavigate();

  const onDesktop2ContainerClick = useCallback(() => {
    navigate("/desktop3");
  }, [navigate]);

  return (
    <div className="desktop-2" onClick={onDesktop2ContainerClick}>
      <img className="desktop-2-child" alt="" src="/polygon-1.svg" />
      <Userimage />
      <div className="desktop-2-item" />
      <div className="desktop-2-inner" />
      <img className="lg1-1-icon1" alt="" src="/lg1-11@2x.png" />
      <div className="arjun-jain-male-container">
        <p className="arjun-jain"> Arjun Jain</p>
        <p className="arjun-jain"> Male</p>
        <p className="yrs">
          <span className="span">{`    `}</span>
          <span className="span1">{` `}</span>
          <span className="span">{`21 yrs `}</span>
        </p>
        <p className="p"> 93******56</p>
      </div>
      <b className="user-details">User Details:</b>
      <RightArrow />
      <img className="polygon-icon" alt="" src="/polygon-11.svg" />
    </div>
  );
};

export default Desktop2;

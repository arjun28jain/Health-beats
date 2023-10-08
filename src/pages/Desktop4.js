import { useCallback } from "react";
import "./Desktop4.css";

const Desktop4 = () => {
  const onDesktop4ContainerClick = useCallback(() => {
    // Please sync "Desktop-5" to the project
  }, []);

  return (
    <div className="desktop-4" onClick={onDesktop4ContainerClick}>
      <div className="desktop-4-child" />
      <div className="desktop-4-item" />
      <img className="lg1-1-icon2" alt="" src="/lg1-11@2x.png" />
      <div className="desktop-4-inner" />
      <div className="rectangle-parent">
        <div className="group-child" />
        <b className="consult-to-doctor">Consult to doctor</b>
      </div>
      <img className="image-3-icon" alt="" src="/image-3@2x.png" />
      <p className="according-to-the-container">
        <p className="according-to-the" style={{width:'850px', textAlign:'justify', fontSize:'35px', wordSpacing:'1px', left:'50px', position:'relative', top:'-50px', fontFamily:'inherit', fontStyle:'bold'}}>According to the symptoms you are suffering with typhoid. Should consult a physician.</p>
      </p>
      <img className="vector-icon" alt="" src="/vector.svg" />
    </div>
  );
};

export default Desktop4;

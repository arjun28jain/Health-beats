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
      <b className="according-to-the-container">
        <p className="according-to-the">{`*According to the symptoms you are `}</p>
        <p className="according-to-the"> suffering with typhoid.</p>
        <p className="should-consult-a">*Should consult a physician.</p>
      </b>
      <img className="vector-icon" alt="" src="/vector.svg" />
    </div>
  );
};

export default Desktop4;

import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Desktop3.css";

const Desktop3 = () => {
  const navigate = useNavigate();

  const onDesktop3ContainerClick = useCallback(() => {
    navigate("/desktop4");
  }, [navigate]);

  return (
    <div className="desktop-3" onClick={onDesktop3ContainerClick}>
      <div className="desktop-3-child" />
      <div className="desktop-3-item" />
      <div className="desktop-3-inner" />
      <div className="ellipse-div" />
      <img className="rectangle-icon" alt="" src="/rectangle@2x.png" />
      <div className="desktop-3-child1" />
      <div className="rectangle-div" />
      <div className="desktop-3-child2" />
      <div className="desktop-3-child3" />
      <div className="desktop-3-child4" />
      <img className="lg1-1-icon3" alt="" src="/lg1-11@2x.png" />
      <div className="click-to-speak">Click to speak!</div>
      <img className="vector-icon1" alt="" src="/vector1.svg" />
      <img className="vector-icon2" alt="" src="/vector1.svg" />
      <img className="vector-icon3" alt="" src="/vector2.svg" />
      <div className="im-sorry-to-container">
        <p className="im-sorry-to">{`I’m sorry to hear that, Can `}</p>
        <p className="im-sorry-to">you tell me how long you’ve</p>
        <p className="im-sorry-to">had these symptoms?</p>
      </div>
      <div className="namaste-arjun-im">
        Namaste Arjun! I’m nidhibot, how can I assist you today?
      </div>
      <div className="namaste-ive-been-container">
        <p className="im-sorry-to">{`Namaste, I’ve been feeling `}</p>
        <p className="im-sorry-to">{`unwell. I have fever, headache `}</p>
        <p className="im-sorry-to">and persistent cough.</p>
      </div>
      <div className="div1">.......</div>
      <div className="nidhibot">nidhiBot</div>
      <div className="nidhibot1">nidhiBot</div>
      <img className="image-1-icon" alt="" src="/image-1@2x.png" />
      <img className="image-2-icon" alt="" src="/image-1@2x.png" />
    </div>
  );
};

export default Desktop3;

import React from "react";
import img_1 from "./assets/images/image_3.png";
const Slide8: React.FC = () => {
  return <div id="slide-8" className="w-screen h-screen overflow-hidden relative" style={{ backgroundColor: "#ffffff", color: "#000000" }}><div key={0} style={{
        position: "absolute",
        left: "13.2177vw",
        top: "92.9148vh",
        width: "94.9563vw",
        height: "5.3852vh",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "4.8px 9.6px 4.8px 9.6px",
        wordWrap: "break-word"
      }}><p style={{
          lineHeight: "1.2",
          fontSize: "1.6667vw",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "1.6667vw"
          }}>{"https://"}</span><span style={{
            fontSize: "1.6667vw"
          }}>{"ackodrive.com"}</span><span style={{
            fontSize: "1.6667vw"
          }}>{"/car-guide/autonomous-cars-and-levels-of-autonomous-driving/"}</span></p></div><img key={1} src={img_1} alt="/car-guide/autonomous-cars/" style={{
        position: "absolute",
        left: "0.0000vw",
        top: "9.2593vh",
        width: "100.0000vw",
        height: "81.4815vh",
        boxSizing: "border-box",
        objectFit: "fill"
      }} /></div>;
};
export default Slide8;

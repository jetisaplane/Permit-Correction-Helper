import React from "react";
import img_1 from "./assets/images/image_1.png";
import img_2 from "./assets/images/image_2.jpg";
const Slide4: React.FC = () => {
  return <div id="slide-4" className="w-screen h-screen overflow-hidden relative" style={{ backgroundColor: "#FFFFFF", color: "#000000" }}><div key={0} style={{
        position: "absolute",
        left: "5.0000vw",
        top: "3.5556vh",
        width: "24.3500vw",
        height: "11.5556vh",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "4.1667vw",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "4.1667vw",
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: "700",
            color: "#000000"
          }}>{"AI Canvas"}</span></p></div><svg key={1} viewBox="0 0 864 1" preserveAspectRatio="none" style={{
        position: "absolute",
        left: "5.0000vw",
        top: "16.0000vh",
        width: "90.0000vw",
        height: "0.1852vh",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="864" y2="0" stroke="#000000" strokeWidth="2" /></svg><div key={2} style={{
        position: "absolute",
        left: "5.0000vw",
        top: "17.7778vh",
        width: "90.0000vw",
        height: "7.1111vh",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "1.6667vw",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "1.6667vw",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#444444"
          }}>{"Agrawal, Gans, and Goldfarb (2018) designed the original canvas for supervised ML. Generative and agentic AI require new cells."}</span></p></div><img key={3} src={img_1} alt="Picture 4" style={{
        position: "absolute",
        left: "5.0000vw",
        top: "24.8889vh",
        width: "56.0802vw",
        height: "72.9500vh",
        boxSizing: "border-box",
        objectFit: "fill"
      }} /><div key={4} style={{
        position: "absolute",
        left: "64.7146vw",
        top: "27.7704vh",
        width: "26.6500vw",
        height: "67.1870vh",
        boxSizing: "border-box",
        overflow: "hidden"
      }}><img src={img_2} alt="Prediction Machines, Updated and Expanded - by  Ajay Agrawal & Joshua Gans & Avi Goldfarb (Hardcover), 1 of 1" style={{
          position: "absolute",
          left: "-8.6698vw",
          top: "0.0000vh",
          width: "43.7406vw",
          height: "67.1870vh",
          maxWidth: "none"
        }} /></div><div key={5} style={{
        position: "absolute",
        left: "36.7479vw",
        top: "3.3407vh",
        width: "62.1542vw",
        height: "11.5556vh",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "2.7778vw",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "2.7778vw",
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: "700",
            color: "#E9455F"
          }}>{"Designed at the \u201CPrediction\u201D Age"}</span></p></div></div>;
};
export default Slide4;

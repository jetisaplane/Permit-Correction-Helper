import React, { useState, useEffect, useRef } from "react";
import img_1 from "./assets/images/image_3.png";
const Slide8: React.FC = () => {
  const outerRef = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState({
    s: 1,
    x: 0,
    y: 0
  });
  useEffect(() => {
    const el = outerRef.current;
    if (!el) return;
    const update = () => {
      const w = el.clientWidth;
      const h = el.clientHeight;
      const s = Math.min(w / 960, h / 540);
      setLayout({
        s,
        x: (w - 960 * s) / 2,
        y: (h - 540 * s) / 2
      });
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return <div id="slide-8" ref={outerRef} className="w-screen h-screen overflow-hidden relative" style={{
    backgroundColor: "#000"
  }}><div id="slide-inner-8" style={{
      position: "absolute",
      width: "960px",
      height: "540px",
      overflow: "hidden",
      transformOrigin: "top left",
      color: "#000000",
      backgroundColor: "#ffffff",
      transform: `scale(${layout.s})`,
      left: layout.x + "px",
      top: layout.y + "px"
    }}><div key={0} style={{
        position: "absolute",
        left: "126.89px",
        top: "501.74px",
        width: "911.58px",
        height: "29.08px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "4.8px 9.6px 4.8px 9.6px",
        wordWrap: "break-word"
      }}><p style={{
          lineHeight: "1.2",
          fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(12pt * var(--pptx-font-scale, 1))"
          }}>{"https://"}</span><span style={{
            fontSize: "calc(12pt * var(--pptx-font-scale, 1))"
          }}>{"ackodrive.com"}</span><span style={{
            fontSize: "calc(12pt * var(--pptx-font-scale, 1))"
          }}>{"/car-guide/autonomous-cars-and-levels-of-autonomous-driving/"}</span></p></div><img key={1} src={img_1} alt="/car-guide/autonomous-cars/" style={{
        position: "absolute",
        left: "0px",
        top: "50px",
        width: "960px",
        height: "440px",
        boxSizing: "border-box",
        objectFit: "fill"
      }} /></div></div>;
};
export default Slide8;

import React, { useState, useEffect, useRef } from "react";
const Slide21: React.FC = () => {
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
  return <div id="slide-21" ref={outerRef} className="w-screen h-screen overflow-hidden relative" style={{
    backgroundColor: "#000"
  }}><div id="slide-inner-21" style={{
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
        left: "57.6px",
        top: "105.6px",
        width: "844.8px",
        height: "72px",
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
          fontSize: "calc(28pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(28pt * var(--pptx-font-scale, 1))",
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: "700"
          }}>{"BASICS asks whether you designed it responsibly."}</span></p></div><div key={1} style={{
        position: "absolute",
        left: "57.6px",
        top: "205.44px",
        width: "844.8px",
        height: "57.6px",
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
          fontSize: "calc(24pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(24pt * var(--pptx-font-scale, 1))",
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: "700"
          }}>{"Week 6 "}</span><span style={{
            fontSize: "calc(24pt * var(--pptx-font-scale, 1))",
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: "700"
          }}>{"Hackathon \u2014Week of 9/21."}</span></p></div><div key={2} style={{
        position: "absolute",
        left: "57.6px",
        top: "261.12px",
        width: "844.8px",
        height: "52.8px",
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
          fontSize: "calc(20pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontStyle: "italic",
            fontSize: "calc(20pt * var(--pptx-font-scale, 1))",
            fontFamily: "Georgia, 'Times New Roman', serif"
          }}>{"You build something. Then something is "}</span><span style={{
            fontStyle: "italic",
            fontSize: "calc(20pt * var(--pptx-font-scale, 1))",
            fontFamily: "Georgia, 'Times New Roman', serif"
          }}>{"revealed afterwards."}</span></p></div><div key={3} style={{
        position: "absolute",
        left: "57.6px",
        top: "328.32px",
        width: "844.8px",
        height: "48px",
        boxSizing: "border-box",
        backgroundColor: "transparent"
      }} /><svg key={4} style={{
        position: "absolute",
        left: "57.6px",
        top: "403.2px",
        width: "844.8px",
        height: "1px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="844.8" y2="0" stroke="#333333" strokeWidth="1.07" /></svg></div></div>;
};
export default Slide21;

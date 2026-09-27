import React, { useState, useEffect, useRef } from "react";
const Slide1: React.FC = () => {
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
  return <div id="slide-1" ref={outerRef} className="w-screen h-screen overflow-hidden relative" style={{
    backgroundColor: "#000"
  }}><div id="slide-inner-1" style={{
      position: "absolute",
      width: "960px",
      height: "540px",
      overflow: "hidden",
      transformOrigin: "top left",
      color: "#000000",
      backgroundColor: "#FFFFFF",
      transform: `scale(${layout.s})`,
      left: layout.x + "px",
      top: layout.y + "px"
    }}><div key={0} style={{
        position: "absolute",
        left: "57.6px",
        top: "96px",
        width: "864px",
        height: "230.4px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "center",
          lineHeight: "1.2",
          fontSize: "calc(52pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(52pt * var(--pptx-font-scale, 1))",
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: "700"
          }}>{"AI Canvas"}</span><span style={{
            fontSize: "calc(52pt * var(--pptx-font-scale, 1))"
          }}>{" "}</span><span style={{
            fontSize: "calc(52pt * var(--pptx-font-scale, 1))",
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: "700"
          }}>{"and Governance"}</span></p></div><svg key={1} style={{
        position: "absolute",
        left: "57.6px",
        top: "508.8px",
        width: "844.8px",
        height: "1px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="844.8" y2="0" stroke="#333333" strokeWidth="1" /></svg><div key={2} style={{
        position: "absolute",
        left: "48px",
        top: "345.6px",
        width: "864px",
        height: "48px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "center",
          lineHeight: "1.2",
          fontSize: "calc(20pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(20pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#666666"
          }}>{"BUS 297D"}</span></p><p style={{
          textAlign: "center",
          lineHeight: "1.2",
          fontSize: "calc(20pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(20pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#666666"
          }}>{"September 10"}</span><span style={{
            fontSize: "calc(20pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#666666"
          }}>{", 2026"}</span></p></div></div></div>;
};
export default Slide1;

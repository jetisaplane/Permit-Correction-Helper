import React, { useState, useEffect, useRef } from "react";
const Slide15: React.FC = () => {
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
  return <div id="slide-15" ref={outerRef} className="w-screen h-screen overflow-hidden relative" style={{
    backgroundColor: "#000"
  }}><div id="slide-inner-15" style={{
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
        left: "624px",
        top: "-48px",
        width: "384px",
        height: "480px",
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
          fontSize: "calc(220pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(220pt * var(--pptx-font-scale, 1))",
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: "700",
            color: "#EEECE8"
          }}>{"B"}</span></p></div><div key={1} style={{
        position: "absolute",
        left: "0px",
        top: "0px",
        width: "17.28px",
        height: "540px",
        boxSizing: "border-box",
        backgroundColor: "#E94560",
        border: "1.33px solid #E94560"
      }} /><div key={2} style={{
        position: "absolute",
        left: "38.4px",
        top: "19.2px",
        width: "883.2px",
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
          fontSize: "calc(30pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(30pt * var(--pptx-font-scale, 1))",
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: "700",
            color: "#1A1A2E"
          }}>{"B \u2014 Bias"}</span></p></div><div key={3} style={{
        position: "absolute",
        left: "38.4px",
        top: "84.48px",
        width: "624px",
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
            fontSize: "calc(20pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#E94560"
          }}>{"Who could be underserved or harmed by this system?"}</span></p></div><div key={4} style={{
        position: "absolute",
        left: "38.4px",
        top: "144px",
        width: "624px",
        height: "38.4px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          lineHeight: "1.2",
          fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontStyle: "italic",
            fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#888580"
          }}>{"Source: OMB M-24-10 \u2014 agencies must consider inequitable outcomes and evaluate whether AI use cases are rights- or safety-impacting"}</span></p></div><div key={5} style={{
        position: "absolute",
        left: "38.4px",
        top: "209.52px",
        width: "604.8px",
        height: "38.4px",
        boxSizing: "border-box",
        backgroundColor: "#1A1A2E",
        border: "1.33px solid #1A1A2E"
      }} /><div key={6} style={{
        position: "absolute",
        left: "49.92px",
        top: "216.84px",
        width: "585.6px",
        height: "21.12px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          lineHeight: "1.2",
          fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#FFFFFF"
          }}>{"Civic example \u2014 311 Illegal Dumping Intake"}</span></p></div><div key={7} style={{
        position: "absolute",
        left: "38.4px",
        top: "270px",
        width: "604.8px",
        height: "160.08px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          textIndent: "-36px",
          paddingLeft: "36px",
          fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            marginRight: "8px"
          }}>{"\u2022"}</span><span style={{
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#1A1A2E"
          }}>{"AI trained on English-language reports may perform worse on Spanish or Vietnamese messages"}</span></p><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          textIndent: "-36px",
          paddingLeft: "36px",
          fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            marginRight: "8px"
          }}>{"\u2022"}</span><span style={{
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#1A1A2E"
          }}>{"Neighborhoods with lower smartphone adoption submit fewer photo reports \u2014 AI sees less data from those areas"}</span></p><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          textIndent: "-36px",
          paddingLeft: "36px",
          fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            marginRight: "8px"
          }}>{"\u2022"}</span><span style={{
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#1A1A2E"
          }}>{"If urgency classification correlates with neighborhood, system could systematically deprioritize lower-income areas"}</span></p></div><div key={8} style={{
        position: "absolute",
        left: "26.88px",
        top: "443.52px",
        width: "604.8px",
        height: "74.88px",
        boxSizing: "border-box",
        backgroundColor: "#F0EEE9",
        border: "1.33px solid #D8D5CF"
      }} /><div key={9} style={{
        position: "absolute",
        left: "40.32px",
        top: "449.28px",
        width: "580.8px",
        height: "62.4px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          lineHeight: "1.2",
          fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontStyle: "italic",
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#1A1A2E"
          }}>{"Design question: "}</span><span style={{
            fontStyle: "italic",
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#1A1A2E"
          }}>{"Before deploying \u2014 test performance across languages, neighborhoods, and resident types. Not just on average."}</span></p></div></div></div>;
};
export default Slide15;

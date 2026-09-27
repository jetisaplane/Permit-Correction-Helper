import React, { useState, useEffect, useRef } from "react";
const Slide10: React.FC = () => {
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
  return <div id="slide-10" ref={outerRef} className="w-screen h-screen overflow-hidden relative" style={{
    backgroundColor: "#000"
  }}><div id="slide-inner-10" style={{
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
        left: "0px",
        top: "0px",
        width: "17.28px",
        height: "540px",
        boxSizing: "border-box",
        backgroundColor: "#E94560",
        border: "1.33px solid #E94560"
      }} /><div key={1} style={{
        position: "absolute",
        left: "38.4px",
        top: "21.12px",
        width: "883.2px",
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
          fontSize: "calc(26pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(26pt * var(--pptx-font-scale, 1))",
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: "700",
            color: "#1A1A2E"
          }}>{"AI Canvas \u2014 Section 2: The AI System"}</span></p></div><div key={2} style={{
        position: "absolute",
        left: "38.4px",
        top: "81.6px",
        width: "123.84px",
        height: "28.8px",
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
          fontSize: "calc(9pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(9pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#FFFFFF"
          }}>{"CELLS 4\u20138"}</span></p></div><div key={3} style={{
        position: "absolute",
        left: "26.88px",
        top: "115.2px",
        width: "67.2px",
        height: "69.12px",
        boxSizing: "border-box",
        backgroundColor: "#E94560",
        border: "1.33px solid #E94560"
      }} /><div key={4} style={{
        position: "absolute",
        left: "26.88px",
        top: "115.2px",
        width: "67.2px",
        height: "69.12px",
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
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: "700",
            color: "#FFFFFF"
          }}>{"4"}</span></p></div><div key={5} style={{
        position: "absolute",
        left: "100.8px",
        top: "115.2px",
        width: "830.4px",
        height: "69.12px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1.33px solid #D8D5CF"
      }} /><div key={6} style={{
        position: "absolute",
        left: "113.28px",
        top: "120.96px",
        width: "211.2px",
        height: "26.88px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          lineHeight: "1.2",
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#1A1A2E"
          }}>{"Agent Level"}</span></p></div><div key={7} style={{
        position: "absolute",
        left: "113.28px",
        top: "149.76px",
        width: "336px",
        height: "26.88px",
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
            color: "#888580"
          }}>{"How autonomous is this?"}</span></p></div><svg key={8} style={{
        position: "absolute",
        left: "460.8px",
        top: "124.8px",
        width: "1px",
        height: "49.92px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="0" y2="49.92" stroke="#D8D5CF" strokeWidth="1" /></svg><div key={9} style={{
        position: "absolute",
        left: "475.2px",
        top: "126.72px",
        width: "441.6px",
        height: "49.92px",
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
            color: "#888580"
          }}>{"e.g. Level 2 \u2014 configured Custom GPT with knowledge base"}</span></p></div><div key={10} style={{
        position: "absolute",
        left: "26.88px",
        top: "194.88px",
        width: "67.2px",
        height: "69.12px",
        boxSizing: "border-box",
        backgroundColor: "#E94560",
        border: "1.33px solid #E94560"
      }} /><div key={11} style={{
        position: "absolute",
        left: "26.88px",
        top: "194.88px",
        width: "67.2px",
        height: "69.12px",
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
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: "700",
            color: "#FFFFFF"
          }}>{"5"}</span></p></div><div key={12} style={{
        position: "absolute",
        left: "100.8px",
        top: "194.88px",
        width: "830.4px",
        height: "69.12px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1.33px solid #D8D5CF"
      }} /><div key={13} style={{
        position: "absolute",
        left: "113.28px",
        top: "200.64px",
        width: "211.2px",
        height: "26.88px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          lineHeight: "1.2",
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#1A1A2E"
          }}>{"Capability Chain"}</span></p></div><div key={14} style={{
        position: "absolute",
        left: "113.28px",
        top: "229.44px",
        width: "336px",
        height: "26.88px",
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
            color: "#888580"
          }}>{"Which technologies, in what sequence?"}</span></p></div><svg key={15} style={{
        position: "absolute",
        left: "460.8px",
        top: "204.48px",
        width: "1px",
        height: "49.92px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="0" y2="49.92" stroke="#D8D5CF" strokeWidth="1" /></svg><div key={16} style={{
        position: "absolute",
        left: "475.2px",
        top: "206.4px",
        width: "441.6px",
        height: "49.92px",
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
            color: "#888580"
          }}>{"e.g. Text generation \u2192 Structured extraction \u2192 Sheet write"}</span></p></div><div key={17} style={{
        position: "absolute",
        left: "26.88px",
        top: "274.56px",
        width: "67.2px",
        height: "69.12px",
        boxSizing: "border-box",
        backgroundColor: "#E94560",
        border: "1.33px solid #E94560"
      }} /><div key={18} style={{
        position: "absolute",
        left: "26.88px",
        top: "274.56px",
        width: "67.2px",
        height: "69.12px",
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
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: "700",
            color: "#FFFFFF"
          }}>{"6"}</span></p></div><div key={19} style={{
        position: "absolute",
        left: "100.8px",
        top: "274.56px",
        width: "830.4px",
        height: "69.12px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1.33px solid #D8D5CF"
      }} /><div key={20} style={{
        position: "absolute",
        left: "113.28px",
        top: "280.32px",
        width: "211.2px",
        height: "26.88px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          lineHeight: "1.2",
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#1A1A2E"
          }}>{"Input"}</span></p></div><div key={21} style={{
        position: "absolute",
        left: "113.28px",
        top: "309.12px",
        width: "336px",
        height: "26.88px",
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
            color: "#888580"
          }}>{"What does the primary persona submit?"}</span></p></div><svg key={22} style={{
        position: "absolute",
        left: "460.8px",
        top: "284.16px",
        width: "1px",
        height: "49.92px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="0" y2="49.92" stroke="#D8D5CF" strokeWidth="1" /></svg><div key={23} style={{
        position: "absolute",
        left: "475.2px",
        top: "286.08px",
        width: "441.6px",
        height: "49.92px",
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
            color: "#888580"
          }}>{"e.g. Free-text message in Spanish or English"}</span></p></div><div key={24} style={{
        position: "absolute",
        left: "26.88px",
        top: "354.24px",
        width: "67.2px",
        height: "69.12px",
        boxSizing: "border-box",
        backgroundColor: "#E94560",
        border: "1.33px solid #E94560"
      }} /><div key={25} style={{
        position: "absolute",
        left: "26.88px",
        top: "354.24px",
        width: "67.2px",
        height: "69.12px",
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
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: "700",
            color: "#FFFFFF"
          }}>{"7"}</span></p></div><div key={26} style={{
        position: "absolute",
        left: "100.8px",
        top: "354.24px",
        width: "830.4px",
        height: "69.12px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1.33px solid #D8D5CF"
      }} /><div key={27} style={{
        position: "absolute",
        left: "113.28px",
        top: "360px",
        width: "211.2px",
        height: "26.88px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          lineHeight: "1.2",
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#1A1A2E"
          }}>{"Output"}</span></p></div><div key={28} style={{
        position: "absolute",
        left: "113.28px",
        top: "388.8px",
        width: "336px",
        height: "26.88px",
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
            color: "#888580"
          }}>{"What does the secondary actor receive?"}</span></p></div><svg key={29} style={{
        position: "absolute",
        left: "460.8px",
        top: "363.84px",
        width: "1px",
        height: "49.92px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="0" y2="49.92" stroke="#D8D5CF" strokeWidth="1" /></svg><div key={30} style={{
        position: "absolute",
        left: "475.2px",
        top: "365.76px",
        width: "441.6px",
        height: "49.92px",
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
            color: "#888580"
          }}>{"e.g. Structured row: location, waste type, urgency, dept"}</span></p></div><div key={31} style={{
        position: "absolute",
        left: "26.88px",
        top: "433.92px",
        width: "67.2px",
        height: "69.12px",
        boxSizing: "border-box",
        backgroundColor: "#E94560",
        border: "1.33px solid #E94560"
      }} /><div key={32} style={{
        position: "absolute",
        left: "26.88px",
        top: "433.92px",
        width: "67.2px",
        height: "69.12px",
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
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: "700",
            color: "#FFFFFF"
          }}>{"8"}</span></p></div><div key={33} style={{
        position: "absolute",
        left: "100.8px",
        top: "433.92px",
        width: "830.4px",
        height: "69.12px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1.33px solid #D8D5CF"
      }} /><div key={34} style={{
        position: "absolute",
        left: "113.28px",
        top: "439.68px",
        width: "211.2px",
        height: "26.88px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          lineHeight: "1.2",
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#1A1A2E"
          }}>{"Action Tier"}</span></p></div><div key={35} style={{
        position: "absolute",
        left: "113.28px",
        top: "468.48px",
        width: "336px",
        height: "26.88px",
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
            color: "#888580"
          }}>{"Suggest / draft / execute at each step?"}</span></p></div><svg key={36} style={{
        position: "absolute",
        left: "460.8px",
        top: "443.52px",
        width: "1px",
        height: "49.92px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="0" y2="49.92" stroke="#D8D5CF" strokeWidth="1" /></svg><div key={37} style={{
        position: "absolute",
        left: "475.2px",
        top: "445.44px",
        width: "441.6px",
        height: "49.92px",
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
            color: "#888580"
          }}>{"e.g. Extract: execute. Route: draft only. Notify: suggest."}</span></p></div></div></div>;
};
export default Slide10;

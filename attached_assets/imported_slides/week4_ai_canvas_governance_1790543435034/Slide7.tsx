import React, { useState, useEffect, useRef } from "react";
const Slide7: React.FC = () => {
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
  return <div id="slide-7" ref={outerRef} className="w-screen h-screen overflow-hidden relative" style={{
    backgroundColor: "#000"
  }}><div id="slide-inner-7" style={{
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
          }}>{"AI Canvas \u2014 Section 1: The Problem"}</span></p></div><div key={2} style={{
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
          }}>{"CELLS 1\u20133"}</span></p></div><div key={3} style={{
        position: "absolute",
        left: "26.88px",
        top: "115.2px",
        width: "297.6px",
        height: "388.8px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1.33px solid #D8D5CF"
      }} /><div key={4} style={{
        position: "absolute",
        left: "26.88px",
        top: "115.2px",
        width: "297.6px",
        height: "46.08px",
        boxSizing: "border-box",
        backgroundColor: "#1A1A2E",
        border: "1.33px solid #1A1A2E"
      }} /><div key={5} style={{
        position: "absolute",
        left: "26.88px",
        top: "148.8px",
        width: "297.6px",
        height: "12.48px",
        boxSizing: "border-box",
        backgroundColor: "#1A1A2E",
        border: "1.33px solid #1A1A2E"
      }} /><div key={6} style={{
        position: "absolute",
        left: "38.4px",
        top: "120.96px",
        width: "67.2px",
        height: "28.8px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          lineHeight: "1.2",
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#F5A623"
          }}>{"Cell 1"}</span></p></div><div key={7} style={{
        position: "absolute",
        left: "38.4px",
        top: "120.96px",
        width: "273.6px",
        height: "28.8px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "right",
          lineHeight: "1.2",
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#FFFFFF"
          }}>{"Civic Problem"}</span></p></div><div key={8} style={{
        position: "absolute",
        left: "38.4px",
        top: "170.88px",
        width: "274.56px",
        height: "52.8px",
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
            color: "#1A1A2E"
          }}>{"What is broken in the current system?"}</span></p></div><svg key={9} style={{
        position: "absolute",
        left: "38.4px",
        top: "225.6px",
        width: "274.56px",
        height: "1px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="274.56" y2="0" stroke="#D8D5CF" strokeWidth="1" /></svg><div key={10} style={{
        position: "absolute",
        left: "38.4px",
        top: "254.4px",
        width: "274.56px",
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
            color: "#888580"
          }}>{"Civic example:"}</span></p></div><div key={11} style={{
        position: "absolute",
        left: "38.4px",
        top: "253.44px",
        width: "274.56px",
        height: "134.4px",
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
            color: "#1A1A2E"
          }}>{"Residents submit dumping reports by phone \u2014 each call requires manual data entry. Queue grows. Residents stop calling."}</span></p></div><div key={12} style={{
        position: "absolute",
        left: "38.4px",
        top: "408px",
        width: "274.56px",
        height: "74.88px",
        boxSizing: "border-box",
        backgroundColor: "#F0EEE9",
        border: "1.33px solid #D8D5CF"
      }} /><div key={13} style={{
        position: "absolute",
        left: "46.08px",
        top: "412.8px",
        width: "259.2px",
        height: "65.28px",
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
          }}>{"One sentence. Specific friction, not a category."}</span></p></div><div key={14} style={{
        position: "absolute",
        left: "336px",
        top: "115.2px",
        width: "297.6px",
        height: "388.8px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1.33px solid #D8D5CF"
      }} /><div key={15} style={{
        position: "absolute",
        left: "336px",
        top: "115.2px",
        width: "297.6px",
        height: "46.08px",
        boxSizing: "border-box",
        backgroundColor: "#1A1A2E",
        border: "1.33px solid #1A1A2E"
      }} /><div key={16} style={{
        position: "absolute",
        left: "336px",
        top: "148.8px",
        width: "297.6px",
        height: "12.48px",
        boxSizing: "border-box",
        backgroundColor: "#1A1A2E",
        border: "1.33px solid #1A1A2E"
      }} /><div key={17} style={{
        position: "absolute",
        left: "347.52px",
        top: "120.96px",
        width: "67.2px",
        height: "28.8px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          lineHeight: "1.2",
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#F5A623"
          }}>{"Cell 2"}</span></p></div><div key={18} style={{
        position: "absolute",
        left: "347.52px",
        top: "120.96px",
        width: "273.6px",
        height: "28.8px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "right",
          lineHeight: "1.2",
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#FFFFFF"
          }}>{"Primary Persona"}</span></p></div><div key={19} style={{
        position: "absolute",
        left: "347.52px",
        top: "170.88px",
        width: "274.56px",
        height: "52.8px",
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
            color: "#1A1A2E"
          }}>{"Who experiences friction most directly?"}</span></p></div><svg key={20} style={{
        position: "absolute",
        left: "347.52px",
        top: "225.6px",
        width: "274.56px",
        height: "1px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="274.56" y2="0" stroke="#D8D5CF" strokeWidth="1" /></svg><div key={21} style={{
        position: "absolute",
        left: "346.56px",
        top: "259.44px",
        width: "274.56px",
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
            color: "#888580"
          }}>{"Civic example:"}</span></p></div><div key={22} style={{
        position: "absolute",
        left: "347.52px",
        top: "253.44px",
        width: "274.56px",
        height: "134.4px",
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
            color: "#1A1A2E"
          }}>{"Maria \u2014 Spanish-speaking resident in East SJ who calls 311 but gives up when put on hold."}</span></p></div><div key={23} style={{
        position: "absolute",
        left: "347.52px",
        top: "408px",
        width: "274.56px",
        height: "74.88px",
        boxSizing: "border-box",
        backgroundColor: "#F0EEE9",
        border: "1.33px solid #D8D5CF"
      }} /><div key={24} style={{
        position: "absolute",
        left: "355.2px",
        top: "412.8px",
        width: "259.2px",
        height: "65.28px",
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
          }}>{"Not 'residents.' Named type, specific moment, specific workaround."}</span></p></div><div key={25} style={{
        position: "absolute",
        left: "645.12px",
        top: "115.2px",
        width: "297.6px",
        height: "388.8px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1.33px solid #D8D5CF"
      }} /><div key={26} style={{
        position: "absolute",
        left: "645.12px",
        top: "115.2px",
        width: "297.6px",
        height: "46.08px",
        boxSizing: "border-box",
        backgroundColor: "#1A1A2E",
        border: "1.33px solid #1A1A2E"
      }} /><div key={27} style={{
        position: "absolute",
        left: "645.12px",
        top: "148.8px",
        width: "297.6px",
        height: "12.48px",
        boxSizing: "border-box",
        backgroundColor: "#1A1A2E",
        border: "1.33px solid #1A1A2E"
      }} /><div key={28} style={{
        position: "absolute",
        left: "656.64px",
        top: "120.96px",
        width: "67.2px",
        height: "28.8px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          lineHeight: "1.2",
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#F5A623"
          }}>{"Cell 3"}</span></p></div><div key={29} style={{
        position: "absolute",
        left: "656.64px",
        top: "120.96px",
        width: "273.6px",
        height: "28.8px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "right",
          lineHeight: "1.2",
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#FFFFFF"
          }}>{"Secondary Actor"}</span></p></div><div key={30} style={{
        position: "absolute",
        left: "656.64px",
        top: "170.88px",
        width: "274.56px",
        height: "52.8px",
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
            color: "#1A1A2E"
          }}>{"Who acts on the AI output?"}</span></p></div><svg key={31} style={{
        position: "absolute",
        left: "656.64px",
        top: "225.6px",
        width: "274.56px",
        height: "1px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="274.56" y2="0" stroke="#D8D5CF" strokeWidth="1" /></svg><div key={32} style={{
        position: "absolute",
        left: "655.68px",
        top: "256.32px",
        width: "274.56px",
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
            color: "#888580"
          }}>{"Civic example:"}</span></p></div><div key={33} style={{
        position: "absolute",
        left: "656.64px",
        top: "253.44px",
        width: "274.56px",
        height: "134.4px",
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
            color: "#1A1A2E"
          }}>{"311 Operations Supervisor who reviews flagged cases before routing to field crews."}</span></p></div><div key={34} style={{
        position: "absolute",
        left: "656.64px",
        top: "408px",
        width: "274.56px",
        height: "74.88px",
        boxSizing: "border-box",
        backgroundColor: "#F0EEE9",
        border: "1.33px solid #D8D5CF"
      }} /><div key={35} style={{
        position: "absolute",
        left: "664.32px",
        top: "412.8px",
        width: "259.2px",
        height: "65.28px",
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
          }}>{"The staff member or system that receives and must decide."}</span></p></div></div></div>;
};
export default Slide7;

import React, { useState, useEffect, useRef } from "react";
const Slide13: React.FC = () => {
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
  return <div id="slide-13" ref={outerRef} className="w-screen h-screen overflow-hidden relative" style={{
    backgroundColor: "#000"
  }}><div id="slide-inner-13" style={{
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
        left: "48px",
        top: "19.2px",
        width: "864px",
        height: "62.4px",
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
            color: "#000000"
          }}>{"BASICS \u2014 design governance"}</span></p></div><svg key={1} style={{
        position: "absolute",
        left: "48px",
        top: "86.4px",
        width: "864px",
        height: "1px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="864" y2="0" stroke="#000000" strokeWidth="2" /></svg><div key={2} style={{
        position: "absolute",
        left: "48.04px",
        top: "105.36px",
        width: "810.16px",
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
          fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#888888"
          }}>{"Adapted from "}</span></p><p style={{
          lineHeight: "1.2",
          textIndent: "-30px",
          paddingLeft: "30px",
          fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            marginRight: "8px"
          }}>{"\u2022"}</span><span style={{
            fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#888888"
          }}>{"NIST AI RMF (Risk Management Framework): Govern, Map, Measure, Manage | Risk management across lifecycle "}</span></p><p style={{
          lineHeight: "1.2",
          textIndent: "-30px",
          paddingLeft: "30px",
          fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            marginRight: "8px"
          }}>{"\u2022"}</span><span style={{
            fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#888888"
          }}>{"OMB M-24-10 (US Federal Policy for AI, Office of Management and Budget): impact + accountability"}</span></p></div><div key={3} style={{
        position: "absolute",
        left: "48px",
        top: "244.8px",
        width: "412.8px",
        height: "264px",
        boxSizing: "border-box",
        backgroundColor: "#F5F5F5",
        border: "1px solid #CCCCCC"
      }} /><div key={4} style={{
        position: "absolute",
        left: "48px",
        top: "244.8px",
        width: "412.8px",
        height: "50.88px",
        boxSizing: "border-box",
        backgroundColor: "#000000",
        border: "1.33px solid #000000"
      }} /><div key={5} style={{
        position: "absolute",
        left: "59.52px",
        top: "259.44px",
        width: "393.6px",
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
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#FFFFFF"
          }}>{"BASICS \u2014 design governance"}</span></p></div><div key={6} style={{
        position: "absolute",
        left: "59.52px",
        top: "321.84px",
        width: "384px",
        height: "201.6px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          textIndent: "-36px",
          paddingLeft: "36px",
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            marginRight: "8px"
          }}>{"\u2022"}</span><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#000000"
          }}>{"Prospective \u2014 before you build"}</span></p><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          textIndent: "-36px",
          paddingLeft: "36px",
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            marginRight: "8px"
          }}>{"\u2022"}</span><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#000000"
          }}>{"Internal \u2014 you evaluate your own design"}</span></p><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          textIndent: "-36px",
          paddingLeft: "36px",
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            marginRight: "8px"
          }}>{"\u2022"}</span><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#000000"
          }}>{"Question: did we design this responsibly?"}</span></p><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          textIndent: "-36px",
          paddingLeft: "36px",
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            marginRight: "8px"
          }}>{"\u2022"}</span><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#000000"
          }}>{"Used in Week 4 \u2014 today"}</span></p></div><div key={7} style={{
        position: "absolute",
        left: "489.6px",
        top: "244.8px",
        width: "441.6px",
        height: "264px",
        boxSizing: "border-box",
        backgroundColor: "#F0F0F0",
        border: "1px solid #CCCCCC"
      }} /><div key={8} style={{
        position: "absolute",
        left: "489.6px",
        top: "244.8px",
        width: "441.6px",
        height: "50.88px",
        boxSizing: "border-box",
        backgroundColor: "#444444",
        border: "1.33px solid #444444"
      }} /><div key={9} style={{
        position: "absolute",
        left: "501.12px",
        top: "259.44px",
        width: "422.4px",
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
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#FFFFFF"
          }}>{"TRACE \u2014 deployment accountability "}</span></p></div><div key={10} style={{
        position: "absolute",
        left: "501.12px",
        top: "321.84px",
        width: "403.2px",
        height: "173.28px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          textIndent: "-36px",
          paddingLeft: "36px",
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            marginRight: "8px"
          }}>{"\u2022"}</span><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#000000"
          }}>{"Retrospective \u2014 after you build"}</span></p><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          textIndent: "-36px",
          paddingLeft: "36px",
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            marginRight: "8px"
          }}>{"\u2022"}</span><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#000000"
          }}>{"External \u2014 someone else attacks your prototype"}</span></p><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          textIndent: "-36px",
          paddingLeft: "36px",
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            marginRight: "8px"
          }}>{"\u2022"}</span><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#000000"
          }}>{"Question: can we stand behind what we built?"}</span></p><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          textIndent: "-36px",
          paddingLeft: "36px",
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            marginRight: "8px"
          }}>{"\u2022"}</span><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#000000"
          }}>{"Revealed in Week 7 \u2014 after the hackathon"}</span></p></div><div key={11} style={{
        position: "absolute",
        left: "48px",
        top: "191.32px",
        width: "912px",
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
          textIndent: "-30px",
          paddingLeft: "30px",
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            marginRight: "8px"
          }}>{"\u2022"}</span><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))"
          }}>{"AI systems don\u2019t just serve users\u2014they "}</span><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontWeight: "700"
          }}>{"reshape work, responsibility, and risk inside institutions"}</span><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))"
          }}>{"."}</span></p><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          textIndent: "-30px",
          paddingLeft: "30px",
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            marginRight: "8px"
          }}>{"\u2022"}</span><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif"
          }}>{"BASICS is self-governance. Red teaming is adversarial testing. "}</span></p></div></div></div>;
};
export default Slide13;

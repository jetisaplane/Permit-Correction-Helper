import React, { useState, useEffect, useRef } from "react";
const Slide14: React.FC = () => {
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
  return <div id="slide-14" ref={outerRef} className="w-screen h-screen overflow-hidden relative" style={{
    backgroundColor: "#000"
  }}><div id="slide-inner-14" style={{
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
          }}>{"BASICS \u2014 6 questions, 2 actors"}</span></p></div><svg key={1} style={{
        position: "absolute",
        left: "48px",
        top: "86.4px",
        width: "864px",
        height: "1px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="864" y2="0" stroke="#000000" strokeWidth="2" /></svg><div key={2} style={{
        position: "absolute",
        left: "48.96px",
        top: "92.16px",
        width: "864px",
        height: "33.6px",
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
            fontStyle: "italic",
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#444444"
          }}>{"Complete for primary persona AND secondary actor. "}</span></p></div><div key={3} style={{
        position: "absolute",
        left: "48.96px",
        top: "131.52px",
        width: "883.2px",
        height: "36.48px",
        boxSizing: "border-box",
        backgroundColor: "#000000",
        border: "1.33px solid #000000"
      }} /><div key={4} style={{
        position: "absolute",
        left: "56.64px",
        top: "139.2px",
        width: "40.32px",
        height: "21.12px",
        boxSizing: "border-box",
        backgroundColor: "transparent"
      }} /><div key={5} style={{
        position: "absolute",
        left: "114.24px",
        top: "139.2px",
        width: "211.2px",
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
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#FFFFFF"
          }}>{"Question"}</span></p></div><div key={6} style={{
        position: "absolute",
        left: "344.64px",
        top: "139.2px",
        width: "268.8px",
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
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#FFFFFF"
          }}>{"Ask yourself"}</span></p></div><div key={7} style={{
        position: "absolute",
        left: "632.64px",
        top: "139.2px",
        width: "278.4px",
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
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#FFFFFF"
          }}>{"311 example answer"}</span></p></div><div key={8} style={{
        position: "absolute",
        left: "48.96px",
        top: "168px",
        width: "55.68px",
        height: "61.44px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1px solid #CCCCCC"
      }} /><div key={9} style={{
        position: "absolute",
        left: "106.56px",
        top: "168px",
        width: "157.44px",
        height: "61.44px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1px solid #CCCCCC"
      }} /><div key={10} style={{
        position: "absolute",
        left: "265.92px",
        top: "168px",
        width: "370.53px",
        height: "61.44px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1px solid #CCCCCC"
      }} /><div key={11} style={{
        position: "absolute",
        left: "624.96px",
        top: "168px",
        width: "307.2px",
        height: "61.44px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1px solid #CCCCCC"
      }} /><div key={12} style={{
        position: "absolute",
        left: "48.96px",
        top: "168px",
        width: "55.68px",
        height: "61.44px",
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
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: "700",
            color: "#000000"
          }}>{"B"}</span></p></div><div key={13} style={{
        position: "absolute",
        left: "114.24px",
        top: "173.76px",
        width: "206.4px",
        height: "51.84px",
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
            color: "#000000"
          }}>{"Bias"}</span></p></div><div key={14} style={{
        position: "absolute",
        left: "273.6px",
        top: "173.76px",
        width: "351.36px",
        height: "51.84px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          lineHeight: "1.2",
          fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#000000"
          }}>{"Who could be underserved or harmed?"}</span></p></div><div key={15} style={{
        position: "absolute",
        left: "632.64px",
        top: "173.76px",
        width: "292.8px",
        height: "51.84px",
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
            color: "#444444"
          }}>{"Spanish-speaking residents if model accuracy drops on non-English messages"}</span></p></div><div key={16} style={{
        position: "absolute",
        left: "48.96px",
        top: "229.44px",
        width: "55.68px",
        height: "61.44px",
        boxSizing: "border-box",
        backgroundColor: "#F8F8F8",
        border: "1px solid #CCCCCC"
      }} /><div key={17} style={{
        position: "absolute",
        left: "106.56px",
        top: "229.44px",
        width: "157.44px",
        height: "61.44px",
        boxSizing: "border-box",
        backgroundColor: "#F8F8F8",
        border: "1px solid #CCCCCC"
      }} /><div key={18} style={{
        position: "absolute",
        left: "265.92px",
        top: "229.44px",
        width: "370.53px",
        height: "61.44px",
        boxSizing: "border-box",
        backgroundColor: "#F8F8F8",
        border: "1px solid #CCCCCC"
      }} /><div key={19} style={{
        position: "absolute",
        left: "624.96px",
        top: "229.44px",
        width: "307.2px",
        height: "61.44px",
        boxSizing: "border-box",
        backgroundColor: "#F8F8F8",
        border: "1px solid #CCCCCC"
      }} /><div key={20} style={{
        position: "absolute",
        left: "48.96px",
        top: "229.44px",
        width: "55.68px",
        height: "61.44px",
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
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: "700",
            color: "#000000"
          }}>{"A"}</span></p></div><div key={21} style={{
        position: "absolute",
        left: "114.24px",
        top: "235.2px",
        width: "206.4px",
        height: "51.84px",
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
            color: "#000000"
          }}>{"Action tier"}</span></p></div><div key={22} style={{
        position: "absolute",
        left: "273.6px",
        top: "235.2px",
        width: "351.36px",
        height: "51.84px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          lineHeight: "1.2",
          fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#000000"
          }}>{"What is automated vs. approved at each step?"}</span></p></div><div key={23} style={{
        position: "absolute",
        left: "632.64px",
        top: "235.2px",
        width: "292.8px",
        height: "51.84px",
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
            color: "#444444"
          }}>{"Extract: execute \xB7 Route: draft \xB7 Notify: suggest \u2014 maps to Cell 8"}</span></p></div><div key={24} style={{
        position: "absolute",
        left: "48.96px",
        top: "290.88px",
        width: "55.68px",
        height: "61.44px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1px solid #CCCCCC"
      }} /><div key={25} style={{
        position: "absolute",
        left: "106.56px",
        top: "290.88px",
        width: "157.44px",
        height: "61.44px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1px solid #CCCCCC"
      }} /><div key={26} style={{
        position: "absolute",
        left: "265.92px",
        top: "290.88px",
        width: "370.53px",
        height: "61.44px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1px solid #CCCCCC"
      }} /><div key={27} style={{
        position: "absolute",
        left: "624.96px",
        top: "290.88px",
        width: "307.2px",
        height: "61.44px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1px solid #CCCCCC"
      }} /><div key={28} style={{
        position: "absolute",
        left: "48.96px",
        top: "290.88px",
        width: "55.68px",
        height: "61.44px",
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
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: "700",
            color: "#000000"
          }}>{"S"}</span></p></div><div key={29} style={{
        position: "absolute",
        left: "114.24px",
        top: "296.64px",
        width: "206.4px",
        height: "51.84px",
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
            color: "#000000"
          }}>{"Stakeholder"}</span></p></div><div key={30} style={{
        position: "absolute",
        left: "273.6px",
        top: "296.64px",
        width: "351.36px",
        height: "51.84px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          lineHeight: "1.2",
          fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#000000"
          }}>{"Who is the named accountable owner?"}</span></p></div><div key={31} style={{
        position: "absolute",
        left: "632.64px",
        top: "296.64px",
        width: "292.8px",
        height: "51.84px",
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
            color: "#444444"
          }}>{"Not the department \u2014 a specific named role reachable at 9pm when system fails"}</span></p></div><div key={32} style={{
        position: "absolute",
        left: "48.96px",
        top: "352.32px",
        width: "55.68px",
        height: "61.44px",
        boxSizing: "border-box",
        backgroundColor: "#F8F8F8",
        border: "1px solid #CCCCCC"
      }} /><div key={33} style={{
        position: "absolute",
        left: "106.56px",
        top: "352.32px",
        width: "157.44px",
        height: "61.44px",
        boxSizing: "border-box",
        backgroundColor: "#F8F8F8",
        border: "1px solid #CCCCCC"
      }} /><div key={34} style={{
        position: "absolute",
        left: "265.92px",
        top: "352.32px",
        width: "370.53px",
        height: "61.44px",
        boxSizing: "border-box",
        backgroundColor: "#F8F8F8",
        border: "1px solid #CCCCCC"
      }} /><div key={35} style={{
        position: "absolute",
        left: "624.96px",
        top: "352.32px",
        width: "307.2px",
        height: "61.44px",
        boxSizing: "border-box",
        backgroundColor: "#F8F8F8",
        border: "1px solid #CCCCCC"
      }} /><div key={36} style={{
        position: "absolute",
        left: "48.96px",
        top: "352.32px",
        width: "55.68px",
        height: "61.44px",
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
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: "700",
            color: "#000000"
          }}>{"I"}</span></p></div><div key={37} style={{
        position: "absolute",
        left: "114.24px",
        top: "358.08px",
        width: "206.4px",
        height: "51.84px",
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
            color: "#000000"
          }}>{"Intervention"}</span></p></div><div key={38} style={{
        position: "absolute",
        left: "273.6px",
        top: "358.08px",
        width: "351.36px",
        height: "51.84px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          lineHeight: "1.2",
          fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#000000"
          }}>{"Where exactly does a human stay in the loop?"}</span></p></div><div key={39} style={{
        position: "absolute",
        left: "632.64px",
        top: "358.08px",
        width: "292.8px",
        height: "51.84px",
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
            color: "#444444"
          }}>{"Supervisor reviews before routing notification sends \u2014 with override authority"}</span></p></div><div key={40} style={{
        position: "absolute",
        left: "48.96px",
        top: "413.76px",
        width: "55.68px",
        height: "61.44px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1px solid #CCCCCC"
      }} /><div key={41} style={{
        position: "absolute",
        left: "106.56px",
        top: "413.76px",
        width: "157.44px",
        height: "61.44px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1px solid #CCCCCC"
      }} /><div key={42} style={{
        position: "absolute",
        left: "265.92px",
        top: "413.76px",
        width: "370.53px",
        height: "61.44px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1px solid #CCCCCC"
      }} /><div key={43} style={{
        position: "absolute",
        left: "624.96px",
        top: "413.76px",
        width: "307.2px",
        height: "61.44px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1px solid #CCCCCC"
      }} /><div key={44} style={{
        position: "absolute",
        left: "48.96px",
        top: "413.76px",
        width: "55.68px",
        height: "61.44px",
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
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: "700",
            color: "#000000"
          }}>{"C"}</span></p></div><div key={45} style={{
        position: "absolute",
        left: "114.24px",
        top: "419.52px",
        width: "206.4px",
        height: "51.84px",
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
            color: "#000000"
          }}>{"Contract"}</span></p></div><div key={46} style={{
        position: "absolute",
        left: "273.6px",
        top: "419.52px",
        width: "351.36px",
        height: "51.84px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          lineHeight: "1.2",
          fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#000000"
          }}>{"What must the vendor guarantee before deployment?"}</span></p></div><div key={47} style={{
        position: "absolute",
        left: "632.64px",
        top: "419.52px",
        width: "292.8px",
        height: "51.84px",
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
            color: "#444444"
          }}>{"Audit rights \xB7 24hr incident notification \xB7 immediate shutdown clause"}</span></p></div><div key={48} style={{
        position: "absolute",
        left: "48.96px",
        top: "475.2px",
        width: "55.68px",
        height: "61.44px",
        boxSizing: "border-box",
        backgroundColor: "#F8F8F8",
        border: "1px solid #CCCCCC"
      }} /><div key={49} style={{
        position: "absolute",
        left: "106.56px",
        top: "475.2px",
        width: "157.44px",
        height: "61.44px",
        boxSizing: "border-box",
        backgroundColor: "#F8F8F8",
        border: "1px solid #CCCCCC"
      }} /><div key={50} style={{
        position: "absolute",
        left: "265.92px",
        top: "475.2px",
        width: "370.53px",
        height: "61.44px",
        boxSizing: "border-box",
        backgroundColor: "#F8F8F8",
        border: "1px solid #CCCCCC"
      }} /><div key={51} style={{
        position: "absolute",
        left: "624.96px",
        top: "475.2px",
        width: "307.2px",
        height: "61.44px",
        boxSizing: "border-box",
        backgroundColor: "#F8F8F8",
        border: "1px solid #CCCCCC"
      }} /><div key={52} style={{
        position: "absolute",
        left: "48.96px",
        top: "475.2px",
        width: "55.68px",
        height: "61.44px",
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
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: "700",
            color: "#000000"
          }}>{"S"}</span></p></div><div key={53} style={{
        position: "absolute",
        left: "114.24px",
        top: "480.96px",
        width: "206.4px",
        height: "51.84px",
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
            color: "#000000"
          }}>{"Scope"}</span></p></div><div key={54} style={{
        position: "absolute",
        left: "273.6px",
        top: "480.96px",
        width: "351.36px",
        height: "51.84px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          lineHeight: "1.2",
          fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#000000"
          }}>{"What resident rights or services are affected?"}</span></p></div><div key={55} style={{
        position: "absolute",
        left: "632.64px",
        top: "480.96px",
        width: "292.8px",
        height: "51.84px",
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
            color: "#444444"
          }}>{"Rights-impacting \u2192 stronger controls required by OMB M-24-10"}</span></p></div></div></div>;
};
export default Slide14;

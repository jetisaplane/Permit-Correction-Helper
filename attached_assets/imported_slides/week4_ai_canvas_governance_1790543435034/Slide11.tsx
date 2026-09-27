import React, { useState, useEffect, useRef } from "react";
const Slide11: React.FC = () => {
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
  return <div id="slide-11" ref={outerRef} className="w-screen h-screen overflow-hidden relative" style={{
    backgroundColor: "#000"
  }}><div id="slide-inner-11" style={{
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
        left: "38.4px",
        top: "0px",
        width: "883.2px",
        height: "105.6px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          lineHeight: "1.2",
          fontSize: "calc(32pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(32pt * var(--pptx-font-scale, 1))",
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: "700"
          }}>{"Cell 8 \u2014 Action Tier"}</span></p></div><div key={1} style={{
        position: "absolute",
        left: "33.6px",
        top: "123.84px",
        width: "892.8px",
        height: "117.12px",
        boxSizing: "border-box",
        backgroundColor: "#E9455F",
        border: "1.33px solid #000000"
      }} /><div key={2} style={{
        position: "absolute",
        left: "47.04px",
        top: "123.84px",
        width: "167.04px",
        height: "117.12px",
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
          fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: "700",
            color: "#FFFFFF",
            letterSpacing: "3pt"
          }}>{"EXECUTE"}</span></p></div><svg key={3} style={{
        position: "absolute",
        left: "193.92px",
        top: "135.36px",
        width: "1px",
        height: "96px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="0" y2="96" stroke="#555555" strokeWidth="1.33" /></svg><div key={4} style={{
        position: "absolute",
        left: "241.44px",
        top: "96.96px",
        width: "220.8px",
        height: "21.12px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
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
            fontWeight: "700"
          }}>{"Definition"}</span></p></div><div key={5} style={{
        position: "absolute",
        left: "210.24px",
        top: "152.64px",
        width: "239.04px",
        height: "74.88px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
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
            color: "#FFFFFF"
          }}>{"AI acts automatically. No human step before action occurs."}</span></p></div><svg key={6} style={{
        position: "absolute",
        left: "452.16px",
        top: "135.36px",
        width: "1px",
        height: "96px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="0" y2="96" stroke="#555555" strokeWidth="1.33" /></svg><div key={7} style={{
        position: "absolute",
        left: "480px",
        top: "96.96px",
        width: "206.4px",
        height: "21.12px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
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
            fontWeight: "700"
          }}>{"Use when"}</span></p></div><div key={8} style={{
        position: "absolute",
        left: "465.6px",
        top: "149.76px",
        width: "206.4px",
        height: "74.88px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
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
            color: "#FFFFFF"
          }}>{"Only for low-stakes, reversible, well-tested steps."}</span></p></div><svg key={9} style={{
        position: "absolute",
        left: "657.6px",
        top: "135.36px",
        width: "1px",
        height: "96px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="0" y2="96" stroke="#555555" strokeWidth="1.33" /></svg><div key={10} style={{
        position: "absolute",
        left: "721.92px",
        top: "94.08px",
        width: "213.12px",
        height: "21.12px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
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
            fontWeight: "700"
          }}>{"Example"}</span></p></div><div key={11} style={{
        position: "absolute",
        left: "682.56px",
        top: "137.28px",
        width: "213.12px",
        height: "74.88px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
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
            color: "#FFFFFF"
          }}>{"Extracting complaint text from a form submission and writing to a draft row in Google Sheet."}</span></p></div><div key={12} style={{
        position: "absolute",
        left: "33.6px",
        top: "257.28px",
        width: "892.8px",
        height: "117.12px",
        boxSizing: "border-box",
        backgroundColor: "rgba(233, 69, 95, 0.7)",
        border: "1.33px solid #444444"
      }} /><div key={13} style={{
        position: "absolute",
        left: "47.04px",
        top: "257.28px",
        width: "167.04px",
        height: "117.12px",
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
          fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: "700",
            letterSpacing: "3pt"
          }}>{"DRAFT"}</span></p></div><svg key={14} style={{
        position: "absolute",
        left: "193.92px",
        top: "268.8px",
        width: "1px",
        height: "96px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="0" y2="96" stroke="#555555" strokeWidth="1.33" /></svg><div key={15} style={{
        position: "absolute",
        left: "214.08px",
        top: "278.88px",
        width: "241.92px",
        height: "74.88px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          lineHeight: "1.2",
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif"
          }}>{"AI proposes an action. Named human approves before anything happens."}</span></p></div><svg key={16} style={{
        position: "absolute",
        left: "452.16px",
        top: "268.8px",
        width: "1px",
        height: "96px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="0" y2="96" stroke="#555555" strokeWidth="1.33" /></svg><div key={17} style={{
        position: "absolute",
        left: "462.24px",
        top: "264.96px",
        width: "206.4px",
        height: "74.88px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          lineHeight: "1.2",
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif"
          }}>{"Routing decisions, notifications, any output seen by residents."}</span></p></div><svg key={18} style={{
        position: "absolute",
        left: "657.6px",
        top: "268.8px",
        width: "1px",
        height: "96px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="0" y2="96" stroke="#555555" strokeWidth="1.33" /></svg><div key={19} style={{
        position: "absolute",
        left: "682.56px",
        top: "264px",
        width: "213.12px",
        height: "74.88px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
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
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif"
          }}>{"311 supervisor reviews AI-classified urgency and department routing before case moves to crew queue."}</span></p></div><div key={20} style={{
        position: "absolute",
        left: "33.6px",
        top: "368.64px",
        width: "892.8px",
        height: "117.12px",
        boxSizing: "border-box",
        backgroundColor: "#F8F8F8",
        border: "1.33px solid #F8F8F8"
      }} /><div key={21} style={{
        position: "absolute",
        left: "47.04px",
        top: "368.64px",
        width: "167.04px",
        height: "117.12px",
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
          fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: "700",
            color: "#000000",
            letterSpacing: "3pt"
          }}>{"SUGGEST"}</span></p></div><svg key={22} style={{
        position: "absolute",
        left: "193.92px",
        top: "380.16px",
        width: "1px",
        height: "96px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="0" y2="96" stroke="#CCCCCC" strokeWidth="1.33" /></svg><div key={23} style={{
        position: "absolute",
        left: "206.4px",
        top: "397.44px",
        width: "249.6px",
        height: "74.88px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
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
            color: "#000000"
          }}>{"AI surfaces information. Human makes decision independently."}</span></p></div><svg key={24} style={{
        position: "absolute",
        left: "452.16px",
        top: "380.16px",
        width: "1px",
        height: "96px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="0" y2="96" stroke="#CCCCCC" strokeWidth="1.33" /></svg><div key={25} style={{
        position: "absolute",
        left: "464.16px",
        top: "391.68px",
        width: "206.4px",
        height: "74.88px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
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
            color: "#000000"
          }}>{"High-stakes decisions, policy calls, novel situations."}</span></p></div><svg key={26} style={{
        position: "absolute",
        left: "657.6px",
        top: "380.16px",
        width: "1px",
        height: "96px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="0" y2="96" stroke="#CCCCCC" strokeWidth="1.33" /></svg><div key={27} style={{
        position: "absolute",
        left: "682.56px",
        top: "382.08px",
        width: "213.12px",
        height: "74.88px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
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
            color: "#000000"
          }}>{"AI flags a report as possible hazmat. Supervisor decides whether to escalate \u2014 AI does not trigger escalation."}</span></p></div><div key={28} style={{
        position: "absolute",
        left: "2.4px",
        top: "502.08px",
        width: "926.4px",
        height: "26.88px",
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
          fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontStyle: "italic",
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#888888"
          }}>{"Your canvas must label every step. "}</span><span style={{
            fontStyle: "italic",
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#FF0000"
          }}>{"'AI sends the notification' "}</span><span style={{
            fontStyle: "italic",
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#888888"
          }}>{"without specifying the tier is not an answer \u2014 it is a governance gap."}</span></p></div><div key={29} style={{
        position: "absolute",
        left: "500.16px",
        top: "26.88px",
        width: "345.47px",
        height: "45.12px",
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
            color: "#CC2936"
          }}>{"Civic problems: "}</span></p><p style={{
          lineHeight: "1.2",
          fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#CC2936"
          }}>{"higher impact; stronger human checkpoints"}</span></p></div></div></div>;
};
export default Slide11;

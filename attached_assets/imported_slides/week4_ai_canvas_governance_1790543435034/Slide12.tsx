import React, { useState, useEffect, useRef } from "react";
const Slide12: React.FC = () => {
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
  return <div id="slide-12" ref={outerRef} className="w-screen h-screen overflow-hidden relative" style={{
    backgroundColor: "#000"
  }}><div id="slide-inner-12" style={{
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
          fontSize: "calc(20pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(20pt * var(--pptx-font-scale, 1))",
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: "700",
            color: "#1A1A2E"
          }}>{"AI Canvas \u2014 Section 3: Oversight + Reality Check"}</span></p></div><div key={2} style={{
        position: "absolute",
        left: "26.88px",
        top: "84.48px",
        width: "216px",
        height: "163.2px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1.33px solid #D8D5CF"
      }} /><div key={3} style={{
        position: "absolute",
        left: "26.88px",
        top: "84.48px",
        width: "216px",
        height: "33.6px",
        boxSizing: "border-box",
        backgroundColor: "#16213E",
        border: "1.33px solid #16213E"
      }} /><div key={4} style={{
        position: "absolute",
        left: "26.88px",
        top: "105.6px",
        width: "216px",
        height: "12.48px",
        boxSizing: "border-box",
        backgroundColor: "#16213E",
        border: "1.33px solid #16213E"
      }} /><div key={5} style={{
        position: "absolute",
        left: "36.48px",
        top: "86.4px",
        width: "199.68px",
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
            fontWeight: "700",
            color: "#FFFFFF"
          }}>{"9 \xB7 Intervention Point"}</span></p></div><div key={6} style={{
        position: "absolute",
        left: "36.48px",
        top: "122.88px",
        width: "199.68px",
        height: "113.28px",
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
            color: "#1A1A2E"
          }}>{"Supervisor reviews Sheet row before routing notification sends"}</span></p></div><div key={7} style={{
        position: "absolute",
        left: "255.36px",
        top: "84.48px",
        width: "216px",
        height: "163.2px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1.33px solid #D8D5CF"
      }} /><div key={8} style={{
        position: "absolute",
        left: "255.36px",
        top: "84.48px",
        width: "216px",
        height: "33.6px",
        boxSizing: "border-box",
        backgroundColor: "#16213E",
        border: "1.33px solid #16213E"
      }} /><div key={9} style={{
        position: "absolute",
        left: "255.36px",
        top: "105.6px",
        width: "216px",
        height: "12.48px",
        boxSizing: "border-box",
        backgroundColor: "#16213E",
        border: "1.33px solid #16213E"
      }} /><div key={10} style={{
        position: "absolute",
        left: "264.96px",
        top: "86.4px",
        width: "199.68px",
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
            fontWeight: "700",
            color: "#FFFFFF"
          }}>{"10 \xB7 Override Mechanism"}</span></p></div><div key={11} style={{
        position: "absolute",
        left: "264.96px",
        top: "122.88px",
        width: "199.68px",
        height: "113.28px",
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
            color: "#1A1A2E"
          }}>{"Supervisor changes status from PENDING to REJECTED in Sheet"}</span></p></div><div key={12} style={{
        position: "absolute",
        left: "483.84px",
        top: "84.48px",
        width: "216px",
        height: "163.2px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1.33px solid #D8D5CF"
      }} /><div key={13} style={{
        position: "absolute",
        left: "483.84px",
        top: "84.48px",
        width: "216px",
        height: "33.6px",
        boxSizing: "border-box",
        backgroundColor: "#16213E",
        border: "1.33px solid #16213E"
      }} /><div key={14} style={{
        position: "absolute",
        left: "483.84px",
        top: "105.6px",
        width: "216px",
        height: "12.48px",
        boxSizing: "border-box",
        backgroundColor: "#16213E",
        border: "1.33px solid #16213E"
      }} /><div key={15} style={{
        position: "absolute",
        left: "493.44px",
        top: "86.4px",
        width: "199.68px",
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
            fontWeight: "700",
            color: "#FFFFFF"
          }}>{"11 \xB7 Failure Mode"}</span></p></div><div key={16} style={{
        position: "absolute",
        left: "493.44px",
        top: "122.88px",
        width: "199.68px",
        height: "113.28px",
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
            color: "#1A1A2E"
          }}>{"AI misclassifies hazmat as LOW urgency \u2014 no expedited response"}</span></p></div><div key={17} style={{
        position: "absolute",
        left: "712.32px",
        top: "84.48px",
        width: "216px",
        height: "163.2px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1.33px solid #D8D5CF"
      }} /><div key={18} style={{
        position: "absolute",
        left: "712.32px",
        top: "84.48px",
        width: "216px",
        height: "33.6px",
        boxSizing: "border-box",
        backgroundColor: "#16213E",
        border: "1.33px solid #16213E"
      }} /><div key={19} style={{
        position: "absolute",
        left: "712.32px",
        top: "105.6px",
        width: "216px",
        height: "12.48px",
        boxSizing: "border-box",
        backgroundColor: "#16213E",
        border: "1.33px solid #16213E"
      }} /><div key={20} style={{
        position: "absolute",
        left: "721.92px",
        top: "86.4px",
        width: "216px",
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
            fontWeight: "700",
            color: "#FFFFFF"
          }}>{"12 \xB7 Accountability Owner"}</span></p></div><div key={21} style={{
        position: "absolute",
        left: "721.92px",
        top: "122.88px",
        width: "199.68px",
        height: "113.28px",
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
            color: "#1A1A2E"
          }}>{"311 Operations Manager \u2014 named individual, not the department"}</span></p></div><div key={22} style={{
        position: "absolute",
        left: "26.88px",
        top: "264px",
        width: "907.2px",
        height: "36.48px",
        boxSizing: "border-box",
        backgroundColor: "#E94560",
        border: "1.33px solid #E94560"
      }} /><div key={23} style={{
        position: "absolute",
        left: "40.32px",
        top: "268.8px",
        width: "883.2px",
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
            fontWeight: "700",
            color: "#FFFFFF"
          }}>{"CELL 13 \u2014 Reality Check  (required before canvas is approved)"}</span></p></div><div key={24} style={{
        position: "absolute",
        left: "26.88px",
        top: "307.2px",
        width: "216px",
        height: "209.28px",
        boxSizing: "border-box",
        backgroundColor: "#FFF0F2",
        border: "1.33px solid #E94560"
      }} /><div key={25} style={{
        position: "absolute",
        left: "36.48px",
        top: "314.88px",
        width: "199.68px",
        height: "30.72px",
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
            color: "#E94560"
          }}>{"A \xB7 Prototype sentence"}</span></p></div><div key={26} style={{
        position: "absolute",
        left: "36.48px",
        top: "347.52px",
        width: "199.68px",
        height: "158.4px",
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
            color: "#1A1A2E"
          }}>{"\"In our demo, [named persona] will [specific action] and the AI will [specific output] and [named role] will [approve/reject] before anything happens.\""}</span></p></div><div key={27} style={{
        position: "absolute",
        left: "255.36px",
        top: "307.2px",
        width: "216px",
        height: "209.28px",
        boxSizing: "border-box",
        backgroundColor: "#FFF0F2",
        border: "1.33px solid #E94560"
      }} /><div key={28} style={{
        position: "absolute",
        left: "264.96px",
        top: "314.88px",
        width: "199.68px",
        height: "30.72px",
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
            color: "#E94560"
          }}>{"B \xB7 Data check"}</span></p></div><div key={29} style={{
        position: "absolute",
        left: "264.96px",
        top: "347.52px",
        width: "199.68px",
        height: "158.4px",
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
            color: "#1A1A2E"
          }}>{"List every input \u2192 mark "}</span><span style={{
            fontStyle: "italic",
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            color: "#FF0000"
          }}>{"available"}</span><span style={{
            fontStyle: "italic",
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))"
          }}>{" / "}</span><span style={{
            fontStyle: "italic",
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            color: "#FF0000"
          }}>{"can directly collect"}</span><span style={{
            fontStyle: "italic",
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))"
          }}>{"  "}</span><span style={{
            fontStyle: "italic",
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            color: "#FF0000"
          }}>{"/ can get from API "}</span><span style={{
            fontStyle: "italic",
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))"
          }}>{"/ "}</span><span style={{
            fontStyle: "italic",
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            color: "#FF0000"
          }}>{"assume available "}</span><span style={{
            fontStyle: "italic",
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))"
          }}>{"/ "}</span><span style={{
            fontStyle: "italic",
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            color: "#FF0000"
          }}>{"not feasible"}</span><span style={{
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            color: "#FF0000"
          }}>{" "}</span></p></div><div key={30} style={{
        position: "absolute",
        left: "483.84px",
        top: "307.2px",
        width: "216px",
        height: "209.28px",
        boxSizing: "border-box",
        backgroundColor: "#FFF0F2",
        border: "1.33px solid #E94560"
      }} /><div key={31} style={{
        position: "absolute",
        left: "493.44px",
        top: "314.88px",
        width: "199.68px",
        height: "30.72px",
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
            color: "#E94560"
          }}>{"C \xB7 Capability audit"}</span></p></div><div key={32} style={{
        position: "absolute",
        left: "493.44px",
        top: "347.52px",
        width: "199.68px",
        height: "158.4px",
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
            color: "#1A1A2E"
          }}>{"Circle the ONE capability that addresses the most important friction. This is the "}</span><span style={{
            fontStyle: "italic",
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#FF0000"
          }}>{"most important part "}</span><span style={{
            fontStyle: "italic",
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#1A1A2E"
          }}>{"for your prototype."}</span></p></div><div key={33} style={{
        position: "absolute",
        left: "712.32px",
        top: "307.2px",
        width: "216px",
        height: "209.28px",
        boxSizing: "border-box",
        backgroundColor: "#FFF0F2",
        border: "1.33px solid #E94560"
      }} /><div key={34} style={{
        position: "absolute",
        left: "721.92px",
        top: "314.88px",
        width: "199.68px",
        height: "30.72px",
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
            color: "#E94560"
          }}>{"D \xB7 Gap statement"}</span></p></div><div key={35} style={{
        position: "absolute",
        left: "721.92px",
        top: "347.52px",
        width: "199.68px",
        height: "158.4px",
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
            color: "#1A1A2E"
          }}>{"\"Our prototype proves [capability]. The full vision also requires [2\u20133 things]. Those are recommendations, not our prototype.\""}</span></p></div></div></div>;
};
export default Slide12;

import React, { useState, useEffect, useRef } from "react";
const Slide6: React.FC = () => {
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
  return <div id="slide-6" ref={outerRef} className="w-screen h-screen overflow-hidden relative" style={{
    backgroundColor: "#000"
  }}><div id="slide-inner-6" style={{
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
          }}>{"AI Canvas \u2014 Cells 1\u201312 (Cell 13 Reality Check follows)"}</span></p></div><svg key={1} style={{
        position: "absolute",
        left: "48px",
        top: "86.4px",
        width: "864px",
        height: "1px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="864" y2="0" stroke="#000000" strokeWidth="2" /></svg><div key={2} style={{
        position: "absolute",
        left: "48px",
        top: "100.8px",
        width: "280.32px",
        height: "417.6px",
        boxSizing: "border-box",
        backgroundColor: "#F5F5F5",
        border: "1px solid #CCCCCC"
      }} /><div key={3} style={{
        position: "absolute",
        left: "48px",
        top: "100.8px",
        width: "280.32px",
        height: "36.48px",
        boxSizing: "border-box",
        backgroundColor: "#000000",
        border: "1.33px solid #000000"
      }} /><div key={4} style={{
        position: "absolute",
        left: "57.6px",
        top: "107.52px",
        width: "261.12px",
        height: "23.04px",
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
          }}>{"1 \u2014 The Problem"}</span></p></div><svg key={5} style={{
        position: "absolute",
        left: "57.6px",
        top: "146.88px",
        width: "261.12px",
        height: "1px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="261.12" y2="0" stroke="#CCCCCC" strokeWidth="1" /></svg><div key={6} style={{
        position: "absolute",
        left: "59.52px",
        top: "168.54px",
        width: "257.28px",
        height: "69.12px",
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
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#000000"
          }}>{"Cell 1: Civic problem "}</span><span style={{
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#000000"
          }}>{"\u2014 one sentence, specific friction from your Problem Brief"}</span></p></div><svg key={7} style={{
        position: "absolute",
        left: "53.76px",
        top: "262.95px",
        width: "261.12px",
        height: "1px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="261.12" y2="0" stroke="#CCCCCC" strokeWidth="1" /></svg><div key={8} style={{
        position: "absolute",
        left: "57.6px",
        top: "290.88px",
        width: "257.28px",
        height: "69.12px",
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
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#000000"
          }}>{"Cell 2: Primary persona "}</span><span style={{
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#000000"
          }}>{"\u2014 the WHO at the specific moment of breakdown (fill individually first)"}</span></p></div><svg key={9} style={{
        position: "absolute",
        left: "55.68px",
        top: "393.06px",
        width: "261.12px",
        height: "1px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="261.12" y2="0" stroke="#CCCCCC" strokeWidth="1" /></svg><div key={10} style={{
        position: "absolute",
        left: "57.6px",
        top: "414.72px",
        width: "257.28px",
        height: "69.12px",
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
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#000000"
          }}>{"Cell 3: Secondary actor "}</span><span style={{
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#000000"
          }}>{"\u2014 the city staff or system that acts on the AI output"}</span></p></div><div key={11} style={{
        position: "absolute",
        left: "339.84px",
        top: "100.8px",
        width: "280.32px",
        height: "417.6px",
        boxSizing: "border-box",
        backgroundColor: "#F5F5F5",
        border: "1px solid #CCCCCC"
      }} /><div key={12} style={{
        position: "absolute",
        left: "339.84px",
        top: "100.8px",
        width: "280.32px",
        height: "36.48px",
        boxSizing: "border-box",
        backgroundColor: "#000000",
        border: "1.33px solid #000000"
      }} /><div key={13} style={{
        position: "absolute",
        left: "349.44px",
        top: "107.52px",
        width: "261.12px",
        height: "23.04px",
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
          }}>{"2 \u2014 The AI System"}</span></p></div><svg key={14} style={{
        position: "absolute",
        left: "349.44px",
        top: "146.88px",
        width: "261.12px",
        height: "1px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="261.12" y2="0" stroke="#CCCCCC" strokeWidth="1" /></svg><div key={15} style={{
        position: "absolute",
        left: "351.36px",
        top: "160.48px",
        width: "257.28px",
        height: "69.12px",
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
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#000000"
          }}>{"Cell 4: Agent level "}</span><span style={{
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#000000"
          }}>{"\u2014 1\u20135, one sentence justification"}</span></p></div><svg key={16} style={{
        position: "absolute",
        left: "349.44px",
        top: "220.8px",
        width: "261.12px",
        height: "1px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="261.12" y2="0" stroke="#CCCCCC" strokeWidth="1" /></svg><div key={17} style={{
        position: "absolute",
        left: "351.36px",
        top: "236.64px",
        width: "257.28px",
        height: "69.12px",
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
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#000000"
          }}>{"Cell 5: Capability "}</span><span style={{
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#000000"
          }}>{"\u2014 which technologies, in what sequence"}</span></p></div><svg key={18} style={{
        position: "absolute",
        left: "349.44px",
        top: "294.72px",
        width: "261.12px",
        height: "1px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="261.12" y2="0" stroke="#CCCCCC" strokeWidth="1" /></svg><div key={19} style={{
        position: "absolute",
        left: "351.36px",
        top: "308.64px",
        width: "257.28px",
        height: "69.12px",
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
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#000000"
          }}>{"Cell 6: Input "}</span><span style={{
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#000000"
          }}>{"\u2014 what the primary persona submits, what modality"}</span></p></div><svg key={20} style={{
        position: "absolute",
        left: "349.44px",
        top: "368.64px",
        width: "261.12px",
        height: "1px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="261.12" y2="0" stroke="#CCCCCC" strokeWidth="1" /></svg><div key={21} style={{
        position: "absolute",
        left: "351.36px",
        top: "374.4px",
        width: "257.28px",
        height: "69.12px",
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
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#000000"
          }}>{"Cell 7: Output "}</span><span style={{
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#000000"
          }}>{"\u2014 what the primary/secondary actor receives, what format"}</span></p></div><svg key={22} style={{
        position: "absolute",
        left: "349.44px",
        top: "449.28px",
        width: "261.12px",
        height: "1px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="261.12" y2="0" stroke="#CCCCCC" strokeWidth="1" /></svg><div key={23} style={{
        position: "absolute",
        left: "351.36px",
        top: "459.3px",
        width: "257.28px",
        height: "69.12px",
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
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#000000"
          }}>{"Cell 8: Action tier "}</span><span style={{
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#000000"
          }}>{"\u2014 suggest / draft / execute at each step"}</span></p></div><div key={24} style={{
        position: "absolute",
        left: "631.68px",
        top: "100.8px",
        width: "280.32px",
        height: "417.6px",
        boxSizing: "border-box",
        backgroundColor: "#F5F5F5",
        border: "1px solid #CCCCCC"
      }} /><div key={25} style={{
        position: "absolute",
        left: "631.68px",
        top: "100.8px",
        width: "280.32px",
        height: "36.48px",
        boxSizing: "border-box",
        backgroundColor: "#000000",
        border: "1.33px solid #000000"
      }} /><div key={26} style={{
        position: "absolute",
        left: "641.28px",
        top: "107.52px",
        width: "261.12px",
        height: "23.04px",
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
          }}>{"3 \u2014 Human Oversight"}</span></p></div><svg key={27} style={{
        position: "absolute",
        left: "641.28px",
        top: "146.88px",
        width: "261.12px",
        height: "1px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="261.12" y2="0" stroke="#CCCCCC" strokeWidth="1" /></svg><div key={28} style={{
        position: "absolute",
        left: "643.2px",
        top: "152.75px",
        width: "257.28px",
        height: "69.12px",
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
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#000000"
          }}>{"Cell 9: Intervention point "}</span><span style={{
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#000000"
          }}>{"\u2014 specific step, specific person, specific decision"}</span></p></div><svg key={29} style={{
        position: "absolute",
        left: "641.28px",
        top: "229.6px",
        width: "261.12px",
        height: "1px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="261.12" y2="0" stroke="#CCCCCC" strokeWidth="1" /></svg><div key={30} style={{
        position: "absolute",
        left: "643.2px",
        top: "241.32px",
        width: "257.28px",
        height: "69.12px",
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
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#000000"
          }}>{"Cell 10: Override mechanism "}</span><span style={{
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#000000"
          }}>{"\u2014 how a human stops or reverses an AI action"}</span></p></div><svg key={31} style={{
        position: "absolute",
        left: "641.28px",
        top: "324.88px",
        width: "261.12px",
        height: "1px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="261.12" y2="0" stroke="#CCCCCC" strokeWidth="1" /></svg><div key={32} style={{
        position: "absolute",
        left: "641.28px",
        top: "333.95px",
        width: "257.28px",
        height: "69.12px",
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
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#000000"
          }}>{"Cell 11: Failure mode "}</span><span style={{
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#000000"
          }}>{"\u2014 most likely wrong output and downstream consequence"}</span></p></div><svg key={33} style={{
        position: "absolute",
        left: "641.28px",
        top: "415.78px",
        width: "261.12px",
        height: "1px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="261.12" y2="0" stroke="#CCCCCC" strokeWidth="1" /></svg><div key={34} style={{
        position: "absolute",
        left: "643.2px",
        top: "435.23px",
        width: "257.28px",
        height: "69.12px",
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
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#000000"
          }}>{"Cell 12: Accountability owner "}</span><span style={{
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#000000"
          }}>{"\u2014 named role (not department) responsible for this system"}</span></p></div><div key={35} style={{
        position: "absolute",
        left: "48px",
        top: "513.6px",
        width: "864px",
        height: "28.8px",
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
          fontSize: "calc(10pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontStyle: "italic",
            fontSize: "calc(10pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#888888"
          }}>{"Rule: if a cell could have been written without your Problem Brief and AI Opportunity Memo \u2014 it will not score well."}</span></p></div><div key={36} style={{
        position: "absolute",
        left: "42.93px",
        top: "266.93px",
        width: "19.39px",
        height: "38.78px",
        boxSizing: "border-box",
        backgroundColor: "transparent"
      }} /></div></div>;
};
export default Slide6;

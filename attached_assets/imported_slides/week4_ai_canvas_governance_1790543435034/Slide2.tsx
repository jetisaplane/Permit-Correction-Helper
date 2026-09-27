import React, { useState, useEffect, useRef } from "react";
const Slide2: React.FC = () => {
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
  return <div id="slide-2" ref={outerRef} className="w-screen h-screen overflow-hidden relative" style={{
    backgroundColor: "#000"
  }}><div id="slide-inner-2" style={{
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
        left: "28.8px",
        top: "19.2px",
        width: "931.2px",
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
          }}>{"The course arc \u2014 "}</span><span style={{
            fontSize: "calc(20pt * var(--pptx-font-scale, 1))",
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: "700",
            color: "#000000"
          }}>{"6 AI roles, 1 consulting project"}</span></p></div><svg key={1} style={{
        position: "absolute",
        left: "48px",
        top: "86.4px",
        width: "864px",
        height: "1px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="864" y2="0" stroke="#000000" strokeWidth="2" /></svg><div key={2} style={{
        position: "absolute",
        left: "28.8px",
        top: "135.36px",
        width: "139.2px",
        height: "326.4px",
        boxSizing: "border-box",
        backgroundColor: "#F5F5F5",
        border: "1px solid #CCCCCC"
      }} /><div key={3} style={{
        position: "absolute",
        left: "38.4px",
        top: "146.88px",
        width: "120px",
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
          fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#888888"
          }}>{"Week 1\u20132"}</span></p></div><div key={4} style={{
        position: "absolute",
        left: "38.4px",
        top: "204.48px",
        width: "120px",
        height: "52.8px",
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
          fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: "700",
            color: "#000000"
          }}>{"Ethnographer"}</span></p></div><svg key={5} style={{
        position: "absolute",
        left: "43.2px",
        top: "264.96px",
        width: "110.4px",
        height: "1px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="110.4" y2="0" stroke="#CCCCCC" strokeWidth="1" /></svg><div key={6} style={{
        position: "absolute",
        left: "38.4px",
        top: "274.56px",
        width: "120px",
        height: "172.8px",
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
            color: "#000000"
          }}>{"\"What is actually broken?\""}</span></p></div><div key={7} style={{
        position: "absolute",
        left: "177.6px",
        top: "135.36px",
        width: "139.2px",
        height: "326.4px",
        boxSizing: "border-box",
        backgroundColor: "#F5F5F5",
        border: "1px solid #CCCCCC"
      }} /><div key={8} style={{
        position: "absolute",
        left: "187.2px",
        top: "146.88px",
        width: "120px",
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
          fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#888888"
          }}>{"Week 3"}</span></p></div><div key={9} style={{
        position: "absolute",
        left: "187.2px",
        top: "204.48px",
        width: "120px",
        height: "52.8px",
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
          fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: "700",
            color: "#000000"
          }}>{"Explorer"}</span></p></div><svg key={10} style={{
        position: "absolute",
        left: "192px",
        top: "264.96px",
        width: "110.4px",
        height: "1px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="110.4" y2="0" stroke="#CCCCCC" strokeWidth="1" /></svg><div key={11} style={{
        position: "absolute",
        left: "187.2px",
        top: "274.56px",
        width: "120px",
        height: "172.8px",
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
            color: "#000000"
          }}>{"\"What can AI do?\""}</span></p></div><div key={12} style={{
        position: "absolute",
        left: "326.4px",
        top: "135.36px",
        width: "139.2px",
        height: "326.4px",
        boxSizing: "border-box",
        backgroundColor: "#000000",
        border: "2px solid #000000"
      }} /><div key={13} style={{
        position: "absolute",
        left: "336px",
        top: "146.88px",
        width: "120px",
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
          fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#AAAAAA"
          }}>{"Week 4"}</span></p><p style={{
          textAlign: "center",
          lineHeight: "1.2",
          fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#AAAAAA"
          }}>{"Canvas"}</span></p></div><div key={14} style={{
        position: "absolute",
        left: "336px",
        top: "204.48px",
        width: "120px",
        height: "52.8px",
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
          fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: "700",
            color: "#FFFFFF"
          }}>{"Designer"}</span></p></div><svg key={15} style={{
        position: "absolute",
        left: "340.8px",
        top: "264.96px",
        width: "110.4px",
        height: "1px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="110.4" y2="0" stroke="#555555" strokeWidth="1" /></svg><div key={16} style={{
        position: "absolute",
        left: "336px",
        top: "274.56px",
        width: "120px",
        height: "172.8px",
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
            color: "#FFFFFF"
          }}>{"\"What are we building?\""}</span></p></div><div key={17} style={{
        position: "absolute",
        left: "475.2px",
        top: "135.36px",
        width: "139.2px",
        height: "326.4px",
        boxSizing: "border-box",
        backgroundColor: "#000000",
        border: "2px solid #000000"
      }} /><div key={18} style={{
        position: "absolute",
        left: "484.8px",
        top: "146.88px",
        width: "120px",
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
          fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#AAAAAA"
          }}>{"Week 4"}</span></p><p style={{
          textAlign: "center",
          lineHeight: "1.2",
          fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#AAAAAA"
          }}>{"BASICS"}</span></p></div><div key={19} style={{
        position: "absolute",
        left: "484.8px",
        top: "204.48px",
        width: "120px",
        height: "52.8px",
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
          fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: "700",
            color: "#FFFFFF"
          }}>{"Auditor"}</span></p></div><svg key={20} style={{
        position: "absolute",
        left: "489.6px",
        top: "264.96px",
        width: "110.4px",
        height: "1px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="110.4" y2="0" stroke="#555555" strokeWidth="1" /></svg><div key={21} style={{
        position: "absolute",
        left: "484.8px",
        top: "274.56px",
        width: "120px",
        height: "172.8px",
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
            color: "#FFFFFF"
          }}>{"\"Can we stand behind this?\""}</span></p></div><div key={22} style={{
        position: "absolute",
        left: "624px",
        top: "135.36px",
        width: "139.2px",
        height: "326.4px",
        boxSizing: "border-box",
        backgroundColor: "#F5F5F5",
        border: "1px solid #CCCCCC"
      }} /><div key={23} style={{
        position: "absolute",
        left: "633.6px",
        top: "146.88px",
        width: "120px",
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
          fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#888888"
          }}>{"Week 5"}</span></p><p style={{
          textAlign: "center",
          lineHeight: "1.2",
          fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#888888"
          }}>{"Hackathon"}</span></p></div><div key={24} style={{
        position: "absolute",
        left: "633.6px",
        top: "204.48px",
        width: "120px",
        height: "52.8px",
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
          fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: "700",
            color: "#000000"
          }}>{"Builder"}</span></p></div><svg key={25} style={{
        position: "absolute",
        left: "638.4px",
        top: "264.96px",
        width: "110.4px",
        height: "1px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="110.4" y2="0" stroke="#CCCCCC" strokeWidth="1" /></svg><div key={26} style={{
        position: "absolute",
        left: "633.6px",
        top: "274.56px",
        width: "120px",
        height: "172.8px",
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
            color: "#000000"
          }}>{"\"Can we prove it works?\""}</span></p></div><div key={27} style={{
        position: "absolute",
        left: "772.8px",
        top: "135.36px",
        width: "139.2px",
        height: "326.4px",
        boxSizing: "border-box",
        backgroundColor: "#F5F5F5",
        border: "1px solid #CCCCCC"
      }} /><div key={28} style={{
        position: "absolute",
        left: "782.4px",
        top: "146.88px",
        width: "120px",
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
          fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#888888"
          }}>{"Week 7"}</span></p><p style={{
          textAlign: "center",
          lineHeight: "1.2",
          fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#888888"
          }}>{"TRACE"}</span></p></div><div key={29} style={{
        position: "absolute",
        left: "782.4px",
        top: "204.48px",
        width: "120px",
        height: "52.8px",
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
          fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: "700",
            color: "#000000"
          }}>{"Adversary"}</span></p></div><svg key={30} style={{
        position: "absolute",
        left: "787.2px",
        top: "264.96px",
        width: "110.4px",
        height: "1px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="110.4" y2="0" stroke="#CCCCCC" strokeWidth="1" /></svg><div key={31} style={{
        position: "absolute",
        left: "782.4px",
        top: "274.56px",
        width: "120px",
        height: "172.8px",
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
            color: "#000000"
          }}>{"\"How does this break?\""}</span></p></div></div></div>;
};
export default Slide2;

import React, { useState, useEffect, useRef } from "react";
const Slide5: React.FC = () => {
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
  return <div id="slide-5" ref={outerRef} className="w-screen h-screen overflow-hidden relative" style={{
    backgroundColor: "#000"
  }}><div id="slide-inner-5" style={{
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
          }}>{"AI Canvas \u2014 for Generative & Agentic AI"}</span></p></div><svg key={1} style={{
        position: "absolute",
        left: "48px",
        top: "86.4px",
        width: "864px",
        height: "1px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="864" y2="0" stroke="#000000" strokeWidth="2" /></svg><div key={2} style={{
        position: "absolute",
        left: "48px",
        top: "96px",
        width: "552.98px",
        height: "38.4px",
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
          fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#444444"
          }}>{"Agrawal, et al (2018) designed the original canvas for "}</span><span style={{
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#E9455F"
          }}>{"supervised ML"}</span><span style={{
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#444444"
          }}>{"."}</span></p></div><div key={3} style={{
        position: "absolute",
        left: "48px",
        top: "144px",
        width: "403.2px",
        height: "355.2px",
        boxSizing: "border-box",
        backgroundColor: "#F5F5F5",
        border: "1px solid #CCCCCC"
      }} /><div key={4} style={{
        position: "absolute",
        left: "57.6px",
        top: "151.68px",
        width: "384px",
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
            color: "#444444"
          }}>{"ORIGINAL \u2014 Prediction Machine"}</span></p></div><div key={5} style={{
        position: "absolute",
        left: "62.4px",
        top: "187.2px",
        width: "374.4px",
        height: "59.52px",
        boxSizing: "border-box",
        backgroundColor: "#ECECEC",
        border: "1px solid #CCCCCC"
      }} /><div key={6} style={{
        position: "absolute",
        left: "78.72px",
        top: "199.68px",
        width: "345.6px",
        height: "36.48px",
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
            color: "#000000"
          }}>{"What are you predicting?"}</span></p></div><div key={7} style={{
        position: "absolute",
        left: "62.4px",
        top: "259.2px",
        width: "374.4px",
        height: "59.52px",
        boxSizing: "border-box",
        backgroundColor: "#ECECEC",
        border: "1px solid #CCCCCC"
      }} /><div key={8} style={{
        position: "absolute",
        left: "78.72px",
        top: "271.68px",
        width: "345.6px",
        height: "36.48px",
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
            color: "#000000"
          }}>{"What input data?"}</span></p></div><div key={9} style={{
        position: "absolute",
        left: "62.4px",
        top: "331.2px",
        width: "374.4px",
        height: "59.52px",
        boxSizing: "border-box",
        backgroundColor: "#ECECEC",
        border: "1px solid #CCCCCC"
      }} /><div key={10} style={{
        position: "absolute",
        left: "78.72px",
        top: "343.68px",
        width: "345.6px",
        height: "36.48px",
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
            color: "#000000"
          }}>{"What decision does it support?"}</span></p></div><div key={11} style={{
        position: "absolute",
        left: "62.4px",
        top: "403.2px",
        width: "374.4px",
        height: "59.52px",
        boxSizing: "border-box",
        backgroundColor: "#ECECEC",
        border: "1px solid #CCCCCC"
      }} /><div key={12} style={{
        position: "absolute",
        left: "78.72px",
        top: "415.68px",
        width: "345.6px",
        height: "36.48px",
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
            color: "#000000"
          }}>{"What is the value of better prediction?"}</span></p></div><div key={13} style={{
        position: "absolute",
        left: "480px",
        top: "144px",
        width: "451.2px",
        height: "355.2px",
        boxSizing: "border-box",
        backgroundColor: "#F0F0F0",
        border: "1px solid #CCCCCC"
      }} /><div key={14} style={{
        position: "absolute",
        left: "489.6px",
        top: "151.68px",
        width: "432px",
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
            color: "#000000"
          }}>{"UPDATED \u2014 "}</span><span style={{
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#000000"
          }}>{"Generative + Agentic + Civic Projects"}</span></p></div><div key={15} style={{
        position: "absolute",
        left: "494.4px",
        top: "187.2px",
        width: "422.4px",
        height: "53.76px",
        boxSizing: "border-box",
        backgroundColor: "#E4E4E4",
        border: "1px solid #CCCCCC"
      }} /><div key={16} style={{
        position: "absolute",
        left: "494.4px",
        top: "251.52px",
        width: "422.4px",
        height: "53.76px",
        boxSizing: "border-box",
        backgroundColor: "#E4E4E4",
        border: "1px solid #CCCCCC"
      }} /><div key={17} style={{
        position: "absolute",
        left: "499.2px",
        top: "197.2px",
        width: "422.4px",
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
          fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#000000"
          }}>{"Capability \u2014 which technology, in what sequence?"}</span></p></div><div key={18} style={{
        position: "absolute",
        left: "494.4px",
        top: "315.84px",
        width: "422.4px",
        height: "53.76px",
        boxSizing: "border-box",
        backgroundColor: "#E4E4E4",
        border: "1px solid #CCCCCC"
      }} /><div key={19} style={{
        position: "absolute",
        left: "499.2px",
        top: "326.4px",
        width: "422.4px",
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
          fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#000000"
          }}>{"Action tier \u2014 suggest / draft / execute at each step?"}</span></p></div><div key={20} style={{
        position: "absolute",
        left: "494.4px",
        top: "380.16px",
        width: "422.4px",
        height: "53.76px",
        boxSizing: "border-box",
        backgroundColor: "#E4E4E4",
        border: "1px solid #CCCCCC"
      }} /><div key={21} style={{
        position: "absolute",
        left: "499.2px",
        top: "390.72px",
        width: "422.4px",
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
          fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#000000"
          }}>{"Override mechanism \u2014 how does a human stop it?"}</span></p></div><div key={22} style={{
        position: "absolute",
        left: "494.4px",
        top: "444.48px",
        width: "422.4px",
        height: "53.76px",
        boxSizing: "border-box",
        backgroundColor: "#000000",
        border: "1px solid #CCCCCC"
      }} /><div key={23} style={{
        position: "absolute",
        left: "508.8px",
        top: "455.04px",
        width: "403.2px",
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
          fontSize: "calc(10pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(10pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#FFFFFF"
          }}>{"Cell 13 \u2014 Reality Check (new)"}</span></p></div><div key={24} style={{
        position: "absolute",
        left: "48px",
        top: "504px",
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
          }}>{"No widely adopted published framework has replaced the Prediction Machine canvas for generative AI. The updates above are original to this course."}</span></p></div><div key={25} style={{
        position: "absolute",
        left: "600.98px",
        top: "96px",
        width: "337.32px",
        height: "38.4px",
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
          fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#E9455F"
          }}>{"Generative and agentic AI"}</span><span style={{
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#E9455F"
          }}>{" "}</span><span style={{
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#444444"
          }}>{"require new cells."}</span></p></div><div key={26} style={{
        position: "absolute",
        left: "499.2px",
        top: "261.1px",
        width: "422.4px",
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
          fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#000000"
          }}>{"Agent level \u2014 how autonomous is this?"}</span></p></div></div></div>;
};
export default Slide5;

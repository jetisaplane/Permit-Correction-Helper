import React, { useState, useEffect, useRef } from "react";
const Slide3: React.FC = () => {
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
  return <div id="slide-3" ref={outerRef} className="w-screen h-screen overflow-hidden relative" style={{
    backgroundColor: "#000"
  }}><div id="slide-inner-3" style={{
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
          }}>{"Six roles \u2014skills behind each hat"}</span></p></div><svg key={1} style={{
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
        width: "182.4px",
        height: "36.48px",
        boxSizing: "border-box",
        backgroundColor: "#000000",
        border: "1.33px solid #000000"
      }} /><div key={3} style={{
        position: "absolute",
        left: "55.68px",
        top: "101.76px",
        width: "170.88px",
        height: "24.96px",
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
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#FFFFFF"
          }}>{"Role"}</span></p></div><div key={4} style={{
        position: "absolute",
        left: "240px",
        top: "96px",
        width: "264px",
        height: "36.48px",
        boxSizing: "border-box",
        backgroundColor: "#000000",
        border: "1.33px solid #000000"
      }} /><div key={5} style={{
        position: "absolute",
        left: "247.68px",
        top: "101.76px",
        width: "252.48px",
        height: "24.96px",
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
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#FFFFFF"
          }}>{"Job titles"}</span></p></div><div key={6} style={{
        position: "absolute",
        left: "513.6px",
        top: "96px",
        width: "225.6px",
        height: "36.48px",
        boxSizing: "border-box",
        backgroundColor: "#000000",
        border: "1.33px solid #000000"
      }} /><div key={7} style={{
        position: "absolute",
        left: "521.28px",
        top: "101.76px",
        width: "214.08px",
        height: "24.96px",
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
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#FFFFFF"
          }}>{"Hard skill"}</span></p></div><div key={8} style={{
        position: "absolute",
        left: "748.8px",
        top: "96px",
        width: "196.8px",
        height: "36.48px",
        boxSizing: "border-box",
        backgroundColor: "#000000",
        border: "1.33px solid #000000"
      }} /><div key={9} style={{
        position: "absolute",
        left: "756.48px",
        top: "101.76px",
        width: "185.28px",
        height: "24.96px",
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
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#FFFFFF"
          }}>{"Soft skill"}</span></p></div><div key={10} style={{
        position: "absolute",
        left: "48px",
        top: "132.48px",
        width: "182.4px",
        height: "65.28px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1px solid #CCCCCC"
      }} /><div key={11} style={{
        position: "absolute",
        left: "55.68px",
        top: "138.24px",
        width: "168.96px",
        height: "55.68px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#000000"
          }}>{"Ethnographer"}</span></p></div><div key={12} style={{
        position: "absolute",
        left: "240px",
        top: "132.48px",
        width: "264px",
        height: "65.28px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1px solid #CCCCCC"
      }} /><div key={13} style={{
        position: "absolute",
        left: "247.68px",
        top: "138.24px",
        width: "250.56px",
        height: "55.68px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
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
            color: "#000000"
          }}>{"UX Researcher \xB7 Community Liaison \xB7 Policy Analyst"}</span></p></div><div key={14} style={{
        position: "absolute",
        left: "513.6px",
        top: "132.48px",
        width: "225.6px",
        height: "65.28px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1px solid #CCCCCC"
      }} /><div key={15} style={{
        position: "absolute",
        left: "521.28px",
        top: "138.24px",
        width: "212.16px",
        height: "55.68px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#000000"
          }}>{"Qualitative coding and interview synthesis"}</span></p></div><div key={16} style={{
        position: "absolute",
        left: "748.8px",
        top: "132.48px",
        width: "196.8px",
        height: "65.28px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1px solid #CCCCCC"
      }} /><div key={17} style={{
        position: "absolute",
        left: "756.48px",
        top: "138.24px",
        width: "183.36px",
        height: "55.68px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#000000"
          }}>{"Listening without imposing solutions"}</span></p></div><div key={18} style={{
        position: "absolute",
        left: "48px",
        top: "197.76px",
        width: "182.4px",
        height: "65.28px",
        boxSizing: "border-box",
        backgroundColor: "#F8F8F8",
        border: "1px solid #CCCCCC"
      }} /><div key={19} style={{
        position: "absolute",
        left: "55.68px",
        top: "203.52px",
        width: "168.96px",
        height: "55.68px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#000000"
          }}>{"Explorer"}</span></p></div><div key={20} style={{
        position: "absolute",
        left: "240px",
        top: "197.76px",
        width: "264px",
        height: "65.28px",
        boxSizing: "border-box",
        backgroundColor: "#F8F8F8",
        border: "1px solid #CCCCCC"
      }} /><div key={21} style={{
        position: "absolute",
        left: "247.68px",
        top: "203.52px",
        width: "250.56px",
        height: "55.68px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
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
            color: "#000000"
          }}>{"AI Engineer \xB7 Data Scientist \xB7 Product Researcher"}</span></p></div><div key={22} style={{
        position: "absolute",
        left: "513.6px",
        top: "197.76px",
        width: "225.6px",
        height: "65.28px",
        boxSizing: "border-box",
        backgroundColor: "#F8F8F8",
        border: "1px solid #CCCCCC"
      }} /><div key={23} style={{
        position: "absolute",
        left: "521.28px",
        top: "203.52px",
        width: "212.16px",
        height: "55.68px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#000000"
          }}>{"Capability mapping across AI modalities"}</span></p></div><div key={24} style={{
        position: "absolute",
        left: "748.8px",
        top: "197.76px",
        width: "196.8px",
        height: "65.28px",
        boxSizing: "border-box",
        backgroundColor: "#F8F8F8",
        border: "1px solid #CCCCCC"
      }} /><div key={25} style={{
        position: "absolute",
        left: "756.48px",
        top: "203.52px",
        width: "183.36px",
        height: "55.68px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#000000"
          }}>{"Intellectual curiosity without attachment"}</span></p></div><div key={26} style={{
        position: "absolute",
        left: "48px",
        top: "263.04px",
        width: "182.4px",
        height: "65.28px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1px solid #CCCCCC"
      }} /><div key={27} style={{
        position: "absolute",
        left: "55.68px",
        top: "268.8px",
        width: "168.96px",
        height: "55.68px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#000000"
          }}>{"Designer"}</span></p></div><div key={28} style={{
        position: "absolute",
        left: "240px",
        top: "263.04px",
        width: "264px",
        height: "65.28px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1px solid #CCCCCC"
      }} /><div key={29} style={{
        position: "absolute",
        left: "247.68px",
        top: "268.8px",
        width: "250.56px",
        height: "55.68px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
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
            color: "#000000"
          }}>{"AI Product Manager \xB7 Solutions Architect"}</span></p></div><div key={30} style={{
        position: "absolute",
        left: "513.6px",
        top: "263.04px",
        width: "225.6px",
        height: "65.28px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1px solid #CCCCCC"
      }} /><div key={31} style={{
        position: "absolute",
        left: "521.28px",
        top: "268.8px",
        width: "212.16px",
        height: "55.68px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#000000"
          }}>{"AI Canvas \u2014 system design for generative AI"}</span></p></div><div key={32} style={{
        position: "absolute",
        left: "748.8px",
        top: "263.04px",
        width: "196.8px",
        height: "65.28px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1px solid #CCCCCC"
      }} /><div key={33} style={{
        position: "absolute",
        left: "756.48px",
        top: "268.8px",
        width: "183.36px",
        height: "55.68px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#000000"
          }}>{"Scope discipline under pressure"}</span></p></div><div key={34} style={{
        position: "absolute",
        left: "48px",
        top: "328.32px",
        width: "182.4px",
        height: "65.28px",
        boxSizing: "border-box",
        backgroundColor: "#F8F8F8",
        border: "1px solid #CCCCCC"
      }} /><div key={35} style={{
        position: "absolute",
        left: "55.68px",
        top: "334.08px",
        width: "168.96px",
        height: "55.68px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#000000"
          }}>{"Auditor"}</span></p></div><div key={36} style={{
        position: "absolute",
        left: "240px",
        top: "328.32px",
        width: "264px",
        height: "65.28px",
        boxSizing: "border-box",
        backgroundColor: "#F8F8F8",
        border: "1px solid #CCCCCC"
      }} /><div key={37} style={{
        position: "absolute",
        left: "247.68px",
        top: "334.08px",
        width: "250.56px",
        height: "55.68px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
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
            color: "#000000"
          }}>{"AI Governance Lead \xB7 Risk Analyst \xB7 Compliance Officer"}</span></p></div><div key={38} style={{
        position: "absolute",
        left: "513.6px",
        top: "328.32px",
        width: "225.6px",
        height: "65.28px",
        boxSizing: "border-box",
        backgroundColor: "#F8F8F8",
        border: "1px solid #CCCCCC"
      }} /><div key={39} style={{
        position: "absolute",
        left: "521.28px",
        top: "334.08px",
        width: "212.16px",
        height: "55.68px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#000000"
          }}>{"NIST AI RMF governance frameworks"}</span></p></div><div key={40} style={{
        position: "absolute",
        left: "748.8px",
        top: "328.32px",
        width: "196.8px",
        height: "65.28px",
        boxSizing: "border-box",
        backgroundColor: "#F8F8F8",
        border: "1px solid #CCCCCC"
      }} /><div key={41} style={{
        position: "absolute",
        left: "756.48px",
        top: "334.08px",
        width: "183.36px",
        height: "55.68px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#000000"
          }}>{"Saying no when it matters"}</span></p></div><div key={42} style={{
        position: "absolute",
        left: "48px",
        top: "393.6px",
        width: "182.4px",
        height: "65.28px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1px solid #CCCCCC"
      }} /><div key={43} style={{
        position: "absolute",
        left: "55.68px",
        top: "399.36px",
        width: "168.96px",
        height: "55.68px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#000000"
          }}>{"Builder"}</span></p></div><div key={44} style={{
        position: "absolute",
        left: "240px",
        top: "393.6px",
        width: "264px",
        height: "65.28px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1px solid #CCCCCC"
      }} /><div key={45} style={{
        position: "absolute",
        left: "247.68px",
        top: "399.36px",
        width: "250.56px",
        height: "55.68px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
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
            color: "#000000"
          }}>{"ML Engineer \xB7 Full-Stack Developer \xB7 Civic Tech Lead"}</span></p></div><div key={46} style={{
        position: "absolute",
        left: "513.6px",
        top: "393.6px",
        width: "225.6px",
        height: "65.28px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1px solid #CCCCCC"
      }} /><div key={47} style={{
        position: "absolute",
        left: "521.28px",
        top: "399.36px",
        width: "212.16px",
        height: "55.68px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#000000"
          }}>{"Rapid prototyping with API integration & vibe coding"}</span></p></div><div key={48} style={{
        position: "absolute",
        left: "748.8px",
        top: "393.6px",
        width: "196.8px",
        height: "65.28px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1px solid #CCCCCC"
      }} /><div key={49} style={{
        position: "absolute",
        left: "756.48px",
        top: "399.36px",
        width: "183.36px",
        height: "55.68px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#000000"
          }}>{"Resilience when prototypes break"}</span></p></div><div key={50} style={{
        position: "absolute",
        left: "48px",
        top: "458.88px",
        width: "182.4px",
        height: "65.28px",
        boxSizing: "border-box",
        backgroundColor: "#F8F8F8",
        border: "1px solid #CCCCCC"
      }} /><div key={51} style={{
        position: "absolute",
        left: "55.68px",
        top: "464.64px",
        width: "168.96px",
        height: "55.68px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#000000"
          }}>{"Adversary"}</span></p></div><div key={52} style={{
        position: "absolute",
        left: "240px",
        top: "458.88px",
        width: "264px",
        height: "65.28px",
        boxSizing: "border-box",
        backgroundColor: "#F8F8F8",
        border: "1px solid #CCCCCC"
      }} /><div key={53} style={{
        position: "absolute",
        left: "247.68px",
        top: "464.64px",
        width: "250.56px",
        height: "55.68px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
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
            color: "#000000"
          }}>{"Red Team Analyst \xB7 AI Safety Researcher \xB7 Penetration Tester"}</span></p></div><div key={54} style={{
        position: "absolute",
        left: "513.6px",
        top: "458.88px",
        width: "225.6px",
        height: "65.28px",
        boxSizing: "border-box",
        backgroundColor: "#F8F8F8",
        border: "1px solid #CCCCCC"
      }} /><div key={55} style={{
        position: "absolute",
        left: "521.28px",
        top: "464.64px",
        width: "212.16px",
        height: "55.68px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#000000"
          }}>{"Adversarial testing of AI systems"}</span></p></div><div key={56} style={{
        position: "absolute",
        left: "748.8px",
        top: "458.88px",
        width: "196.8px",
        height: "65.28px",
        boxSizing: "border-box",
        backgroundColor: "#F8F8F8",
        border: "1px solid #CCCCCC"
      }} /><div key={57} style={{
        position: "absolute",
        left: "756.48px",
        top: "464.64px",
        width: "183.36px",
        height: "55.68px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#000000"
          }}>{"Adversarial curiosity \u2014 assume nothing is safe"}</span></p></div><svg key={58} style={{
        position: "absolute",
        left: "10.15px",
        top: "299.71px",
        width: "27.32px",
        height: "1px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="27.32" y2="0" stroke="#000000" strokeWidth="1.33" /></svg><svg key={59} style={{
        position: "absolute",
        left: "10.15px",
        top: "351.61px",
        width: "27.32px",
        height: "1px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="27.32" y2="0" stroke="#000000" strokeWidth="1.33" /></svg></div></div>;
};
export default Slide3;

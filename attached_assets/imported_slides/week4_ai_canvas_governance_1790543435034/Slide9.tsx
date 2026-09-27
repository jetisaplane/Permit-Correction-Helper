import React, { useState, useEffect, useRef } from "react";
const Slide9: React.FC = () => {
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
  return <div id="slide-9" ref={outerRef} className="w-screen h-screen overflow-hidden relative" style={{
    backgroundColor: "#000"
  }}><div id="slide-inner-9" style={{
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
        left: "35.27px",
        top: "337.09px",
        width: "892.8px",
        height: "69.12px",
        boxSizing: "border-box",
        backgroundColor: "#FFFDE7",
        border: "2.67px solid #FFFF00"
      }} /><div key={1} style={{
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
          }}>{"Cell 4 \u2014 Agent Level"}</span></p></div><div key={2} style={{
        position: "absolute",
        left: "33.6px",
        top: "115.2px",
        width: "892.8px",
        height: "69.12px",
        boxSizing: "border-box",
        backgroundColor: "#F8F8F8",
        border: "1px solid #CCCCCC"
      }} /><div key={3} style={{
        position: "absolute",
        left: "33.6px",
        top: "115.2px",
        width: "48px",
        height: "69.12px",
        boxSizing: "border-box",
        backgroundColor: "#444444",
        border: "1.33px solid #444444"
      }} /><div key={4} style={{
        position: "absolute",
        left: "33.6px",
        top: "115.2px",
        width: "48px",
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
          }}>{"1"}</span></p></div><div key={5} style={{
        position: "absolute",
        left: "91.2px",
        top: "120.96px",
        width: "192px",
        height: "26.88px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          lineHeight: "1.2",
          fontSize: "calc(13pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(13pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#000000"
          }}>{"Scripted assistant"}</span></p></div><div key={6} style={{
        position: "absolute",
        left: "91.2px",
        top: "149.76px",
        width: "394.26px",
        height: "26.88px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
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
          }}>{"User asks, AI answers. No memory, no actions. Single-turn."}</span></p></div><svg key={7} style={{
        position: "absolute",
        left: "512.48px",
        top: "132.48px",
        width: "1px",
        height: "51.84px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="0" y2="51.84" stroke="#CCCCCC" strokeWidth="1" /></svg><div key={8} style={{
        position: "absolute",
        left: "515.12px",
        top: "127.68px",
        width: "494.87px",
        height: "55.68px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          lineHeight: "1.2",
          fontSize: "calc(11pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontStyle: "italic",
            fontSize: "calc(11pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#444444"
          }}>{"Scripted conversation \u2014 resident asks 'where do I report dumping?'"}</span></p></div><div key={9} style={{
        position: "absolute",
        left: "33.6px",
        top: "189.12px",
        width: "892.8px",
        height: "69.12px",
        boxSizing: "border-box",
        backgroundColor: "#FFFDE7",
        border: "2.67px solid #FFFF00"
      }} /><div key={10} style={{
        position: "absolute",
        left: "33.6px",
        top: "189.12px",
        width: "48px",
        height: "69.12px",
        boxSizing: "border-box",
        backgroundColor: "#000000",
        border: "1.33px solid #000000"
      }} /><div key={11} style={{
        position: "absolute",
        left: "33.6px",
        top: "189.12px",
        width: "48px",
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
            color: "#FFFF00"
          }}>{"2"}</span></p></div><div key={12} style={{
        position: "absolute",
        left: "91.2px",
        top: "194.88px",
        width: "192px",
        height: "26.88px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          lineHeight: "1.2",
          fontSize: "calc(13pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(13pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#000000"
          }}>{"Configured GPT"}</span></p></div><div key={13} style={{
        position: "absolute",
        left: "90.54px",
        top: "217.92px",
        width: "405.97px",
        height: "26.88px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
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
          }}>{"System prompt + knowledge base. Constrained behavior. Still single-session."}</span></p></div><svg key={14} style={{
        position: "absolute",
        left: "512.48px",
        top: "206.4px",
        width: "1px",
        height: "51.84px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="0" y2="51.84" stroke="#CCCCCC" strokeWidth="1" /></svg><div key={15} style={{
        position: "absolute",
        left: "521.42px",
        top: "201.6px",
        width: "488.57px",
        height: "55.68px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          lineHeight: "1.2",
          fontSize: "calc(11pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontStyle: "italic",
            fontSize: "calc(11pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#444444"
          }}>{"Custom GPT grounded in SJ city policy docs (knowledge base) answers 311 questions"}</span></p></div><div key={16} style={{
        position: "absolute",
        left: "782.4px",
        top: "194.88px",
        width: "134.4px",
        height: "23.04px",
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
          fontSize: "calc(8.5pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(8.5pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#CC2936"
          }}>{"\u2190 hackathon range"}</span></p></div><div key={17} style={{
        position: "absolute",
        left: "33.6px",
        top: "263.04px",
        width: "892.8px",
        height: "69.12px",
        boxSizing: "border-box",
        backgroundColor: "#FFFDE7",
        border: "2.67px solid #FFFF00"
      }} /><div key={18} style={{
        position: "absolute",
        left: "33.6px",
        top: "263.04px",
        width: "48px",
        height: "69.12px",
        boxSizing: "border-box",
        backgroundColor: "#000000",
        border: "1.33px solid #000000"
      }} /><div key={19} style={{
        position: "absolute",
        left: "33.6px",
        top: "263.04px",
        width: "48px",
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
            color: "#FFFF00"
          }}>{"3"}</span></p></div><div key={20} style={{
        position: "absolute",
        left: "91.2px",
        top: "268.8px",
        width: "192px",
        height: "26.88px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          lineHeight: "1.2",
          fontSize: "calc(13pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(13pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#000000"
          }}>{"Workflow agent"}</span></p></div><div key={21} style={{
        position: "absolute",
        left: "90.54px",
        top: "291.84px",
        width: "405.97px",
        height: "26.88px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
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
          }}>{"Reads and writes to external systems. Multi-step. Human approves each action."}</span></p></div><svg key={22} style={{
        position: "absolute",
        left: "512.48px",
        top: "280.32px",
        width: "1px",
        height: "51.84px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="0" y2="51.84" stroke="#CCCCCC" strokeWidth="1" /></svg><div key={23} style={{
        position: "absolute",
        left: "521.42px",
        top: "277.39px",
        width: "399.04px",
        height: "55.68px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          lineHeight: "1.2",
          fontSize: "calc(11pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontStyle: "italic",
            fontSize: "calc(11pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#444444"
          }}>{"GPT reads sheet \u2192 classifies complaint \u2192 drafts routing row \u2192 supervisor approves"}</span></p></div><div key={24} style={{
        position: "absolute",
        left: "782.4px",
        top: "268.8px",
        width: "134.4px",
        height: "23.04px",
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
          fontSize: "calc(8.5pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(8.5pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#CC2936"
          }}>{"\u2190 hackathon range"}</span></p></div><div key={25} style={{
        position: "absolute",
        left: "33.6px",
        top: "336.96px",
        width: "48px",
        height: "69.12px",
        boxSizing: "border-box",
        backgroundColor: "#444444",
        border: "1.33px solid #444444"
      }} /><div key={26} style={{
        position: "absolute",
        left: "33.6px",
        top: "336.96px",
        width: "48px",
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
          }}>{"4"}</span></p></div><div key={27} style={{
        position: "absolute",
        left: "91.2px",
        top: "342.72px",
        width: "192px",
        height: "26.88px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          lineHeight: "1.2",
          fontSize: "calc(13pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(13pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#000000"
          }}>{"Supervised autonomous"}</span></p></div><div key={28} style={{
        position: "absolute",
        left: "91.2px",
        top: "365.95px",
        width: "415.12px",
        height: "26.88px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
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
          }}>{"Executes sequences without per-step approval. Escalates on uncertainty."}</span></p></div><svg key={29} style={{
        position: "absolute",
        left: "512.48px",
        top: "347.89px",
        width: "1px",
        height: "51.84px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="0" y2="51.84" stroke="#CCCCCC" strokeWidth="1" /></svg><div key={30} style={{
        position: "absolute",
        left: "518.63px",
        top: "347.52px",
        width: "411.36px",
        height: "55.68px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          lineHeight: "1.2",
          fontSize: "calc(11pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontStyle: "italic",
            fontSize: "calc(11pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#444444"
          }}>{"Agent auto-routes low-risk reports, flags hazmat for human review"}</span></p></div><div key={31} style={{
        position: "absolute",
        left: "33.6px",
        top: "410.88px",
        width: "892.8px",
        height: "69.12px",
        boxSizing: "border-box",
        backgroundColor: "#F8F8F8",
        border: "1px solid #CCCCCC"
      }} /><div key={32} style={{
        position: "absolute",
        left: "33.6px",
        top: "410.88px",
        width: "48px",
        height: "69.12px",
        boxSizing: "border-box",
        backgroundColor: "#444444",
        border: "1.33px solid #444444"
      }} /><div key={33} style={{
        position: "absolute",
        left: "33.6px",
        top: "410.88px",
        width: "48px",
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
          }}>{"5"}</span></p></div><div key={34} style={{
        position: "absolute",
        left: "91.2px",
        top: "416.64px",
        width: "192px",
        height: "26.88px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          lineHeight: "1.2",
          fontSize: "calc(13pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(13pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#000000"
          }}>{"Fully autonomous"}</span></p></div><div key={35} style={{
        position: "absolute",
        left: "91.2px",
        top: "445.44px",
        width: "399.73px",
        height: "26.88px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
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
          }}>{"Self-directed goal pursuit. Minimal human checkpoints."}</span></p></div><svg key={36} style={{
        position: "absolute",
        left: "512.48px",
        top: "421.44px",
        width: "1px",
        height: "51.84px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="0" y2="51.84" stroke="#CCCCCC" strokeWidth="1" /></svg><div key={37} style={{
        position: "absolute",
        left: "518.63px",
        top: "417.6px",
        width: "404.33px",
        height: "55.68px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          lineHeight: "1.2",
          fontSize: "calc(11pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontStyle: "italic",
            fontSize: "calc(11pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#444444"
          }}>{"Agent monitors sensors, dispatches crews, files reports without staff"}</span></p></div><div key={38} style={{
        position: "absolute",
        left: "33.6px",
        top: "497.28px",
        width: "892.8px",
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
          fontSize: "calc(10pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontStyle: "italic",
            fontSize: "calc(10pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#888888"
          }}>{"Most hackathon prototypes operate at Level 2 or 3, possibly Level 4 with caution. Level 3 requires an API integration (Replit/Colab track). "}</span></p><p style={{
          textAlign: "center",
          lineHeight: "1.2",
          fontSize: "calc(10pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontStyle: "italic",
            fontSize: "calc(10pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#888888"
          }}>{"Know your level \u2014 it determines your data, your risk, and your governance."}</span></p></div><div key={39} style={{
        position: "absolute",
        left: "786.06px",
        top: "344.04px",
        width: "134.4px",
        height: "23.04px",
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
          fontSize: "calc(8.5pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(8.5pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#CC2936"
          }}>{"\u2190 hackathon range"}</span></p></div></div></div>;
};
export default Slide9;

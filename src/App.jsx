import React, { useState } from "react";

function App() {
  const [activeLink, setActiveLink] = useState("#home");

  return (
    <div className="app">
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          background: "rgba(10, 10, 10, 0.8)",
          backdropFilter: "blur(10px)",
          zIndex: 100,
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1.5rem 0",
          }}
        >
          <h1
            style={{
              fontSize: "1.5rem",
              fontWeight: "700",
              letterSpacing: "-0.5px",
            }}
          >
            Portfolio<span style={{ color: "var(--accent-color)" }}>.</span>
          </h1>
          <nav style={{ display: "flex", gap: "2rem" }}>
            {["Home", "Work", "About", "Contact"].map((item) => {
              const href = `#${item.toLowerCase()}`;
              return (
                <a
                  key={item}
                  href={href}
                  onClick={() => setActiveLink(href)}
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: "500",
                    color:
                      activeLink === href ? "var(--primary-color)" : "#888",
                    position: "relative",
                  }}
                >
                  {item}
                </a>
              );
            })}
          </nav>
        </div>
      </header>

      <main>
        <section
          id="home"
          className="container"
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            paddingTop: "80px",
          }}
        >
          <div className="animate-fade-in">
            <h2
              style={{
                fontSize: "1.25rem",
                color: "var(--accent-color)",
                marginBottom: "1rem",
                fontFamily: "monospace",
              }}
            >
              Hi, my name is
            </h2>
          </div>
          <div className="animate-fade-in delay-100">
            <h1
              style={{
                fontSize: "clamp(3rem, 8vw, 5rem)",
                fontWeight: "700",
                lineHeight: "1.1",
                marginBottom: "1rem",
              }}
            >
              Your Name.
            </h1>
          </div>
          <div className="animate-fade-in delay-200">
            <h1
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                fontWeight: "700",
                lineHeight: "1.1",
                color: "#888",
                marginBottom: "2rem",
              }}
            >
              I build things for the web.
            </h1>
          </div>
          <div className="animate-fade-in delay-300">
            <p
              style={{
                maxWidth: "540px",
                fontSize: "1.1rem",
                color: "#ccc",
                marginBottom: "3rem",
                lineHeight: "1.8",
              }}
            >
              I'm a software engineer specializing in building (and occasionally
              designing) exceptional digital experiences. Currently, I'm focused
              on building accessible, human-centered products.
            </p>
            <button
              style={{
                padding: "1.2rem 2.5rem",
                fontSize: "1rem",
                background: "transparent",
                border: "2px solid var(--primary-color)",
                borderRadius: "4px",
                color: "var(--primary-color)",
                fontWeight: "600",
                marginTop: "1rem",
              }}
              onMouseOver={(e) => {
                e.target.style.background = "var(--primary-color)";
                e.target.style.color = "#fff";
              }}
              onMouseOut={(e) => {
                e.target.style.background = "transparent";
                e.target.style.color = "var(--primary-color)";
              }}
            >
              Check out my work!
            </button>
          </div>
        </section>

        <section id="work" className="container" style={{ padding: "8rem 0" }}>
          <div
            className="section-header"
            style={{
              marginBottom: "4rem",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <h3
              style={{
                fontSize: "2rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--primary-color)",
                  fontFamily: "monospace",
                  fontSize: "1.5rem",
                  marginRight: "0.5rem",
                }}
              >
                01.
              </span>
              Some Things I've Built
            </h3>
            <div
              style={{
                height: "1px",
                background: "#333",
                flex: 1,
                maxWidth: "300px",
              }}
            ></div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                style={{
                  background: "var(--surface-color)",
                  borderRadius: "8px",
                  overflow: "hidden",
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                }}
                className="project-card"
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "translateY(-10px)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <div
                  style={{
                    height: "220px",
                    background: "#2a2a2a",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: `linear-gradient(45deg, ${
                        item % 2
                          ? "var(--primary-color)"
                          : "var(--secondary-color)"
                      }aa, transparent)`,
                      opacity: 0.6,
                    }}
                  ></div>
                </div>
                <div style={{ padding: "2rem" }}>
                  <h4
                    style={{
                      fontSize: "1.4rem",
                      marginBottom: "1rem",
                      color: "#e6f1ff",
                    }}
                  >
                    Project Name {item}
                  </h4>
                  <p
                    style={{
                      color: "#8892b0",
                      fontSize: "1rem",
                      marginBottom: "1.5rem",
                    }}
                  >
                    A comprehensive web application that solves real-world
                    problems. Built with high performance and accessibility in
                    mind.
                  </p>
                  <ul
                    style={{
                      display: "flex",
                      gap: "1rem",
                      listStyle: "none",
                      fontSize: "0.8rem",
                      fontFamily: "monospace",
                      color: "#888",
                    }}
                  >
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Vite</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="container"
          style={{ padding: "8rem 0", textAlign: "center", maxWidth: "600px" }}
        >
          <p
            style={{
              color: "var(--primary-color)",
              fontFamily: "monospace",
              marginBottom: "1rem",
            }}
          >
            02. What's Next?
          </p>
          <h2
            style={{
              fontSize: "3rem",
              marginBottom: "1.5rem",
              fontWeight: "700",
            }}
          >
            Get In Touch
          </h2>
          <p
            style={{
              color: "#8892b0",
              fontSize: "1.1rem",
              marginBottom: "4rem",
              lineHeight: "1.8",
            }}
          >
            Although I'm not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I'll try my best to get back to you!
          </p>
          <a
            href="mailto:hello@example.com"
            style={{
              padding: "1.2rem 2.5rem",
              fontSize: "1rem",
              background: "transparent",
              border: "2px solid var(--primary-color)",
              borderRadius: "4px",
              color: "var(--primary-color)",
              fontWeight: "600",
              display: "inline-block",
            }}
          >
            Say Hello
          </a>
        </section>
      </main>

      <footer
        style={{
          padding: "2rem 0",
          textAlign: "center",
          color: "#666",
          fontSize: "0.9rem",
          fontFamily: "monospace",
        }}
      >
        <p>Built with React & Vite by Portfolio</p>
      </footer>
    </div>
  );
}

export default App;

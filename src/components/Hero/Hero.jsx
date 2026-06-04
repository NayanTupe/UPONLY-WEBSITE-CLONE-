import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import "./Hero.css";

const Hero = () => {
  const words = [
    "Track Activity",
    "Measure Sales",
    "Close Deals",
    "Grow Faster",
  ];

  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-bg-grid"></div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-pill">
            <span></span>
          </div>

          <h1>
            Capture Every <br />
            Lead. <br />
            Conclude Every <br />
            Deal. <br />
            <strong>
              Built to <br />
              <span key={wordIndex} className="changing-text">
                {words[wordIndex]}
              </span>
            </strong>
          </h1>

          <p>
            SMOS unifies lead management, deal pipelines, team workflows, and AI
            insights into one intelligent platform — built to scale from startup
            to enterprise. Unlike Salesforce, we capture activity, measure
            efficiency, and help your team conclude sales & service clients.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Get Started <ArrowRight size={18} />
            </button>
            <button className="secondary-btn">How It Works</button>
          </div>
        </div>

        <div className="dashboard-wrapper">
          <div className="dashboard-card">
            <div className="dashboard-top">
              <div className="dots">
                <span className="red"></span>
                <span className="yellow"></span>
                <span className="green"></span>
              </div>
              <p>SMOS Dashboard</p>
              <small>● Live</small>
            </div>

            <div className="dashboard-body">
              <div className="sidebar">
                <div className="active">📊 Analytics</div>
                <div>🎯 Leads</div>
                <div>📁 Pipeline</div>
                <div>👥 Team</div>
                <div>⚡ AI Insights</div>
              </div>

              <div className="dashboard-main">
                <div className="stats">
                  <div>
                    <span>Revenue</span>
                    <h3>₹2.4Cr</h3>
                    <p>↑ 12%</p>
                  </div>

                  <div>
                    <span>Deals Won</span>
                    <h3>147</h3>
                    <p>↑ 8%</p>
                  </div>

                  <div>
                    <span>Conversion</span>
                    <h3>34%</h3>
                    <p>↑ 5%</p>
                  </div>
                </div>

                <div className="chart">
                  <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                    <path
                      d="M0,115 C80,105 120,75 190,75 C260,75 285,45 340,38 C395,31 410,98 455,80 C475,72 490,55 500,35"
                      fill="none"
                      stroke="#3f8cff"
                      strokeWidth="5"
                    />
                  </svg>
                </div>

                <div className="activity-row">
                  <span>● New lead: Rajesh Sharma — Mumbai</span>
                  <small>2m ago</small>
                </div>

                <div className="activity-row">
                  <span>● Deal closed: ₹12L — Prop-Tech</span>
                  <small>35m ago</small>
                </div>
              </div>
            </div>
          </div>

          <div className="float-card ai-card">
            🤖
            <div>
              <span>AI Suggestion</span>
              <b>Follow up today</b>
            </div>
          </div>

          <div className="float-card score-card">
            🎯
            <div>
              <span>Lead Score</span>
              <b>94</b>
            </div>
          </div>

          <div className="float-card pipe-card">
            📈
            <div>
              <span>Pipeline</span>
              <b>₹4.2Cr</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
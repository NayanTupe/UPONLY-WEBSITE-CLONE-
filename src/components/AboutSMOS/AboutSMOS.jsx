import React from "react";
import "./AboutSMOS.css";

const activities = [
  ["green", "📞 Call — Rajesh (Mumbai)", "2m ago"],
  ["blue", "📍 Site Visit — Prop-Tech", "18m ago"],
  ["orange", "📧 Follow-up Sent — Acuité", "45m ago"],
  ["purple", "✅ Deal Closed — ₹12L", "1h ago"],
];

const AboutSMOS = () => {
  return (
    <section id="about" className="about-smos">
      <div className="about-container">
        <div className="section-pill">● WHY SMOS</div>

        <div className="about-heading">
          <h2>
            What Salesforce Can't Do. <br />
            <span>We Built From Scratch.</span>
          </h2>

          <p>
            CRMs track leads. SMOS manages the entire sales lifecycle — from
            capturing every field activity, to measuring team efficiency in
            real-time, to concluding deals AND servicing clients post-sale.
            Nobody else does all three.
          </p>
        </div>

        <div className="about-grid">
          <div className="feature-card tall-card">
            <div className="card-label">Activity Intelligence</div>
            <div className="card-icon">📡</div>

            <h3>Capture Activity</h3>
            <p>
              Every call, visit, follow-up, and client interaction is
              automatically captured. No activity goes untracked.
            </p>

            <div className="activity-list">
              {activities.map((item, index) => (
                <div className="activity-item" key={index}>
                  <i className={`dot ${item[0]}`}></i>
                  <b>{item[1]}</b>
                  <small>{item[2]}</small>
                </div>
              ))}
            </div>

            <div className="today-box">
              <strong>147</strong>
              <span>Activities Today</span>
            </div>

            <div className="chip-row bottom-chips">
              <span>✓ Auto-logged interactions</span>
              <span>✓ Visit & call tracking</span>
              <span>✓ Real-time field updates</span>
            </div>
          </div>

          <div className="feature-card">
            <div className="card-label">Performance Analytics</div>
            <div className="card-icon">⚡</div>

            <h3>Measure Efficiency</h3>
            <p>
              AI-powered scoring tells you exactly who's performing and where
              bottlenecks exist.
            </p>

            <div className="progress-list">
              <div className="progress-item">
                <span>Amit</span>
                <div className="progress-track">
                  <div className="progress-fill green" style={{ width: "92%" }} />
                </div>
                <b className="green-text">92%</b>
              </div>

              <div className="progress-item">
                <span>Priya</span>
                <div className="progress-track">
                  <div className="progress-fill blue" style={{ width: "78%" }} />
                </div>
                <b className="blue-text">78%</b>
              </div>

              <div className="progress-item">
                <span>Rahul</span>
                <div className="progress-track">
                  <div className="progress-fill orange" style={{ width: "65%" }} />
                </div>
                <b className="orange-text">65%</b>
              </div>
            </div>

            <div className="chip-row">
              <span>✓ Team scorecards</span>
              <span>✓ Pipeline velocity</span>
              <span>✓ Bottleneck detection</span>
            </div>
          </div>

          <div className="feature-card active-border">
            <div className="card-label">End-to-End Lifecycle</div>
            <div className="card-icon">🎯</div>

            <h3>Conclude Sales & Service</h3>
            <p>
              From first touch to final payment — and ongoing service. We manage
              the complete lifecycle.
            </p>

            <div className="timeline">
              {["Lead", "Qualify", "Propose", "Close", "Service"].map(
                (step, index) => (
                  <div className="timeline-step" key={step}>
                    <div className={index === 4 ? "step green-step" : "step"}>
                      {index === 4 ? "➜" : "✓"}
                    </div>
                    <span>{step}</span>
                  </div>
                )
              )}
            </div>

            <div className="chip-row">
              <span>✓ Deal closure workflows</span>
              <span>✓ Post-sales servicing</span>
              <span>✓ Client retention</span>
            </div>
          </div>
        </div>

        <div className="architecture-card">
          <p>SMOS Architecture</p>

          <div className="architecture-flow">
            <div className="arch-box dark">
              <span>⚙️</span>
              <b>Core OS</b>
              <small>Contracts · Entities · Events</small>
            </div>

            <i>→</i>

            <div className="arch-box blue">
              <span>🎛️</span>
              <b>Control Plane</b>
              <small>Config · Policy · Flags</small>
            </div>

            <i>→</i>

            <div className="arch-box gradient">
              <span>🔌</span>
              <b>Plugins</b>
              <small>Real Estate · NBFC · Wealth</small>
            </div>

            <i>→</i>

            <div className="arch-box light">
              <span>📱</span>
              <b>App Shells</b>
              <small>Web · Mobile · API</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSMOS;
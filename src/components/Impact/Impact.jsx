import React from "react";
import { UsersRound, DollarSign, Zap, ShieldCheck } from "lucide-react";
import "./Impact.css";

const stats = [
  {
    icon: <UsersRound size={22} />,
    value: "30,000+",
    label: "Users Empowered",
    color: "#3f8cff",
  },
  {
    icon: <DollarSign size={22} />,
    value: "₹6.5Cr",
    label: "Capital Raised",
    color: "#12b981",
  },
  {
    icon: <Zap size={22} />,
    value: "40%",
    label: "Efficiency Boost",
    color: "#f59e0b",
  },
  {
    icon: <ShieldCheck size={22} />,
    value: "27+",
    label: "Team Members",
    color: "#8b5cf6",
  },
];

const Impact = () => {
  return (
    <section id="impact" className="impact-section">
      <div className="impact-container">
        <div className="impact-pill">● OUR IMPACT</div>

        <div className="impact-heading">
          <h2>Numbers That Speak</h2>
        </div>

        <div className="impact-stats-grid">
          {stats.map((item) => (
            <div className="impact-stat-card" key={item.label}>
              <div
                className="impact-icon"
                style={{
                  color: item.color,
                  borderColor: `${item.color}35`,
                  background: `${item.color}12`,
                }}
              >
                {item.icon}
              </div>

              <h3 style={{ color: item.color }}>{item.value}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>

        <div className="growth-card">
          <div className="growth-header">
            <h3>Year-over-Year Growth</h3>
            <span>YOY</span>
          </div>

          <div className="growth-row">
            <div className="growth-label">👥 Clientele Growth</div>
            <div className="growth-track">
              <div className="growth-fill blue-fill"></div>
            </div>
            <strong className="blue-text">75%</strong>
          </div>

          <div className="growth-row">
            <div className="growth-label">📈 Revenue Growth</div>
            <div className="growth-track">
              <div className="growth-fill green-fill"></div>
            </div>
            <strong className="green-text">85%</strong>
          </div>

          <div className="growth-years">
            <span>FY 2024</span>
            <span>FY 2025</span>
            <span>FY 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
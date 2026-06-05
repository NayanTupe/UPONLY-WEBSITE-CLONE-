import React, { useState } from "react";
import { Clock3, Settings, Zap } from "lucide-react";
import "./HowItWorks.css";

const steps = [
  {
    no: "01",
    icon: <Clock3 size={26} />,
    title: "Connect",
    sub: "Get started in minutes",
    desc: "Sign up, invite your team, and integrate your existing tools. SMOS connects with WhatsApp, email, payment gateways, and 50+ services out of the box.",
  },
  {
    no: "02",
    icon: <Settings size={26} />,
    title: "Configure",
    sub: "Tailor to your workflow",
    desc: "Set up deal pipelines, team hierarchies, and automation rules, and industry-specific modules. Everything is config-driven — no code required.",
  },
  {
    no: "03",
    icon: <Zap size={26} />,
    title: "Conquer",
    sub: "Close deals with AI",
    desc: "Let AI score leads, predict outcomes, and recommend next actions. Your team focuses on selling while SMOS handles the rest.",
  },
];

const industries = [
  {
    key: "real",
    tab: "🏗️ Real Estate",
    color: "#3f8cff",
    label: "🏗️ Real Estate Plugin",
    title: "From pre-sales to post-sales, every property managed.",
    list: [
      "Property inventory & lead capture",
      "Booking engine & payment tracking",
      "Agent performance dashboards",
      "Post-sales document management",
    ],
    active: "1,247",
    month: "+89",
    dash: "Real Estate Dashboard",
  },
  {
    key: "bfsi",
    tab: "🏦 BFSI",
    color: "#12b981",
    label: "🏦 BFSI Plugin",
    title:
      "NBFCs, Banks, Insurance Intermediaries, Brokers — recovery to sales, unified.",
    list: [
      "NBFC loan origination & recovery",
      "Bank channel partner management",
      "Insurance intermediary workflows",
      "Broker onboarding & compliance",
    ],
    active: "856",
    month: "+42",
    dash: "BFSI Dashboard",
  },
  {
    key: "wealth",
    tab: "💰 Wealth Solutions",
    color: "#f59e0b",
    label: "💰 Wealth Solutions Plugin",
    title: "Retirement planning with admin-controlled instruments.",
    list: [
      "Corpus allocation & yield analysis",
      "Admin-configurable products",
      "Dynamic portfolio generation",
      "Client report sharing (PDF/WhatsApp)",
    ],
    active: "₹55L",
    month: "+12%",
    dash: "Wealth Solutions Dashboard",
  },
  {
    key: "employee",
    tab: "👥 Employee 360°",
    color: "#8b5cf6",
    label: "👥 Employee 360° Plugin",
    title: "Complete employee lifecycle — hire to retire, all in one.",
    list: [
      "Onboarding, transfers & exit management",
      "Attendance, leave & shift scheduling",
      "Payroll, reimbursements & compliance",
      "Performance reviews, KPIs & appraisals",
    ],
    active: "342",
    month: "+28",
    dash: "Employee 360° Dashboard",
  },
];

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState(industries[0]);
  const [graphKey, setGraphKey] = useState(0);

  const handleTab = (item) => {
    setActiveTab(item);
    setGraphKey((prev) => prev + 1);
  };

  return (
    <section id="how-it-works" className="how-section">
      <div className="how-grid-bg"></div>

      <div className="how-container">
        <div className="how-pill">● HOW IT WORKS</div>

        <div className="how-heading">
          <h2>
            Three Steps to <br />
            <span>Smarter Sales</span>
          </h2>

          <p>
            Go from sign-up to closing deals in under a day. No migration
            headaches, no steep learning curves.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step) => (
            <div className="step-card" key={step.no}>
              <strong>{step.no}</strong>

              <div className="step-icon">{step.icon}</div>

              <h3>{step.title}</h3>
              <h4>{step.sub}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>

        <div id="products" className="industry-block">
          <div className="industry-pill">● INDUSTRY SOLUTIONS</div>

          <div className="industry-heading">
            <h2>
              One Platform. <br />
              <span>Every Industry.</span>
            </h2>

            <p>
              Deploy pre-built industry plugins on the SMOS core — or build your
              own. Each module is tenant-isolated, fully governed, and
              production-ready.
            </p>
          </div>

          <div className="industry-tabs">
            {industries.map((item) => (
              <button
                key={item.key}
                onClick={() => handleTab(item)}
                className={activeTab.key === item.key ? "active" : ""}
                style={
                  activeTab.key === item.key
                    ? {
                        borderColor: item.color,
                        color: "#ffffff",
                        boxShadow: `0 0 0 1px ${item.color}`,
                      }
                    : {}
                }
              >
                {item.tab}
              </button>
            ))}
          </div>

          <div className="industry-card">
            <div className="industry-left">
              <div
                className="plugin-pill"
                style={{
                  color: activeTab.color,
                  borderColor: activeTab.color,
                  background: `${activeTab.color}20`,
                }}
              >
                {activeTab.label}
              </div>

              <h3>{activeTab.title}</h3>

              <ul>
                {activeTab.list.map((item) => (
                  <li key={item} style={{ "--accent": activeTab.color }}>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="industry-actions">
                <button style={{ background: activeTab.color }}>
                  Book a Demo 📅
                </button>

                <button
                  className="outline"
                  style={{
                    color: activeTab.color,
                    borderColor: activeTab.color,
                  }}
                >
                  Learn More →
                </button>
              </div>
            </div>

            <div
              className="industry-dashboard"
              style={{ borderColor: `${activeTab.color}55` }}
            >
              <div className="dash-top">
                <div>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <p>{activeTab.dash}</p>
                <small style={{ color: activeTab.color }}>● Live</small>
              </div>

              <div className="dash-body">
                <div
                  className="metric"
                  style={{ borderLeft: `3px solid ${activeTab.color}` }}
                >
                  <span>Active</span>
                  <b style={{ color: activeTab.color }}>{activeTab.active}</b>
                </div>

                <div
                  className="metric"
                  style={{ borderLeft: `3px solid ${activeTab.color}` }}
                >
                  <span>This Month</span>
                  <b style={{ color: activeTab.color }}>{activeTab.month}</b>
                </div>

                <div className="mini-chart">
                  <svg viewBox="0 0 420 140" preserveAspectRatio="none">
                    <path
                      key={graphKey}
                      className="animated-graph-line"
                      d="M0,100 C55,90 110,68 160,55 C220,40 260,52 315,35 C360,22 390,20 420,16"
                      fill="none"
                      stroke={activeTab.color}
                      strokeWidth="5"
                    />
                  </svg>
                </div>

                <div className="dash-lines">
                  {[86, 66, 45, 76, 56].map((w, index) => (
                    <i
                      key={`${graphKey}-${index}`}
                      style={{
                        "--line-width": `${w}%`,
                        background: activeTab.color,
                        animationDelay: `${index * 0.12}s`,
                      }}
                    ></i>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
import React from "react";
import {
  Eye,
  Sparkles,
  KeyRound,
  CreditCard,
  Zap,
  ShieldCheck,
} from "lucide-react";
import "./Capabilities.css";

const topFeatures = [
  {
    icon: <Eye size={22} />,
    title: "Real-time Analytics",
    desc: "Live dashboards with drill-down metrics. See your sales pulse as it happens — no delays, no stale data.",
  },
  {
    icon: <Sparkles size={22} />,
    title: "Workflow Automation",
    desc: "Automate lead assignments, follow-up sequences, approvals, and escalations. Zero manual overhead.",
  },
];

const bottomFeatures = [
  {
    icon: <KeyRound size={22} />,
    title: "AI-Powered Insights",
    desc: "Intelligent lead scoring, deal predictions, and next-best-action recommendations powered by machine learning.",
  },
  {
    icon: <CreditCard size={22} />,
    title: "Seamless Integrations",
    desc: "Connect WhatsApp, email, SMS, payment gateways, and third-party tools through pre-built connectors.",
  },
  {
    icon: <Zap size={22} />,
    title: "Lightning Data Sync",
    desc: "Real-time bidirectional sync across web, mobile, and API. Every change reflected instantly everywhere.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Enterprise Security",
    desc: "Role-based access, tenant isolation, complete audit trails, and policy-governed operations at every layer.",
  },
];

const Capabilities = () => {
  return (
    <section id="capabilities" className="capabilities-section">
      <div className="capabilities-container">
        <div className="capabilities-pill">● CORE FEATURES</div>

        <div className="capabilities-heading">
          <h2>
            Everything You Need. <br />
            <span>Nothing You Don't.</span>
          </h2>

          <p>
            Built for high-touch sales teams who need power without complexity.
          </p>
        </div>

        <div className="capabilities-top-grid">
          {topFeatures.map((item) => (
            <div className="capability-card wide-card" key={item.title}>
              <div className="capability-icon">{item.icon}</div>

              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="capabilities-bottom-grid">
          {bottomFeatures.map((item) => (
            <div className="capability-card small-card" key={item.title}>
              <div className="capability-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
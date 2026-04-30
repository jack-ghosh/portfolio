import React from "react";
import "./App.css";
import {
  ExternalLink,
  Mail,
  Code,
  Zap,
  Users,
  Download,
  MapPin,
  Calendar,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <div className="app">
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Jack Ghosh</h1>
            <p className="hero-subtitle">Full Stack Developer</p>
            <p className="hero-desc">
              Building real-time systems and shipping production code.
              <span className="highlight">Node.js</span>
              <span className="highlight">React Native</span>
              <span className="highlight">System Design</span>
              <br />
              <span style={{ opacity: 0.8 }}>
                Solo built and shipped <strong>TrackMate v1.3</strong> in 40
                days. Focused on real-time architecture and distributed systems.
              </span>
            </p>
            <div className="hero-cta">
              <a
                href="https://github.com/jack-ghosh"
                className="btn btn-primary"
              >
                <FaGithub size={18} /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/jack-ghosh"
                className="btn btn-secondary"
              >
                <FaLinkedin size={18} /> LinkedIn
              </a>
              <a
                href="mailto:jackghosh1323@gmail.com"
                className="btn btn-secondary"
              >
                <Mail size={18} /> Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section about">
        <div className="container">
          <h2>About</h2>
          <p>
            Full-stack developer with{" "}
            <strong>6 months production experience</strong> at a startup. I've
            built features end-to-end—backend APIs with Node.js & MongoDB,
            real-time systems with Socket.io, and mobile apps in React Native.
          </p>
          <p>
            I care about understanding systems deeply, not just shipping
            features. Currently obsessed with <strong>Redis patterns</strong>,{" "}
            <strong>offline-first synchronization</strong>, and{" "}
            <strong>real-time architecture</strong>.
          </p>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section experience">
        <div className="container">
          <h2>Experience</h2>

          <div className="experience-item">
            <div className="exp-header">
              <h3>Full Stack Developer</h3>
              <span className="exp-company">Euphaura (Startup)</span>
              <span className="exp-duration">6 months • Pune</span>
            </div>
            <ul className="exp-list">
              <li>
                Owned complete features end-to-end—architecture, backend APIs,
                frontend UI, and MongoDB design.
              </li>
              <li>
                Conducted code reviews and established API design patterns that
                reduced production bugs.
              </li>
              <li>
                Managed 2-person team during sprints, handling task breakdown
                and unblocking technical issues.
              </li>
              <li>
                Optimized real-time socket events and implemented Redis caching
                layers for community features.
              </li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="exp-header">
              <h3>Customer Support Executive</h3>
              <span className="exp-company">Tech Mahindra</span>
              <span className="exp-duration">8 months • Bangalore</span>
            </div>
            <ul className="exp-list">
              <li>
                Handled customer queries and diagnosed product issues for users.
              </li>
              <li>
                Identified product improvement opportunities and escalated
                insights to the product team.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section projects">
        <div className="container">
          <h2>Projects</h2>

          <div className="project-card">
            <div className="project-header">
              <h3>
                TrackMate <span className="v-tag">v1.3</span>
              </h3>
              <div className="project-actions">
                <a
                  href="https://github.com/jack-ghosh/TrackMate-app"
                  className="project-link"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
            <p className="project-desc">
              A production-grade real-time chat and live location sharing mobile
              app. Built solo in 40 days. Features geofence alerts, offline
              persistence, and encrypted messaging.
            </p>
            <div className="project-details">
              <div className="detail">
                <h4>Backend Stack</h4>
                <p>
                  Node.js, Socket.io (Redis Adapter), Redis Lua scripts for
                  geofencing, MongoDB, JWT auth with refresh tokens.
                </p>
              </div>
              <div className="detail">
                <h4>Mobile Stack</h4>
                <p>React Native, Redux Toolkit, MapLibre, Firebase FCM.</p>
              </div>
            </div>
            <div className="apk-banner">
              <div className="apk-info">
                <strong>TrackMate_v1.3.apk</strong>
                <span>24.7MB • Release Build • ProGuard</span>
              </div>
              <a
                href="https://github.com/jack-ghosh/TrackMate-app/releases/download/v1.3/TrackMate.apk"
                className="btn-apk"
              >
                <Download size={16} /> APK
              </a>
            </div>
            <div className="project-tags">
              <span className="tag">Socket.io</span>
              <span className="tag">Redis</span>
              <span className="tag">React Native</span>
              <span className="tag">Real-time</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <h3>Euphaura Community</h3>
              <a href="https://euphaura.in" className="project-link">
                <ExternalLink size={18} />
              </a>
            </div>
            <p className="project-desc">
              Hyperlocal social media infrastructure. Built the core community
              engine, media upload pipelines, and real-time feed updates.
            </p>
            <div className="project-tags">
              <span className="tag">Express.js</span>
              <span className="tag">MongoDB</span>
              <span className="tag">Redis</span>
              <span className="tag">Cloudinary</span>
              <span className="tag">Production</span>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="section tech">
        <div className="container">
          <h2>Tech Stack</h2>
          <div className="tech-grid">
            <div className="tech-category">
              <h3>
                <Code size={20} /> Backend
              </h3>
              <div className="tech-list">
                {[
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "Redis",
                  "Socket.io",
                  "Lua",
                  "JWT",
                ].map((t) => (
                  <span key={t} className="tech-badge">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="tech-category">
              <h3>
                <Zap size={20} /> Frontend
              </h3>
              <div className="tech-list">
                {[
                  "React Native",
                  "Redux",
                  "React",
                  "React Navigation",
                  "MapLibre",
                ].map((t) => (
                  <span key={t} className="tech-badge">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="tech-category">
              <h3>
                <Users size={20} /> Tools
              </h3>
              <div className="tech-list">
                {[
                  "Docker",
                  "Git",
                  "Linux (WSL2)",
                  "Firebase FCM",
                  "Postman",
                  "Render",
                ].map((t) => (
                  <span key={t} className="tech-badge">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section education">
        <div className="container">
          <h2>Education</h2>
          <div className="edu-card">
            <h3>B.Tech Computer Science & Engineering</h3>
            <p>Regent Education and Research Foundation • Graduated 2025</p>
            <p className="cgpa">CGPA: 8.14 / 10.0 | Top 3 in class</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <p>Open to opportunities 🚀 • Let’s build something impactful.</p>
          <div className="footer-links">
            <a href="https://github.com/jack-ghosh">GitHub</a>
            <a href="https://linkedin.com/in/jack-ghosh">LinkedIn</a>
            <a href="mailto:jackghosh1323@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

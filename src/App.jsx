import "./App.css";
import { ExternalLink, Mail, Code, Zap, Users } from "lucide-react";

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
              <span className="highlight">Node.js</span>,
              <span className="highlight">React Native</span>,
              <span className="highlight">System Design</span>.
              <br />
              <span style={{ opacity: 0.8 }}>
                Currently obsessed with real-time systems, scaling, and backend
                performance.
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
                href="https://mail.google.com/mail/?view=cm&fs=1&to=jackghosh1323@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <Mail size={18} /> Email
              </a>
            </div>
          </div>
          <div className="hero-accent"></div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section about">
        <div className="container">
          <h2>About</h2>
          <p>
            Full-stack developer with 6 months production experience at a
            startup. I've built features end-to-end—backend APIs with Node.js &
            MongoDB, real-time systems with Socket.io, and mobile apps in React
            Native. I write clean code, manage teams, and solve problems at
            scale.
          </p>
          <p>
            Currently extending my learning beyond the MVP phase. Focused on
            understanding system design, Redis patterns, and real-time
            architecture— not just shipping features.
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
                frontend UI, database design
              </li>
              <li>
                Conducted code reviews, established patterns for API design and
                error handling
              </li>
              <li>
                Managed 2-person team during sprints, unblocked technical issues
              </li>
              <li>
                Designed and shipped scalable Express.js APIs with MongoDB,
                optimizing query performance for real-time features
              </li>
              <li>
                Delivered production-ready community features with real-time
                updates, handling live debugging and performance issues
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
                Handled technical customer queries, diagnosed product issues
              </li>
              <li>
                Identified improvement opportunities and escalated to product
                team
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
              <h3>TrackMate</h3>
              <a
                href="https://github.com/jack-ghosh/TrackMate"
                className="project-link"
              >
                <ExternalLink size={18} />
              </a>
            </div>
            <p className="project-desc">
              Real-time chat + live location sharing mobile app built with
              scalable architecture, handling live messaging, geofencing, and
              offline sync.
            </p>
            <div className="project-details">
              <div className="detail">
                <h4>Backend</h4>
                <p>
                  Socket.io with Redis adapter, real-time messaging, geofence
                  alerts with Lua scripts, FCM push notifications, REST APIs
                  with JWT auth.
                </p>
              </div>
              <div className="detail">
                <h4>Frontend</h4>
                <p>
                  React Native with Redux normalization, react-native-maps
                  integration, WatermelonDB for offline persistence, message
                  encryption (nacl.secretbox).
                </p>
              </div>
              <div className="detail">
                <h4>Learning</h4>
                <p>
                  Socket event patterns, Redis caching, Redux normalization,
                  permission handling, real-time system architecture.
                </p>
              </div>
            </div>
            <div className="project-tags">
              <span className="tag">Socket.io</span>
              <span className="tag">React Native</span>
              <span className="tag">Redux</span>
              <span className="tag">MongoDB</span>
              <span className="tag">Redis</span>
              <span className="tag">Real-time</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <h3>Euphaura (Startup)</h3>
              <a href="https://euphaura.com" className="project-link">
                <ExternalLink size={18} />
              </a>
            </div>
            <p className="project-desc">
              Hyperlocal social media app. Shipped community features, media
              messaging, backend infrastructure, and real-time updates.
            </p>
            <div className="project-details">
              <div className="detail">
                <h4>What I Built</h4>
                <p>
                  Community features (full stack), messaging system, media
                  uploads to Cloudinary, Redis caching for conversation lists,
                  real-time socket events.
                </p>
              </div>
            </div>
            <div className="project-tags">
              <span className="tag">Express.js</span>
              <span className="tag">MongoDB</span>
              <span className="tag">Redis</span>
              <span className="tag">React</span>
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
                <span className="tech-badge">Node.js</span>
                <span className="tech-badge">Express.js</span>
                <span className="tech-badge">MongoDB</span>
                <span className="tech-badge">Redis</span>
                <span className="tech-badge">Socket.io</span>
                <span className="tech-badge">Lua</span>
                <span className="tech-badge">JWT</span>
              </div>
            </div>

            <div className="tech-category">
              <h3>
                <Zap size={20} /> Frontend
              </h3>
              <div className="tech-list">
                <span className="tech-badge">React Native</span>
                <span className="tech-badge">Redux</span>
                <span className="tech-badge">React</span>
                <span className="tech-badge">React Navigation</span>
                <span className="tech-badge">WatermelonDB</span>
              </div>
            </div>

            <div className="tech-category">
              <h3>
                <Users size={20} /> Tools & DevOps
              </h3>
              <div className="tech-list">
                <span className="tech-badge">Docker</span>
                <span className="tech-badge">Git</span>
                <span className="tech-badge">Linux (WSL2)</span>
                <span className="tech-badge">Firebase</span>
                <span className="tech-badge">Postman</span>
                <span className="tech-badge">Railway</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OPEN TO */}
      <section className="section open-to">
        <div className="container">
          <h2>Open To</h2>
          <p>
            Full-stack development roles, backend-focused positions, or
            DevOps-track opportunities.
          </p>
          <p>
            Interested in: Real-time systems, system design, distributed
            architecture, scaling apps to thousands of users.
          </p>
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
          <p>
            Open to opportunities 🚀 • Let’s build something impactful together
          </p>
          <div className="footer-links">
            <a href="https://github.com/jack-ghosh">GitHub</a>
            <a href="https://linkedin.com/in/jack-ghosh">LinkedIn</a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=jackghosh1323@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

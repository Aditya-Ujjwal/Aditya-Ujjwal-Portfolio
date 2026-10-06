import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const EMAIL = 'adityaujjwal147@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/aditya-ujjwal/';
const GITHUB = 'https://github.com/Aditya-Ujjwal';

const projects = [
  {
    number: '01',
    title: 'EduShield',
    subtitle: 'Academic Integrity Intelligence Platform',
    description:
      'An end-to-end analytical platform for screening potential AI-generated academic submissions by combining submission, behavioral, detector, and integrity signals.',
    tags: ['Python', 'SQL', 'MySQL', 'Power BI', 'XGBoost', 'Streamlit'],
    github: 'https://github.com/Aditya-Ujjwal/EduShield--Academic-Integrity-Intelligence-Platform',
    accent: 'violet',
  },
  {
    number: '02',
    title: 'SolarPulse',
    subtitle: 'Solar Energy Underperformance Detection',
    description:
      'A data-driven solution that compares actual and expected solar generation to identify persistent underperformance, performance deviations, and energy loss.',
    tags: ['Python', 'Pandas', 'SQL', 'MySQL', 'Power BI', 'ML', 'Streamlit'],
    github: 'https://github.com/Aditya-Ujjwal/SolarPulse.git',
    accent: 'cyan',
  },
  {
    number: '03',
    title: 'Airport Operations DSS',
    subtitle: 'Multi-table Operations & Data Quality System',
    description:
      'A relational airport operations project focused on ETL, data cleaning, validation, database design, operational event data, and structured SQL analysis.',
    tags: ['SQL', 'MySQL', 'ETL', 'Data Cleaning', 'Validation', 'Data Modeling'],
    github: 'https://github.com/Aditya-Ujjwal/Airport-Operations-DSS.git',
    accent: 'orange',
  },
];

const skillGroups = [
  { label: 'Analytics & BI', skills: ['SQL', 'Excel', 'Power BI', 'DAX', 'Power Query', 'Statistics'] },
  { label: 'Programming', skills: ['Python', 'Pandas', 'NumPy'] },
  { label: 'Data & Databases', skills: ['MySQL', 'Data Cleaning', 'Data Transformation', 'Data Modeling', 'EDA'] },
  { label: 'AI & Machine Learning', skills: ['Machine Learning', 'Deep Learning', 'XGBoost', 'Scikit-learn', 'Generative AI', 'LangChain'] },
  { label: 'Tools', skills: ['Streamlit', 'Git', 'GitHub'] },
];

const gmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}`;

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

function App() {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <div className="app-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar">
        <a className="brand" href="#top" aria-label="Aditya Ujjwal home">AU<span>.</span></a>
        <nav aria-label="Primary navigation">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#video">Pitch</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="resume-pill" href={LINKEDIN} target="_blank" rel="noopener noreferrer">Let’s connect <ArrowIcon /></a>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Data Analyst · Delhi, India</p>
            <h1>Turning <span>data</span><br />into decisions.</h1>
            <p className="hero-intro">
              Focused on turning raw data into structured insights, analytical solutions, and data-driven outcomes — with hands-on work across Python, SQL, Excel, Power BI, Machine Learning, and Generative AI.
            </p>
            <div className="hero-actions">
              <a className="primary-btn" href="#projects">Explore projects <ArrowIcon /></a>
              <a className="text-btn" href="#video">Watch my pitch <span>▶</span></a>
            </div>
            <div className="hero-meta">
              <span>Python</span><span>SQL</span><span>Power BI</span><span>ML</span><span>GenAI</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="photo-glow" />
            <div className="photo-frame">
              <img src="/profile.png" alt="Aditya Ujjwal" loading="eager" />
              <div className="photo-label">DATA · AI · ANALYTICS</div>
            </div>
            <div className="floating-card card-one">
              <span className="mini-label">Current focus</span>
              <strong>Data Analytics</strong>
              <small>Insights · BI · ML</small>
            </div>
            <div className="floating-card card-two">
              <span className="mini-label">Approach</span>
              <strong>End-to-end</strong>
              <small>Prepare → Analyze → Explain</small>
            </div>
          </div>
        </section>

        <section className="marquee" aria-hidden="true">
          <div>DATA ANALYTICS <span>•</span> SQL <span>•</span> PYTHON <span>•</span> POWER BI <span>•</span> MACHINE LEARNING <span>•</span> GENERATIVE AI <span>•</span> DATA ANALYTICS <span>•</span> SQL <span>•</span></div>
        </section>

        <section id="projects" className="section-pad content-section">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Selected work</p>
              <h2>Projects that solve<br /><span>analytical problems.</span></h2>
            </div>
            <p className="section-description">A selection of end-to-end projects spanning data preparation, relational databases, analysis, machine learning, and business intelligence.</p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.accent}`} key={project.title}>
                <div className="project-content">
                  <div className="project-topline">
                    <span>{project.number}</span>
                    <a className="repo-link" href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} GitHub repository`}>
                      GitHub <ArrowIcon />
                    </a>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p className="project-description">{project.description}</p>
                  <div className="tag-row">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
                <a className="project-open" href={project.github} target="_blank" rel="noopener noreferrer">
                  View repository <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section-pad content-section skills-section">
          <div className="section-heading compact">
            <div>
              <p className="section-kicker">Toolkit</p>
              <h2>Skills built for<br /><span>working with data.</span></h2>
            </div>
            <p className="section-description">From raw datasets and databases to dashboards, predictive workflows, and AI-enabled applications.</p>
          </div>

          <div className="skills-layout">
            <div className="skill-cloud">
              {['Python', 'SQL', 'Power BI', 'Excel', 'MySQL', 'Pandas', 'NumPy', 'Machine Learning', 'Deep Learning', 'Generative AI', 'LangChain', 'Streamlit', 'Git', 'GitHub'].map((skill, index) => (
                <span key={skill} className={index % 5 === 0 ? 'featured' : ''}>{skill}</span>
              ))}
            </div>
            <div className="skill-groups">
              {skillGroups.map((group) => (
                <div className="skill-group" key={group.label}>
                  <span>{group.label}</span>
                  <p>{group.skills.join('  ·  ')}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="video" className="section-pad content-section pitch-section">
          <div className="pitch-intro">
            <p className="section-kicker">Elevator pitch</p>
            <h2>50 seconds.<br /><span>One quick introduction.</span></h2>
            <p>A short introduction to the background, skills, projects, and career direction behind the portfolio.</p>
            <span className="duration-badge">● Duration · 00:50</span>
          </div>

          <div className="video-card">
            {videoFailed ? (
              <div className="video-fallback">
                <strong>Elevator pitch video</strong>
                <p>Add <code>elevator-pitch.mp4</code> to the <code>public</code> folder, then refresh the page.</p>
              </div>
            ) : (
              <video
                controls
                playsInline
                preload="metadata"
                poster="/pitch-poster.png"
                onError={() => setVideoFailed(true)}
              >
                <source src="/elevator-pitch.mp4" type="video/mp4" />
              </video>
            )}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-inner">
            <p className="section-kicker">Let’s work together</p>
            <h2>Have a data problem<br /><span>worth solving?</span></h2>
            <p className="contact-copy">I’m open to entry-level Data Analyst opportunities, project collaborations, and conversations around analytics, AI, and data-driven problem solving.</p>

            <div className="contact-actions">
              <a className="email-link" href={gmailCompose} target="_blank" rel="noopener noreferrer">
                {EMAIL} <ArrowIcon />
              </a>
              <a className="email-secondary" href={`mailto:${EMAIL}`}>Open in mail app</a>
            </div>

            <div className="contact-links">
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={GITHUB} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://github.com/Aditya-Ujjwal" target="_blank" rel="noopener noreferrer">Repositories</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Aditya Ujjwal</span>
        <span>Built around data, curiosity &amp; continuous learning.</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);

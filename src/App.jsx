import './App.css'

const stats = [
  { label: 'Projects built', value: '2+' },
  { label: 'Core skills', value: '10+' },
  { label: 'Academic score', value: '8.24' },
]

const education = [
  {
    degree: 'B.E - CSE',
    school: 'New Horizon College of Engineering',
    period: '2026',
    result: 'CGPA: 8.24 (Till 8th Semester)',
  },
  {
    degree: '12th',
    school: 'VidyaNidhi PU College, Raichur',
    period: '2022',
    result: '83.33%',
  },
  {
    degree: 'SSLC / 10th',
    school: 'VidyaVardhaka High School, Saidapur',
    period: '2020',
    result: '89.79%',
  },
]

const skills = [
  'Python',
  'JavaScript',
  'HTML',
  'CSS',
  'MySQL',
  'PostgreSQL',
  'SQLite',
  'Supabase',
  'REST APIs',
  'Backend Development',
  'Data Structures',
  'OOP',
  'GitHub',
  'Git',
  'N8N',
  'Automation',
  'Cloud Basics',
  'API Integration',
  'System Design Basics',
  'Security Fundamentals',
  'DevOps Fundamentals',
  'Linux Basics',
]

const projects = [
  {
    name: 'AI-Enhanced Web Browser',
    stack: 'Python, PyQt5, SQLite3',
    description:
      'Built a smart browser with tab management, bookmarks, Gemini AI-powered summarization and translation, Jw Player error handling, chrome redirection support for streaming, and a rewarding coin-based coupon system for browser engagement.',
  },
  {
    name: 'AI-Driven Supply Chain Analytics Platform',
    stack: 'N8N, Quadratic, PostgreSQL, Supabase, Open Exchange Rates API',
    description:
      'Designed an end-to-end analytics platform that ingested sales emails, transformed CSV datasets, loaded data into PostgreSQL, and used AI-assisted analysis to compute KPI metrics like OTIF, fill rates, and fulfillment insights.',
  },
]

const certifications = ['Introduction to Data Science', 'Introduction to Cloud Computing']

const process = [
  'Problem analysis and structured thinking',
  'Rapid prototyping and implementation',
  'Data-driven validation and optimization',
  'Clean deployment-ready solutions',
]

function App() {
  return (
    <div className="portfolio-shell">
      <div className="page-glow glow-one" />
      <div className="page-glow glow-two" />

      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">G</span>
          <span className="brand-text">Gangadhar Pujari</span>
        </div>

        <nav className="nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-cta" href="#contact">
          Hire me
        </a>
      </header>

      <main>
        <section className="hero section-frame">
          <div className="hero-copy">
            <p className="eyebrow">Bengaluru, India • Computer Science Engineer</p>
            <h1>
              I build <span>smart</span>, useful digital solutions.
            </h1>
            <p className="lead">
              I’m a Computer Science Engineering student passionate about technology,
              problem solving, and building practical software experiences that combine
              intelligence, efficiency, and user-centered design. I enjoy turning ideas into
              functional systems with clarity and purpose.
            </p>

            <div className="cta-row">
              <a className="primary-btn" href="#projects">
                View projects
              </a>
              <a className="secondary-btn" href="https://github.com/gangadharpujari-077" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>

            <div className="stats-grid" aria-label="Key portfolio statistics">
              {stats.map((item) => (
                <div className="stat-card" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-label="Profile summary card">
            <div className="profile-card glass-card">
              <div className="profile-topline">
                <span className="status-dot" />
                Open to opportunities
              </div>

              <div className="profile-avatar">
                <div className="avatar-ring" />
                <div className="avatar-core">GP</div>
              </div>

              <div className="mini-panel">
                <span>Location</span>
                <strong>Yadgir, Karnataka</strong>
              </div>
              <div className="mini-panel">
                <span>Focus</span>
                <strong>AI + Full Stack</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-frame intro-grid">
          <div className="section-heading">
            <p className="eyebrow">Profile</p>
            <h2>Driven by curiosity and practical impact.</h2>
          </div>

          <div className="about-copy">
            <p>
              I am a Computer Science Engineering student with a strong interest in software
              development, data-driven thinking, and emerging technologies. I enjoy solving
              real-world problems through clean logic, thoughtful design, and user-focused
              implementation.
            </p>
            <p>
              My experience includes building AI-enhanced browser tools and automated analytics
              platforms, which helped me strengthen my Python, data handling, database, and
              workflow automation capabilities. I thrive in collaborative environments and am
              always ready to learn, build, and improve.
            </p>
          </div>
        </section>

        <section className="section-frame values-panel">
          <div className="section-heading narrow">
            <p className="eyebrow">Strengths</p>
            <h2>Focused on learning, execution, and teamwork.</h2>
          </div>

          <div className="principles-grid">
            <article className="glass-card principle-card">
              <span className="card-index">01</span>
              <h3>Problem Solving</h3>
              <p>I enjoy understanding complex challenges and breaking them into practical, efficient solutions.</p>
            </article>
            <article className="glass-card principle-card">
              <span className="card-index">02</span>
              <h3>Team Collaboration</h3>
              <p>I value communication, sharing ideas, and working together to create useful outcomes.</p>
            </article>
            <article className="glass-card principle-card">
              <span className="card-index">03</span>
              <h3>Continuous Learning</h3>
              <p>I remain curious, eager to learn new tools, frameworks, and methods in fast-moving tech environments.</p>
            </article>
          </div>
        </section>

        <section id="projects" className="section-frame project-section">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2>Projects that combine AI, automation, and analytics.</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.name} className="project-card glass-card">
                <div className="project-image">
                  <div className="project-shape shape-one" />
                  <div className="project-shape shape-two" />
                </div>
                <div className="project-meta">
                  <span>{project.stack}</span>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section-frame process-section">
          <div className="section-heading narrow">
            <p className="eyebrow">Education</p>
            <h2>Academic foundation with practical ambition.</h2>
          </div>

          <div className="education-list">
            {education.map((item) => (
              <div className="education-item glass-card" key={item.degree}>
                <div>
                  <span className="education-degree">{item.degree}</span>
                  <h3>{item.school}</h3>
                </div>
                <div className="education-meta">
                  <span>{item.period}</span>
                  <strong>{item.result}</strong>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-frame values-panel">
          <div className="section-heading narrow">
            <p className="eyebrow">Skills</p>
            <h2>Technical strengths and core capabilities.</h2>
          </div>

          <div className="chip-grid">
            {skills.map((skill) => (
              <span className="chip" key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section className="section-frame values-panel">
          <div className="section-heading narrow">
            <p className="eyebrow">Certifications</p>
            <h2>Relevant knowledge in data and cloud fundamentals.</h2>
          </div>

          <ul className="cert-list">
            {certifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section id="contact" className="section-frame contact-panel">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Let’s connect and build something meaningful.</h2>
          </div>

          <div className="contact-actions">
            <a className="primary-btn" href="mailto:gangadhargangu9686@gmail.com">
              gangadhargangu9686@gmail.com
            </a>
            <a className="secondary-btn" href="tel:+919620955141">
              +91 9620955141
            </a>
            <a className="secondary-btn" href="https://github.com/gangadharpujari-077" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App

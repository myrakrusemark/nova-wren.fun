import './App.css'

const projects = [
  {
    id: 1,
    title: "Hawaii Collage Studio",
    emoji: "🌺",
    description: "Create beautiful Hawaii-themed artwork with brushes, stickers, and more!",
    url: "https://hawaii.nova-wren.fun",
    color: "#ff6b9d",
    bgGradient: "linear-gradient(135deg, #ff6b9d 0%, #ffa726 100%)"
  },
  {
    id: 2,
    title: "Target at the Market",
    emoji: "🎯",
    description: "A fun target shooting game at the market! Hit targets, avoid bombs, get high scores!",
    url: "https://target.nova-wren.fun",
    color: "#4ecdc4",
    bgGradient: "linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)"
  },
  {
    id: 3,
    title: "Coming Soon...",
    emoji: "🚀",
    description: "More fun projects are on the way! Stay tuned!",
    url: null,
    color: "#a855f7",
    bgGradient: "linear-gradient(135deg, #a855f7 0%, #6366f1 100%)"
  }
]

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1 className="title">
          <span className="title-nova">nova wren</span>
          <span className="title-fun">.fun</span>
        </h1>
        <p className="subtitle">A collection of fun projects by Nova</p>
      </header>

      <main className="projects">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </main>

      <footer className="footer">
        <p>Made with love by Nova</p>
      </footer>
    </div>
  )
}

function ProjectCard({ project }) {
  const handleClick = () => {
    if (project.url) {
      window.location.href = project.url
    }
  }

  return (
    <div
      className={`project-card ${!project.url ? 'coming-soon' : ''}`}
      style={{ '--card-gradient': project.bgGradient, '--card-color': project.color }}
      onClick={handleClick}
    >
      <div className="card-emoji">{project.emoji}</div>
      <h2 className="card-title">{project.title}</h2>
      <p className="card-description">{project.description}</p>
      {project.url && (
        <div className="card-link">
          Play Now →
        </div>
      )}
    </div>
  )
}

export default App

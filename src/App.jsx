import './App.css'
import { count } from './count'

const projects = [
  {
    id: 1,
    title: "Hawaii Collage Studio",
    emoji: "🌺",
    description: "Create beautiful Hawaii-themed artwork with brushes, stickers, and more!",
    url: "https://hawaii.nova-wren.fun",
    event: "game-hawaii-collage",
    color: "#ff6b9d",
    bgGradient: "linear-gradient(135deg, #ff6b9d 0%, #ffa726 100%)"
  },
  {
    id: 2,
    title: "Target at the Market",
    emoji: "🎯",
    description: "A fun target shooting game at the market! Hit targets, avoid bombs, get high scores!",
    url: "https://target.nova-wren.fun",
    event: "game-target-market",
    color: "#4ecdc4",
    bgGradient: "linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)"
  },
  {
    id: 3,
    title: "Puzzle Game",
    emoji: "🧩",
    description: "Solve 102 riddles and puzzles! Test your brain with typing and multiple choice challenges!",
    url: "https://games.nova-wren.fun?game=puzzle",
    event: "game-puzzle",
    color: "#11998e",
    bgGradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)"
  },
  {
    id: 4,
    title: "Reaction Test",
    emoji: "⚡",
    description: "Test your speed! Wait for green, then click as fast as you can. 5 rounds, beat your best time!",
    url: "https://reaction-game-ahy.pages.dev",
    event: "game-reaction-test",
    color: "#ffd700",
    bgGradient: "linear-gradient(135deg, #ffd700 0%, #ff6b6b 100%)"
  },
  {
    id: 5,
    title: "NOVAR's Pancake Factory",
    emoji: "🥞",
    description: "Cook, stack and top pancakes for hungry animal customers in a cozy 3D café!",
    url: "/pancakes.html",
    event: "game-pancake-factory",
    color: "#f08a3c",
    bgGradient: "linear-gradient(135deg, #f6b26b 0%, #e2683c 100%)"
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
      count(project.event)
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

import './index.css'

const NavBar = props => {
  const {score, topScore, gameOver} = props
  const resultClass = gameOver || score === 12 ? 'not-display' : 'nav-bar-item'
  return (
    <ul className="nav-bar-container">
      <li className="nav-bar-item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo-img"
        />
        <h1 className="logo-name">Emoji Game</h1>
      </li>
      <li className={`${resultClass}`}>
        <p className="scores-name">Score: {score}</p>
        <p className="scores-name">Top Score: {topScore}</p>
      </li>
    </ul>
  )
}

export default NavBar
